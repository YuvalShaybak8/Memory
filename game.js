
var images=[{src:"https://img.icons8.com/color/150/000000/visual-game-boy.png"},
            {src:"https://img.icons8.com/color/150/000000/prodigy.png"},
            {src:"https://img.icons8.com/external-filled-agus-raharjo/150/000000/external-game-social-media-filled-agus-raharjo.png"},
            {src:"https://img.icons8.com/external-flat-chattapat-/150/000000/external-bike-logistic-flat-chattapat-.png"},
            {src:"https://img.icons8.com/external-creatype-flat-colourcreatype/150/000000/external-game-sport-creatype-flat-colourcreatype.png"},
            {src:"https://img.icons8.com/color/150/000000/rockstar-games.png"},
            {src:"https://img.icons8.com/external-microdots-premium-microdot-graphic/150/000000/external-game-sport-fitness-vol1-microdots-premium-microdot-graphic-3.png"},
            {src:"https://img.icons8.com/plasticine/150/000000/among-us.png"},
            {src:"https://img.icons8.com/plasticine/150/000000/bloons-td-6.png"},
            {src:"https://img.icons8.com/plasticine/150/000000/hay-day.png"},
            {src:"https://img.icons8.com/fluency/150/000000/apple-arcade.png"},
            {src:"https://img.icons8.com/arcade/150/000000/experimental-portal-arcade.png"},
            {src:"https://img.icons8.com/ios/150/000000/2k-logo.png"},
            {src:"https://img.icons8.com/color/150/000000/clash-royal-red.png"},
            {src:"https://img.icons8.com/ios-filled/150/000000/targaryen-house.png"},
            {src:"https://img.icons8.com/nolan/150/payday-2.png"},
            {src:"https://img.icons8.com/dusk/150/000000/sea-of-thieves.png"},
            {src:"https://img.icons8.com/color/150/000000/ahri.png"},
            {src:"https://img.icons8.com/nolan/150/dead-by-daylight.png"},
            {src:"https://img.icons8.com/nolan/150/basketball.png"},
            {src:"https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/150/000000/external-gamer-game-development-xnimrodx-lineal-color-xnimrodx.png"},
            {src:"https://img.icons8.com/color/150/000000/open-pokeball--v2.png"},
            {src:"https://img.icons8.com/external-flaticons-lineal-color-flat-icons/150/000000/external-gamepad-edutainment-flaticons-lineal-color-flat-icons.png"},
            {src:"https://img.icons8.com/ios-filled/150/000000/fall-guys.png"},
            {src:"https://img.icons8.com/clouds/150/000000/akinator-game.png"},
            {src:"https://img.icons8.com/external-wanicon-flat-wanicon/150/000000/external-game-controller-video-game-wanicon-flat-wanicon.png"},
            {src:"https://img.icons8.com/ios/150/000000/unity.png"},
            {src:"https://img.icons8.com/external-flaticons-flat-flat-icons/150/000000/external-gamer-new-media-flaticons-flat-flat-icons.png"},
            {src:"https://img.icons8.com/ios-filled/150/000000/xbox.png"},
            {src:"https://img.icons8.com/ios-glyphs/150/000000/play-station.png"},
            {src:"https://img.icons8.com/external-flaticons-lineal-color-flat-icons/150/000000/external-video-game-game-development-flaticons-lineal-color-flat-icons-6.png"},
            {src:"https://img.icons8.com/color/150/000000/play-games.png"},
            {src:"https://img.icons8.com/external-rabit-jes-outline-color-rabit-jes/150/000000/external-mobile-game-mobile-rabit-jes-outline-color-rabit-jes.png"},
            {src:"https://img.icons8.com/color/150/000000/stumble-guys.png"},
            {src:"https://img.icons8.com/external-soft-fill-juicy-fish/150/000000/external-game-esports-soft-fill-soft-fill-juicy-fish-2.png"},
            {src:"https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/150/000000/external-arcade-game-game-xnimrodx-lineal-color-xnimrodx-2.png"},
            {src:"https://img.icons8.com/ios/150/000000/desura.png"},
            {src:"https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/150/000000/external-card-game-game-development-xnimrodx-lineal-color-xnimrodx.png"},
            {src:"https://img.icons8.com/ios-filled/150/000000/bad-piggies.png"},
            {src:"https://img.icons8.com/color/150/000000/dungeons-and-dragons.png"},
            {src:"https://img.icons8.com/color/150/000000/fortnite.png"},
            {src:"https://img.icons8.com/color/150/000000/xbox--v1.png"},
            {src:"https://img.icons8.com/plasticine/150/000000/slither-io.png"},
            {src:"https://img.icons8.com/nolan/150/zuma.png"},
            {src:"https://img.icons8.com/color/150/000000/millennium-rod.png"},
            {src:"https://img.icons8.com/external-filled-outlines-amoghdesign/150/000000/external-games-paralympic-games-filled-outlines-amoghdesign.png"},
            {src:"https://img.icons8.com/color/150/000000/ankama.png"},
            {src:"https://img.icons8.com/color/150/000000/jetpack-joyride.png"},
            {src:"https://img.icons8.com/plasticine/150/000000/greek-helmet.png"},
            {src:"https://img.icons8.com/color/150/000000/subnautica.png"}];
                 
