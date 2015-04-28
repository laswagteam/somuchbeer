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

  socket.on('whereAreYou', function(){
    socket.broadcast.emit('whereAreYou');
  });
});

http.listen(parseInt(process.env.OPENSHIFT_NODEJS_PORT, 10), process.env.OPENSHIFT_NODEJS_IP, function(){
  console.log('listening on ' + process.env.OPENSHIFT_NODEJS_IP + ':' + process.env.OPENSHIFT_NODEJS_PORT);
});
