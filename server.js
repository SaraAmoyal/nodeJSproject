const express=require('express');
const app=express();
const fs=require('fs');

const workersPage=require('./workersFuunctions');
const attendancesPage=require('./attendancesFunctions');
var path = require('path');
const bodyParser=require('body-parser');

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
app.get('/htmlworkers', function(req, res) {
    console.log("sendfile")
    res.sendFile(path.join(__dirname + '/workers.html'));
});
app.use('/workers', workersPage);

app.use('/attendance', attendancesPage);


