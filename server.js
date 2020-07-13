const express=require('express');
const app=express();
const fs=require('fs');

const workersPage=require('./workersFuunctions');
//const attendancesPage=require('./attendancesFunctions');

const bodyParser=require('body-parser');
//const { workers } = require('cluster');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.listen(4000, function(){
    console.log('Example app listening on port 4000!');
})
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
})



// app.get('/', function(req, res){
// console.log('hello');
// })

// app.use(function(req, res, next){
//     console.log('use')
//     next();//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// })


app.use('/workers', workersPage);

//app.use('./attendance', attendancesPage);
// app.use(function(req, res, next){
//     console.log('url not found.');
//     next();
// })


// const MongoClient = require('mongodb').MongoClient;

// const url = 'mongodb://localhost:27017';

// const dbName = 'endProject';

    

// MongoClient.connect(url, function(err, client) {

//     if (err) console.log("can't connect!");
//     else{debugger
//      const myDataBase = client.db(dbName);
//      const workersCollection=myDataBase.collection('workers');
//      var attendanceCollection=myDataBase.collection('attendance');
    

//     //I used it 100 times with random values 
//     // workersCollection.insertOne(anObj, function(err, res) {
//     //   if (err) console.log("can't insert!");
//     //   else
//     //   console.log("1 document inserted");
//     //  });
//      //var anObj = { id: "206831166", firstName: "sara",  lastName:"amoyal", address:"bmh 16", tel:"0556736274", mail:"saraamoyal26@gmail.com", isActive:true};
    
     
//      client.close();
//      console.log("succeed connect.");
//     }

// });