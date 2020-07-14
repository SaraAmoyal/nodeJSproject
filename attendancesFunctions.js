const express=require('express');
const router=express.Router();
const fs=require('fs');
const { send } = require('process');
const { json } = require('express');
const MongoClient = require('mongodb').MongoClient;
var datetime = require('node-datetime');


const url = 'mongodb://localhost:27017';
const dbName = 'endProject';

router.use('/', function(req, res, next){
    console.log('arived attendance');
    next();
    })

router.post('/addJobDay', function(req, res){
    console.log("arived add Job Day.")
    MongoClient.connect(url, function(err, client) {
         if (err) console.log("can't connect!");
         else{
          const myDataBase = client.db(dbName);
          const attendancesCollection=myDataBase.collection('attendance');
          console.log("the id: "+req.body.id)
          attendancesCollection.insertOne(req.body
           ,function(err, answer){
              if(err) {
                 client.close();
                 return res.status(500).send(err);}
              else{
                  newAtt=req.body;
                  var path='attendaceFiles/'+newAtt.forWorker;
                  if(!fs.existsSync(path))
                  {
                      fs.appendFile(path, JSON.stringify(newAtt), function(err){
                            if(err) {console.error(err);}
                      })
                  }
                  else
                  {
                      fs.readFile(path,'utf-8', (err, buffer) => {
                      if (err) return console.error('File read error: ', err);
                      if(buffer[buffer.length-1]==']')
                       var newValue = buffer.slice(0, buffer.length-1);
                      else
                      {
                          var newValue=buffer;
                          var arrayJson = [newValue.slice(0, 0), '[', newValue.slice(0)].join('');
                          newValue=arrayJson;
                      }
                      newValue+=',';
                      newValue+=JSON.stringify(newAtt);
                      newValue+=']';
                      fs.writeFile(path, newValue, err => {
                      if (err) return console.error('File write error:', err)
                      })
                      })
                    }
                 client.close();
                 return res.send(answer)
              }
          })
          console.log("succeed connect.");
        }
    });
})


router.get('/getMyReport', function(req ,res){
    console.log("arived get report.");
    var path='attendaceFiles/'+req.query.id;
    console.log(path)
                  if(!fs.existsSync(path))
                  {
                      console.log('not exists')
                      return 'Sorry, there is not a report for you.'
                  }
                  fs.readFile(path, function(err, result){
                    if(err) 
                     return "err in read the report: "+err;
                    
                   
                    arr=JSON.parse(result);
console.log(arr);
                    arr.forEach(element => {
                        var dt = datetime.create(element.date);
                        var formatted = dt.format('m/d/Y H:M:S');
                        element.date=formatted;
                    }); 
                    
                    return res.send(arr);
                  });
});

module.exports=router;