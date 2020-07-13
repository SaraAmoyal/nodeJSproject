const express=require('express');
const router=express.Router();
const fs=require('fs');
const { send } = require('process');
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'endProject';

router.use('/', function(req, res, next){
console.log('arived workers');
next();
})

router.get('/getAllWorkers', function(req, res){
    console.log("arived getAllWorkers!")
MongoClient.connect(url, function(err, client){
    if(err){
        return res.status(500).send(err);
    }
    else{
        const myDataBase=client.db(dbName);
        const workersCollection=myDataBase.collection('workers');
        var allWorkersDetails=workersCollection.find({}).toArray(function(req, result){
                if(err){
                        client.close();
                        return res.status(500).send(err);
                }
                else{
                    //the first time-write all the objects into the json
                    // var empsAsJSON=[];
                    // empsAsJSON.push(JSON.stringify(result));
                    // fs.writeFile('employees.json', empsAsJSON, (err)=>{
                    //         if(err) console.log()
                    // });
                    var Names = result.map(function(item){return {name:item.firstName+" "+item.lastName, telephone:item.tel};});
                    client.close();
                    return res.send(Names);
                }``
        });
    }
})
});
router.get('/getWorkerDetails', function(req ,res){
    console.log("arived get worker details, try connect.");
    MongoClient.connect(url, function(err, client) {
    if (err) console.log("can't connect!");
    else{
     const myDataBase = client.db(dbName);
     const workersCollection=myDataBase.collection('workers');
     //console.log(req.query.id)
     var workerDetails=workersCollection.find({id:req.query.id}).toArray(function(err, result){
         if(err){
             console.log(err);
             res=err;
             client.close();
             return res.status(500).send(err);
         }
         else
         {
             console.log("the result:"+result[0].id);
             client.close();
             return res.send(result[0]);
         }
     });
     
    }
});
});


router.post('/deleteWorker', function(req ,res){
    console.log("arived delete worker, try connect");
    MongoClient.connect(url, function(err, client) {

    if (err) console.log("can't connect!");
    else{
     const myDataBase = client.db(dbName);
     const workersCollection=myDataBase.collection('workers');
     //console.log("hjfkd "+req.body.id)
     workersCollection.updateOne(
     {id:req.body.id},
     {$set:{
            "isAction":false
     }},function(err, answer){
         if(err) {client.close();
            return res.status(500).send(err);}
         else{
            client.close();
            return res.send(answer)
         }
     })
     
     console.log("succeed connect.");
    }
});
});

router.post('/addWorker', function(req, res){
    console.log("arived add worker.")
    MongoClient.connect(url, function(err, client) {

        if (err) console.log("can't connect!");
        else{
         const myDataBase = client.db(dbName);
         const workersCollection=myDataBase.collection('workers');
         console.log("the id: "+req.body.id)
         workersCollection.insertOne(req.body
        ,function(err, answer){
             if(err) {
                client.close();
                return res.status(500).send(err);}
             else{
                 newWorker=req.body;
                 fs.readFile('employees.json','utf-8', (err, buffer) => {
                     if (err) return console.error('File read error: ', err)
                     var ip = ']';
                     var newValue = buffer.slice(0, buffer.length-1);
                     newValue+=',';
                     newValue+=JSON.stringify(newWorker);
                     newValue+=']';
                     fs.writeFile("employees.json", newValue, err => {
                     if (err) return console.error('File write error:', err)
                     })
                     })
                client.close();
                return res.send(answer)
             }
         })
         console.log("succeed connect.");
        }
    });
})

router.put('/editWorker', function(req, res){
    console.log("arived add worker.")
    MongoClient.connect(url, function(err, client) {
        if (err) console.log("can't connect!");
        else{
         const myDataBase = client.db(dbName);
         const workersCollection=myDataBase.collection('workers');
         console.log("the id: "+req.body.id)
         workersCollection.replaceOne({id:req.body.id}, req.body
        ,function(err, answer){
             if(err) {client.close();
                return res.status(500).send(err);}
             else{
                client.close();
                return res.send(answer)
             }
         })
         console.log("succeed connect.");
        }
    });
})

module.exports=router;
