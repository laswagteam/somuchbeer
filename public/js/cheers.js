function loadImages(callback) {
    var images = {};
    var sources = {
        glass1: 'glass1.png',
        Afghanistan: 'flags/Afghanistan.png',
Albania: 'flags/Albania.png',
Algeria: 'flags/Algeria.png',
American_Samoa: 'flags/American_Samoa.png',
Andorra: 'flags/Andorra.png',
Angola: 'flags/Angola.png',
Anguilla: 'flags/Anguilla.png',
Antigua_and_Barbuda: 'flags/Antigua_and_Barbuda.png',
Argentina: 'flags/Argentina.png',
Armenia: 'flags/Armenia.png',
Aruba: 'flags/Aruba.png',
Australia: 'flags/Australia.png',
Austria: 'flags/Austria.png',
Azerbaijan: 'flags/Azerbaijan.png',
Bahamas: 'flags/Bahamas.png',
Bahrain: 'flags/Bahrain.png',
Bangladesh: 'flags/Bangladesh.png',
Barbados: 'flags/Barbados.png',
Belarus: 'flags/Belarus.png',
Belgium: 'flags/Belgium.png',
Belize: 'flags/Belize.png',
Benin: 'flags/Benin.png',
Bermuda: 'flags/Bermuda.png',
Bhutan: 'flags/Bhutan.png',
Bolivia: 'flags/Bolivia.png',
Bosnia: 'flags/Bosnia.png',
Botswana: 'flags/Botswana.png',
Brazil: 'flags/Brazil.png',
British_Virgin_Islands: 'flags/British_Virgin_Islands.png',
Brunei: 'flags/Brunei.png',
Bulgaria: 'flags/Bulgaria.png',
Burkina_Faso: 'flags/Burkina_Faso.png',
Burundi: 'flags/Burundi.png',
Cambodia: 'flags/Cambodia.png',
Cameroon: 'flags/Cameroon.png',
Canada: 'flags/Canada.png',
Cape_Verde: 'flags/Cape_Verde.png',
Cayman_Islands: 'flags/Cayman_Islands.png',
Central_African_Republic: 'flags/Central_African_Republic.png',
Chad: 'flags/Chad.png',
Chile: 'flags/Chile.png',
China: 'flags/China.png',
Christmas_Island: 'flags/Christmas_Island.png',
Colombia: 'flags/Colombia.png',
Comoros: 'flags/Comoros.png',
Cook_Islands: 'flags/Cook_Islands.png',
Costa_Rica: 'flags/Costa_Rica.png',
Cote_d_Ivoire: 'flags/Cote_d\'Ivoire.png',
Croatia: 'flags/Croatia.png',
Cuba: 'flags/Cuba.png',
Cyprus: 'flags/Cyprus.png',
Czech_Republic: 'flags/Czech_Republic.png',
Democratic_Republic_of_the_Congo: 'flags/Democratic_Republic_of_the_Congo.png',
Denmark: 'flags/Denmark.png',
Djibouti: 'flags/Djibouti.png',
Dominican_Republic: 'flags/Dominican_Republic.png',
Dominica: 'flags/Dominica.png',
Ecuador: 'flags/Ecuador.png',
Egypt: 'flags/Egypt.png',
El_Salvador: 'flags/El_Salvador.png',
Equatorial_Guinea: 'flags/Equatorial_Guinea.png',
Eritrea: 'flags/Eritrea.png',
Estonia: 'flags/Estonia.png',
Ethiopia: 'flags/Ethiopia.png',
Falkland_Islands: 'flags/Falkland_Islands.png',
Faroe_Islands: 'flags/Faroe_Islands.png',
Fiji: 'flags/Fiji.png',
Finland: 'flags/Finland.png',
France: 'flags/France.png',
French_Polynesia: 'flags/French_Polynesia.png',
Gabon: 'flags/Gabon.png',
Gambia: 'flags/Gambia.png',
Georgia: 'flags/Georgia.png',
Germany: 'flags/Germany.png',
Ghana: 'flags/Ghana.png',
Gibraltar: 'flags/Gibraltar.png',
Greece: 'flags/Greece.png',
Greenland: 'flags/Greenland.png',
Grenada: 'flags/Grenada.png',
Guam: 'flags/Guam.png',
Guatemala: 'flags/Guatemala.png',
Guinea_Bissau: 'flags/Guinea_Bissau.png',
Guinea: 'flags/Guinea.png',
Guyana: 'flags/Guyana.png',
Haiti: 'flags/Haiti.png',
Honduras: 'flags/Honduras.png',
Hong_Kong: 'flags/Hong_Kong.png',
Hungary: 'flags/Hungary.png',
Iceland: 'flags/Iceland.png',
India: 'flags/India.png',
Indonesia: 'flags/Indonesia.png',
Iran: 'flags/Iran.png',
Iraq: 'flags/Iraq.png',
Ireland: 'flags/Ireland.png',
Israel: 'flags/Israel.png',
Italy: 'flags/Italy.png',
Jamaica: 'flags/Jamaica.png',
Japan: 'flags/Japan.png',
Jordan: 'flags/Jordan.png',
Kazakhstan: 'flags/Kazakhstan.png',
Kenya: 'flags/Kenya.png',
Kiribati: 'flags/Kiribati.png',
Kuwait: 'flags/Kuwait.png',
Kyrgyzstan: 'flags/Kyrgyzstan.png',
Laos: 'flags/Laos.png',
Latvia: 'flags/Latvia.png',
Lebanon: 'flags/Lebanon.png',
Lesotho: 'flags/Lesotho.png',
Liberia: 'flags/Liberia.png',
Libya: 'flags/Libya.png',
Liechtenstein: 'flags/Liechtenstein.png',
Lithuania: 'flags/Lithuania.png',
Luxembourg: 'flags/Luxembourg.png',
Macao: 'flags/Macao.png',
Macedonia: 'flags/Macedonia.png',
Madagascar: 'flags/Madagascar.png',
Malawi: 'flags/Malawi.png',
Malaysia: 'flags/Malaysia.png',
Maldives: 'flags/Maldives.png',
Mali: 'flags/Mali.png',
Malta: 'flags/Malta.png',
Marshall_Islands: 'flags/Marshall_Islands.png',
Martinique: 'flags/Martinique.png',
Mauritania: 'flags/Mauritania.png',
Mauritius: 'flags/Mauritius.png',
Mexico: 'flags/Mexico.png',
Micronesia: 'flags/Micronesia.png',
Moldova: 'flags/Moldova.png',
Monaco: 'flags/Monaco.png',
Mongolia: 'flags/Mongolia.png',
Montserrat: 'flags/Montserrat.png',
Morocco: 'flags/Morocco.png',
Mozambique: 'flags/Mozambique.png',
Myanmar: 'flags/Myanmar.png',
Namibia: 'flags/Namibia.png',
Nauru: 'flags/Nauru.png',
Nepal: 'flags/Nepal.png',
Netherlands_Antilles: 'flags/Netherlands_Antilles.png',
Netherlands: 'flags/Netherlands.png',
New_Zealand: 'flags/New_Zealand.png',
Nicaragua: 'flags/Nicaragua.png',
Nigeria: 'flags/Nigeria.png',
Niger: 'flags/Niger.png',
Niue: 'flags/Niue.png',
None: 'flags/None.png',
Norfolk_Island: 'flags/Norfolk_Island.png',
North_Korea: 'flags/North_Korea.png',
Norway: 'flags/Norway.png',
Oman: 'flags/Oman.png',
Pakistan: 'flags/Pakistan.png',
Palau: 'flags/Palau.png',
Panama: 'flags/Panama.png',
Papua_New_Guinea: 'flags/Papua_New_Guinea.png',
Paraguay: 'flags/Paraguay.png',
Peru: 'flags/Peru.png',
Philippines: 'flags/Philippines.png',
Pitcairn_Islands: 'flags/Pitcairn_Islands.png',
Poland: 'flags/Poland.png',
Portugal: 'flags/Portugal.png',
Puerto_Rico: 'flags/Puerto_Rico.png',
Qatar: 'flags/Qatar.png',
Republic_of_the_Congo: 'flags/Republic_of_the_Congo.png',
Romania: 'flags/Romania.png',
Russian_Federation: 'flags/Russian_Federation.png',
Rwanda: 'flags/Rwanda.png',
Saint_Kitts_and_Nevis: 'flags/Saint_Kitts_and_Nevis.png',
Saint_Lucia: 'flags/Saint_Lucia.png',
Saint_Pierre: 'flags/Saint_Pierre.png',
Saint_Vicent_and_the_Grenadines: 'flags/Saint_Vicent_and_the_Grenadines.png',
Samoa: 'flags/Samoa.png',
San_Marino: 'flags/San_Marino.png',
Sao_Tome_and_Principe: 'flags/Sao_Tome_and_Principe.png',
Saudi_Arabia: 'flags/Saudi_Arabia.png',
Senegal: 'flags/Senegal.png',
Serbia_and_Montenegro: 'flags/Serbia_and_Montenegro.png',
Seychelles: 'flags/Seychelles.png',
Sierra_Leone: 'flags/Sierra_Leone.png',
Singapore: 'flags/Singapore.png',
Slovakia: 'flags/Slovakia.png',
Slovenia: 'flags/Slovenia.png',
Soloman_Islands: 'flags/Soloman_Islands.png',
Somalia: 'flags/Somalia.png',
South_Africa: 'flags/South_Africa.png',
South_Georgia: 'flags/South_Georgia.png',
South_Korea: 'flags/South_Korea.png',
Soviet_Union: 'flags/Soviet_Union.png',
Spain: 'flags/Spain.png',
Sri_Lanka: 'flags/Sri_Lanka.png',
Sudan: 'flags/Sudan.png',
Suriname: 'flags/Suriname.png',
Swaziland: 'flags/Swaziland.png',
Sweden: 'flags/Sweden.png',
Switzerland: 'flags/Switzerland.png',
Syria: 'flags/Syria.png',
Taiwan: 'flags/Taiwan.png',
Tajikistan: 'flags/Tajikistan.png',
Tanzania: 'flags/Tanzania.png',
Thailand: 'flags/Thailand.png',
Tibet: 'flags/Tibet.png',
Timor_Leste: 'flags/Timor-Leste.png',
Togo: 'flags/Togo.png',
Tonga: 'flags/Tonga.png',
Trinidad_and_Tobago: 'flags/Trinidad_and_Tobago.png',
Tunisia: 'flags/Tunisia.png',
Turkey: 'flags/Turkey.png',
Turkmenistan: 'flags/Turkmenistan.png',
Turks_and_Caicos_Islands: 'flags/Turks_and_Caicos_Islands.png',
Tuvalu: 'flags/Tuvalu.png',
UAE: 'flags/UAE.png',
Uganda: 'flags/Uganda.png',
Ukraine: 'flags/Ukraine.png',
United_Kingdom: 'flags/United_Kingdom.png',
United_States_of_America: 'flags/United_States_of_America.png',
Uruguay: 'flags/Uruguay.png',
US_Virgin_Islands: 'flags/US_Virgin_Islands.png',
Uzbekistan: 'flags/Uzbekistan.png',
Vanuatu: 'flags/Vanuatu.png',
Vatican_City: 'flags/Vatican_City.png',
Venezuela: 'flags/Venezuela.png',
Vietnam: 'flags/Vietnam.png',
Wallis_and_Futuna: 'flags/Wallis_and_Futuna.png',
Yemen: 'flags/Yemen.png',
Zambia: 'flags/Zambia.png',
Zimbabwe: 'flags/Zimbabwe.png',

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
function getgeoip(infos){
loadImages(function(images){
  var city = infos.city;
  var flag = infos.country_name.replace(' ','_');

  var beers = {};
  var socket = io();
  var pub = document.getElementById('pub');
  pub.width = pub.clientWidth;
  pub.height = pub.clientHeight;

  beers['mine']={x:0, y:0, image: images.glass1, flag: images[flag], city:city};
  socket.on('newBeer', function(id){
    beers[id]={x:0, y:0, image: images.glass1, flag: images['None'], city:''};
  });

  socket.on('emptyBeer', function(id){
    delete beers[id];
    drawBeers(pub, beers);
  });

  socket.on('moveBeer', function(pos){
    beers[pos.id]={x: pos.x, y: pos.y, image: images.glass1, flag: images[pos.flag], city:pos.city};
    drawBeers(pub, beers);
  });

  window.onresize = function(event) {
    pub.width = pub.clientWidth;
    pub.height = pub.clientHeight;
  };

  var sound = new Audio('/snd/clink1.mp3');
  var clink = true;
  var temp = true;
  pub.addEventListener("mousemove", function(e){ moveBeer(e, temp, clink, sound, socket, beers, pub, city, flag) });
  pub.addEventListener("touchmove", function(e){
    var t = {x: e.touches[e.touches.length-1].clientX, y: e.touches[e.touches.length-1].clientY}
    moveBeer(t, temp, clink, sound, socket, beers, pub, city, flag);
  });
});

function moveBeer(e, temp, clink, sound, socket, beers, pub, city, flag){
    if(temp){
      temp = false;
      socket.emit('moveBeer', {x:e.x, y:e.y, city:city, flag:flag});
      setTimeout(function(){ temp = true }, 100);
    }
      for(var id in beers) {
        if(id !== 'mine'){
          var beer = beers[id];
          if(clink && e.x > beer.x && e.x < beer.x+beer.image.width && e.y > beer.y && e.y < beer.y+beer.image.height){
            clink = false;
            sound.play();
            setTimeout(function(){ clink = true }, 1000);
          }
        }
      }
      beers['mine'].x=e.x;
      beers['mine'].y=e.y;
      drawBeers(pub, beers);
}

function drawBeers(pub, beers){
  var ctx = pub.getContext('2d');
  ctx.clearRect(0, 0, pub.clientWidth, pub.clientHeight);
  ctx.font = "15px sans serif";
  ctx.textAlign = "center";
  for(var id in beers) {
    var beer = beers[id];
    ctx.drawImage(beer.image, beer.x-(beer.image.width/2), beer.y-(beer.image.height/2));
    ctx.drawImage(beer.flag, beer.x-beer.flag.width, beer.y+beer.flag.width);
    ctx.fillText(beer.city, beer.x-10, beer.y+(beer.flag.width*2.5));
    ctx.restore();
  }
}
}