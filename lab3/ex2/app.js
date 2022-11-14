var express = require ('express');
var app= express ();

app.listen(3000);

app.get ('/greet', function (req,res){
    res.send('hello world!');
})

var requestTime = function (req,res,next){
    req.requestTime=Date.now()
    next()
}

app.use(requestTime)

app.get('/greet',function(req,res){
    console.log('GET recieved: ' +req.requestTime);
    res.send('hello world!');
})