var express =  require('express');
var datetime =  require('datetime');

var app = express.createServer(express.logger());

app.get('/',function(req,resp){
  resp.send("Hello World "+datetime.format(new Date(),"%r"));
});

var port = process.env.PORT || 3000;
app.listen(port,function(){
  console.log("listening on "+port);
});