var timer =0;
const parametersString = window.location.search;
const paramURL = new URLSearchParams(parametersString);
const userName = paramURL.get('userName');
const amount = paramURL.get('numOfImages');
console.log(userName);
console.log(amount);

// var cardOpener = '<div class="card flip-box flip-box-inner flip-box-front" style="width: 18rem;"><img class="card-img-top"  src="'
// var cardId = ' id="'
// var cardEnder = '></div>'
var cards="";
var gameCards=[];
 
// let seconds = 00;
// let tens = 00;
// let minutes = 00;

for (let i =0;i<amount*2;i+=2){
  gameCards[i]= images[i];
  gameCards[i+1]= images[i];
}

const randomCards = gameCards.sort(()=>(Math.random()>.5)?1:-1);

$("#headline").append(' ',userName)


var sources = document.querySelectorAll(".card-img-top");
const board = $('#addCards')[0];
console.log('board: ',randomCards);

for(let i = 0; i<randomCards.length;i++){

  const card = document.createElement('img');
  card.src="https://img.icons8.com/plasticine/150/000000/help.png"
  card.classList.toggle('play-card');
  card.setAttribute('id',i)
  const cardHolder = document.createElement('div');
 cardHolder.classList='card custom-card';
 cardHolder.style='width:18rem;';
 cardHolder.append(card);
 cardHolder.addEventListener('click',flip);
 board.append(cardHolder)

}
var amountFound = 0;
var imageCounterFlipped = 0;
var allFound = false;
var sec = 0;
var flippedIds=[];
var timer=null; 
function flip(event)
  {
    if(!timer){
      timer = setInterval(function () {
        $("#seconds").html(startCountUp(++sec % 60));
         $("#minutes").html(startCountUp(parseInt(sec / 60, 10)));
    }, 1000);
    }
    if(flippedIds.length<2){
      event.preventDefault();

      const image = event.target;
      if(flippedIds.includes(image.id) || image.classList.contains('matched')) return;
      console.log('flip event: ',flippedIds);

      if(!flippedIds.find(id=>id==image.id)){
        image.classList.toggle('revealed');
        image.classList.toggle('play-card');
        flippedIds.push(image.id);
      }
      setTimeout(()=>{
        image.src = randomCards[image.id].src;
        if(flippedIds.length==2){
          setTimeout(()=>checkMatchCards(),500);
        }
      },300)
      
    }

  }
  function found(){
    var percentage = ($('.matched').length/randomCards.length)*100;
    console.log('progress: ',percentage)
    $('#Bar').attr("style","width: "+percentage+"%");
  }
  
function checkMatchCards(){
  const firstId = flippedIds[0];
  const secondId = flippedIds[1];
  console.log('is match: ',randomCards[firstId].src == randomCards[secondId].src)
  console.log('is match: ',firstId)
  console.log('is match: ', secondId)
  if(randomCards[firstId].src == randomCards[secondId].src){
    flippedIds.forEach(id=>{
      $(`#${id}`)[0].classList.toggle('matched');
    })
    found();
    if($('.matched').length == randomCards.length){
      finishGame();
    }
  }else{
    flippedIds.forEach(id=>{
      $(`#${id}`)[0].classList.toggle('revealed');
      $(`#${id}`)[0].classList.toggle('play-card');
      setTimeout(()=>{
        $(`#${id}`)[0].src="https://img.icons8.com/plasticine/150/000000/help.png";
      },300);
    })
  }

  flippedIds=[];

}


function finishGame(){
  console.log('minutes: ',$("#minutes")[0])
  console.log('minutes: ',$("#seconds")[0])
  $('#addSummary').append(`Well Done ${userName}!<br>It took you ${ $("#minutes")[0].innerHTML} minutes and ${ $("#seconds")[0].innerHTML} seconds to finish the game`)
  $('#restart-button').removeClass("visibility");
  clearInterval(timer);
}

function startCountUp(val) { return val > 9 ? val : "0" + val; }

