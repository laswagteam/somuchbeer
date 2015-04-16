function loadImages(callback) {
    var images = {};
    var sources = {
        glass: 'glass2.png',
        glassGrey: 'glass-grey.png',
        eye: 'eye.png',
        AD: 'flags/AD.png',
AE: 'flags/AE.png',
AG: 'flags/AG.png',
AM: 'flags/AM.png',
AR: 'flags/AR.png',
AT: 'flags/AT.png',
AU: 'flags/AU.png',
BE: 'flags/BE.png',
BF: 'flags/BF.png',
BG: 'flags/BG.png',
BO: 'flags/BO.png',
BR: 'flags/BR.png',
CA: 'flags/CA.png',
CD: 'flags/CD.png',
CG: 'flags/CG.png',
CH: 'flags/CH.png',
CL: 'flags/CL.png',
CM: 'flags/CM.png',
CN: 'flags/CN.png',
CO: 'flags/CO.png',
CZ: 'flags/CZ.png',
DE: 'flags/DE.png',
DJ: 'flags/DJ.png',
DK: 'flags/DK.png',
DZ: 'flags/DZ.png',
EE: 'flags/EE.png',
EG: 'flags/EG.png',
ES: 'flags/ES.png',
FI: 'flags/FI.png',
FR: 'flags/FR.png',
GA: 'flags/GA.png',
GB: 'flags/GB.png',
GM: 'flags/GM.png',
GT: 'flags/GT.png',
HN: 'flags/HN.png',
HT: 'flags/HT.png',
HU: 'flags/HU.png',
ID: 'flags/ID.png',
IE: 'flags/IE.png',
IL: 'flags/IL.png',
IN: 'flags/IN.png',
IQ: 'flags/IQ.png',
IR: 'flags/IR.png',
IT: 'flags/IT.png',
JM: 'flags/JM.png',
JO: 'flags/JO.png',
JP: 'flags/JP.png',
KG: 'flags/KG.png',
KN: 'flags/KN.png',
KP: 'flags/KP.png',
KR: 'flags/KR.png',
KW: 'flags/KW.png',
KZ: 'flags/KZ.png',
LA: 'flags/LA.png',
LB: 'flags/LB.png',
LC: 'flags/LC.png',
LS: 'flags/LS.png',
LU: 'flags/LU.png',
LV: 'flags/LV.png',
MG: 'flags/MG.png',
MK: 'flags/MK.png',
ML: 'flags/ML.png',
MM: 'flags/MM.png',
MT: 'flags/MT.png',
MX: 'flags/MX.png',
NA: 'flags/NA.png',
NE: 'flags/NE.png',
NG: 'flags/NG.png',
NI: 'flags/NI.png',
NL: 'flags/NL.png',
NO: 'flags/NO.png',
OM: 'flags/OM.png',
PA: 'flags/PA.png',
PE: 'flags/PE.png',
PG: 'flags/PG.png',
PK: 'flags/PK.png',
PL: 'flags/PL.png',
PT: 'flags/PT.png',
PY: 'flags/PY.png',
QA: 'flags/QA.png',
RO: 'flags/RO.png',
RU: 'flags/RU.png',
RW: 'flags/RW.png',
SA: 'flags/SA.png',
SE: 'flags/SE.png',
SG: 'flags/SG.png',
SL: 'flags/SL.png',
SN: 'flags/SN.png',
SO: 'flags/SO.png',
SV: 'flags/SV.png',
TD: 'flags/TD.png',
TJ: 'flags/TJ.png',
TL: 'flags/TL.png',
TR: 'flags/TR.png',
TZ: 'flags/TZ.png',
UA: 'flags/UA.png',
US: 'flags/US.png',
VE: 'flags/VE.png',
VN: 'flags/VN.png',
YE: 'flags/YE.png'
    };
    var loadedImages = 0;
    var numImages = 0;
    var src;
    for(src in sources) {
        numImages++;
    }
    for(src in sources) {
      images[src] = new Image();
      images[src].onload = function() {
          if(++loadedImages >= numImages) {
              callback(images);
          }
      };
      images[src].src = '/img/'+sources[src];
    }
}
var initialize = function (infos) {

loadImages(function(images){
  var city = infos.city;
  var flag = infos.country_code;
  if(infos.ip==='92.103.174.138'){
    city = 'yololnov-sup';
  }

  var beers = {};
  var socket = io();
  var pub = document.getElementById('pub');
  pub.width = pub.clientWidth;
  pub.height = pub.clientHeight;

  beers['mine']={x:0, y:0, image: images.glass, imageEmpty: images.glassGrey, flag: images[flag], city:city, msg:'', msg2: '', focus: true};
  socket.emit('whereAreYou');

  socket.on('whereAreYou', function(){
    socket.emit('moveBeer', {
      x:beers['mine'].x,
      y:beers['mine'].y,
      city:beers['mine'].city,
      flag:flag,
      msg2:beers['mine'].msg2,
      msg:beers['mine'].msg,
      focus:beers['mine'].focus}
    );
  });
  socket.on('newBeer', function(id){
    beers[id]={x:0, y:0, image: images.glass,imageEmpty: images.glassGrey, flag: images['CN'], city:'', msg:'', msg2: '', focus: false};
  });

  socket.on('emptyBeer', function(id){
    delete beers[id];
    drawBeers(pub, beers, images['eye']);
  });
  var sound = new Audio('/snd/clink1.mp3');
  var clink = true;

  socket.on('moveBeer', function(pos){
    if(typeof images[pos.flag] === 'undefined'){
      var image = images['CN'];
    }
    else{
      var image = images[pos.flag];
    }
    for(var id in beers) {
        if(id !== 'mine'){
          var beer = beers[id];
          if(clink && beers['mine'].x > beer.x && beers['mine'].x < beer.x+beer.image.width && beers['mine'].y > beer.y && beers['mine'].y < beer.y+beer.image.height){
            clink = false;
            sound.play();
            setTimeout(function(){ clink = true }, 1000);
          }
        }
    }
    beers[pos.id]={x: pos.x, y: pos.y, image: images.glass, imageEmpty: images.glassGrey, flag: image, city:pos.city, msg:pos.msg, msg2:pos.msg2, focus:pos.focus};
    drawBeers(pub, beers, images['eye']);
  });

  window.onresize = function(event) {
    pub.width = pub.clientWidth;
    pub.height = pub.clientHeight;
  };

  var temp = true;
  pub.addEventListener("mousemove", function(e){
    beers['mine'].focus = true;
    beers['mine'].x = e.x;
    beers['mine'].y = e.y;
    moveBeer(temp, clink, sound, socket, beers, pub, images['eye'], flag)
  });
  pub.addEventListener("touchmove", function(e){
    beers['mine'].focus = true;
    beers['mine'].x = e.touches[e.touches.length-1].clientX;
    beers['mine'].y = e.touches[e.touches.length-1].clientY;
    moveBeer(temp, clink, sound, socket, beers, pub, images['eye'], flag);
  });

  var i = document.getElementById('fakeinput');

  i.addEventListener("keyup", function(e){
    beers['mine'].focus = true;
    if(e.keyCode === 13){
      beers['mine'].msg2 = beers['mine'].msg;
      beers['mine'].msg = '';
      i.value='';
      moveBeer(temp, clink, sound, socket, beers, pub, images['eye'], flag);
      setTimeout(function(){
        beers['mine'].msg2='';
        moveBeer(temp, clink, sound, socket, beers, pub, images['eye'], flag);
      }, 2000);
    }
    else{
      beers['mine'].msg=e.target.value;
      moveBeer(temp, clink, sound, socket, beers, pub, images['eye'], flag);
    }
  });

  window.addEventListener("click", function(e){
    i.focus();
  });

  window.addEventListener('focus', function() {
    beers['mine'].focus = true;
    moveBeer(temp, clink, sound, socket, beers, pub, images['eye'], flag);
  });

  window.addEventListener('blur', function() {
    beers['mine'].focus = false;
    moveBeer(temp, clink, sound, socket, beers, pub, images['eye'], flag);
  });

});

function moveBeer(temp, clink, sound, socket, beers, pub, eye, flag){
    if(temp){
      temp = false;
      socket.emit('moveBeer', {x:beers['mine'].x, y:beers['mine'].y, city:beers['mine'].city, flag:flag, msg2:beers['mine'].msg2, msg:beers['mine'].msg, focus:beers['mine'].focus});
      setTimeout(function(){ temp = true }, 100);
    }
      for(var id in beers) {
        if(id !== 'mine'){
          var beer = beers[id];
          if(clink && beers['mine'].x > beer.x && beers['mine'].x < beer.x+beer.image.width && beers['mine'].y > beer.y && beers['mine'].y < beer.y+beer.image.height){
            clink = false;
            sound.play();
            setTimeout(function(){ clink = true }, 1000);
          }
        }
      }
      drawBeers(pub, beers, eye);
}

function drawBeers(pub, beers, eye){
  var ctx = pub.getContext('2d');
  ctx.clearRect(0, 0, pub.clientWidth, pub.clientHeight);
  ctx.font = "bold 18px Arial";
  ctx.textAlign = "center";
  ctx.fillStyle = '#ffffff';
  for(var id in beers) {
    var beer = beers[id];
    var image = beer.focus ? beer.image : beer.imageEmpty;
    ctx.drawImage(image, beer.x-(image.width/2), beer.y-(image.height/2));
    ctx.drawImage(beer.flag, beer.x + 4, beer.y + 58);
    ctx.fillText(beer.city.substr(0,100), beer.x + 15, (beer.y+image.height/2 + 14));
    ctx.fillText(beer.msg2.substr(0,100), beer.x, beer.y-(image.height/2)-30);
    ctx.fillText(beer.msg.substr(0,100), beer.x, beer.y-(image.height/2)-10);
    ctx.restore();
  }
}
}

window.fetch('https://freegeoip.net/json/')
  .then(function(response){ return response.json(); })
  .then(function(json){ initialize(json); })
  .catch(function(){ initialize({ city: 'Somewhere', country_code: 'CN' }); })
