function loadImages(callback) {
    var images = {};
    var sources = {
        glass1: {src: '/img/glass1.png', type: 'img'},
        clink1: {src: '/snd/clink1.mp3', type: 'snd'}
    };
    var loadedImages = 0;
    var numImages = 0;
    var src;
    for(src in sources) {
        numImages++;
    }
    for(src in sources) {
      if(sources[src].type === 'img'){
        images[src] = new Image();
        images[src].onload = function() {
            if(++loadedImages >= numImages) {
                callback(images);
            }
        };
        images[src].src = sources[src].src;
      }
      else{
        images[src] = new Audio(sources[src].src);
        images[src].oncanplay = function() {
            if(++loadedImages >= numImages) {
                callback(images);
            }
        };
      }
    }
}

loadImages(function(images){
  console.log(images);
  var beers = {};
  var socket = io();
  var pub = document.getElementById('pub');
  pub.width = pub.clientWidth;
  pub.height = pub.clientHeight;

  beers['mine']={x:0, y:0, image: images.glass1};
  socket.on('newBeer', function(id){
    beers[id]={x:0, y:0, image: images.glass1};
  });

  socket.on('emptyBeer', function(id){
    delete beers[id];
    drawBeers(pub, beers);
  });

  socket.on('moveBeer', function(pos){
    beers[pos.id]={x: pos.x, y: pos.y, image: images.glass1};
    drawBeers(pub, beers);
  });

  window.onresize = function(event) {
    pub.width = pub.clientWidth;
    pub.height = pub.clientHeight;
  };

  var clink = true;

  pub.addEventListener("mousemove", function(e){
    socket.emit('moveBeer', {x:e.x, y:e.y});
    for(var id in beers) {
      if(id !== 'mine'){
        var beer = beers[id];
        if(clink && e.x > beer.x && e.x < beer.x+beer.image.width && e.y > beer.y && e.y < beer.y+beer.image.height){
          clink = false;
          images.clink1.play();
          setTimeout(function(){ clink = true }, 1000);
        }
      }
    }
    beers['mine'].x=e.x;
    beers['mine'].y=e.y;
    drawBeers(pub, beers);
  });
});

function drawBeers(pub, beers){
  var ctx = pub.getContext('2d');
  ctx.clearRect(0, 0, pub.clientWidth, pub.clientHeight);
  for(var id in beers) {
    var beer = beers[id];
    ctx.drawImage(beer.image, beer.x-(beer.image.width/2), beer.y-(beer.image.height/2));
  }
}