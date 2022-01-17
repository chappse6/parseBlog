const express = require('express');
const app = express();
const json2xls = require('json2xls');

app.engine("html", require("ejs").renderFile);
app.set("views", __dirname + "/views");
app.set("view engine", "html");
app.use('/public',express.static(__dirname + '/public'));


app.use(express.json());
app.use(express.urlencoded());
app.use(json2xls.middleware);

require("./router/mainRouter.js")(app);

app.listen(80,function(req,res){
    console.log("서버가 실행되고 있다!")
})

