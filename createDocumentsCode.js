const { workers } = require("cluster");

function randName(){
    var letters="abcdwfghijklmnopqrstuvwxyz";
    var name="";
    var length=Math.floor(Math.random()*10)+1;
    for(var i=0;i<length;i++)
    {var index=Math.floor(Math.random()*letters.length);
    name+=letters[index];}
    return name;}
    
function randId(){
        var letters="0123456789";
        var name="";
        var length=9;
        for(var i=0;i<length;i++)
        {var index=Math.floor(Math.random()*letters.length);
        name+=letters[index];}
        return name;}
        
function randTel(){
            var letters="0123456789";
            var name="";
            var length=10;
            for(var i=0;i<length;i++)
            {var index=Math.floor(Math.random()*letters.length);
            name+=letters[index];}
            return name;}
            
function randMail(){
                var letters="abcdwfghijklmnopqrstuvwxyz098";
                var name="";
                var length=Math.floor(Math.random()*12)+4;
                for(var i=0;i<length;i++)
                {var index=Math.floor(Math.random()*letters.length);
                name+=letters[index];}
                name+="@gmail.com";
                return name;}
    
    for(var i=0;i<100;i++)
    {
    var Id=randId();
    var fn=randName();
    var ln=randName();
    var add=randName();
    var te=randTel();
    var mai=randMail();
    var act=true;
    var obj=new workers(Id, )
    var anObj = { id: Id, firstName: fn,  lastName:ln, address:add, tel:te, mail:mai, isActive:act};
    workersCollection.insertOne(anObj, function(err, res) {
        if (err) console.log("can't insert!");
        else
        console.log("1 document inserted");
       });
    } 
    
    