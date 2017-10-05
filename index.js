var Express=require("express");
var App=Express();
var Fs=require("fs");
var Glob=require("glob");
var Path=require("path");

Glob.sync("./html/**/*.html").forEach(function(file){
    // console.log(Path.resolve(file));
    // console.log(__dirname);
    var filePath=Path.resolve(file);
    filePath=filePath.substr((__dirname+"/html").length);
    console.log((__dirname+"/html").length);
    console.log(__dirname+"/html");
    console.log(filePath);
});

App.use(Express.static("static"));
App.all("/",function(req,res){
    //res.send("Test Text");
    var content=Fs.readFileSync("./html/index.html","utf8");
    res.send(content);
});

var server=App.listen(8080,function(){
    var host=server.address().address;
    var port=server.address().port;
    console.log("%s:%s",host,port);
});