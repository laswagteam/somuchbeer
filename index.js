var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var url = require('url');
var sqlite3 = require('sqlite3');

var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;
var twitterKey    = process.env.TWITTER_KEY
var twitterSecret = process.env.TWITTER_SECRET

var db = new sqlite3.Database('rump.db');
// db.run("CREATE TABLE rump (name TEXT, title TEXT, description TEXT, vote INTEGER);");

app.use(express.static('public'));

app.use(passport.initialize());
app.use(passport.session());
app.get('/auth/twitter', passport.authenticate('twitter'));
app.get('/auth/twitter/callback',
  passport.authenticate('twitter', { successRedirect: '/',
                                     failureRedirect: '/auth/twitter' }));

passport.use(new TwitterStrategy({
  consumerKey: twitterKey,
  consumerSecret: twitterSecret,
  callbackURL: '/auth/twitter/callback'
}, function(token, tokenSecret, profile, done) {
  done(null, profile.username);
}
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

app.get('/', function(req, res){
  if(typeof(req.user) !== 'undefined'){
    req.session.authenticated = req.user;
  }
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
    pos.auth = socket.client.request.authenticated;
    socket.broadcast.to(room).emit('moveBeer', pos);
  });

  socket.on('whereAreYou', function(){
    socket.broadcast.to(room).emit('whereAreYou');
  });
});

http.listen(parseInt(process.env.OPENSHIFT_NODEJS_PORT, 10), process.env.OPENSHIFT_NODEJS_IP, function(){
  console.log('listening on ' + process.env.OPENSHIFT_NODEJS_IP + ':' + process.env.OPENSHIFT_NODEJS_PORT);
});
