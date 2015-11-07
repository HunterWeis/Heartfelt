var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var iod = require('iod-node')
client = new iod.IODClient('http://api.idolondemand.com', 'e541ed5b-d513-43a3-bdb2-898d63a50eb6')


app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    iodCall({"text": msg});
    console.log(msg)
    
  });
});

http.listen(3000, function(){
	console.log("Listening on *:3000");
});

iodCall = function(msg){
client.call('analyzesentiment', msg, function(err, resp, body){
  var sentiment = body["aggregate"]["sentiment"]
  var score = body["aggregate"]["score"]
  console.log(msg, sentiment, score)

  var both = {text: msg.text, score: score}

  io.emit('chat message', both);
  //io.emit('score', score);


})
}





