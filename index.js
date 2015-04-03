var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile(__dirname+'/index.html');
});

io.on('connection', function(socket){
  socket.broadcast.emit('newBeer', socket.conn.id);
  socket.on('disconnect', function(){
    socket.broadcast.emit('emptyBeer', socket.conn.id);
  });

  socket.on('moveBeer', function(pos){
    pos.id = socket.conn.id;
    socket.broadcast.emit('moveBeer', pos);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});