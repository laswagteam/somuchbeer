var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var url = require('url');

app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile(__dirname+'/index.html');
});

io.on('connection', function(socket){
  var room = url.parse(socket.handshake.url, true).query.room;
  if(typeof(room) === 'undefined' || room.match(/^(\w+)$/) === null) {
    room = 'trash';
  }
  socket.join(room);

  socket.broadcast.to(room).emit('newBeer', socket.conn.id);
  socket.on('disconnect', function(){
    socket.broadcast.to(room).emit('emptyBeer', socket.conn.id);
  });

  socket.on('moveBeer', function(pos){
    pos.id = socket.conn.id;
    socket.broadcast.to(room).emit('moveBeer', pos);
  });

  socket.on('whereAreYou', function(){
    socket.broadcast.to(room).emit('whereAreYou');
  });
});

http.listen(parseInt(process.env.OPENSHIFT_NODEJS_PORT, 10), process.env.OPENSHIFT_NODEJS_IP, function(){
  console.log('listening on ' + process.env.OPENSHIFT_NODEJS_IP + ':' + process.env.OPENSHIFT_NODEJS_PORT);
});
