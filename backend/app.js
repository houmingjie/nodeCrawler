var express = require("express");
var template = require("art-template");
template.config("base","");
template.config("extname", ".html");
const port = 3000;
var app = express();

app.set("views","./views");
app.engine(".html", template.__express);
app.set("view engine","html");
app.listen(port);

console.log("启动");

app.get("/", function(req,res){
    res.render('./index', {
        title:"测试"
    });
});