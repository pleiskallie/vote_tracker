
'use strict';
(function(){
document.addEventListener("DOMContentLoaded", function(event) {
  var kittens = [];
  var Photo = function(name, source, votes) {
    this.source = source;
    this.name = name;
    this.votes1 = 0;
    this.votes2 = 0;
  };

  //image.11
  kittens.push(new Photo('kitty1','./imagesKitty/0.jpg'));
  kittens.push(new Photo('kitty2','./imagesKitty/1.jpg'));
  kittens.push(new Photo('kitty3','./imagesKitty/2.jpg'));
  kittens.push(new Photo('kitty4','./imagesKitty/3.jpg'));
  kittens.push(new Photo('kitty5','./imagesKitty/4.jpg'));
  kittens.push(new Photo('kitty6','./imagesKitty/5.jpg'));
  kittens.push(new Photo('kitty7','./imagesKitty/6.jpg'));
  kittens.push(new Photo('kitty8','./imagesKitty/7.jpg'));
  kittens.push(new Photo('kitty9','./imagesKitty/8.jpg'));
  kittens.push(new Photo('kitty10','./imagesKitty/9.jpg'));
  kittens.push(new Photo('kitty11','./imagesKitty/10.jpg'));
  kittens.push(new Photo('kitty12','./imagesKitty/11.jpg'));
  kittens.push(new Photo('kitty13','./imagesKitty/12.jpg'));
  kittens.push(new Photo('kitty14','./imagesKitty/13.jpg'));


  var kittenNumber1 = Math.floor(Math.random() * (7 - 1)) + 1;
  var kittenNumber2 = Math.floor(Math.random() * (14 - 8)) + 8;

  var elPhoto1 = document.getElementById('photo1');
  elPhoto1.setAttribute('src',kittens[kittenNumber1].source);


  var elPhoto2 = document.getElementById('photo2');
  elPhoto2.setAttribute('src',kittens[kittenNumber2].source);

  var canvas = document.getElementById('canvas1');

  var ctx = canvas.getContext('2d');


  var data = [
    {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }
]
 var myNewChart = new Chart(ctx).Pie(data);
 myNewChart.update();
  var votedOne = document.getElementById('choose1');
  var votedTwo = document.getElementById('choose2');//the listener will go on this
  var voteForOne = function(event) {
    event.preventDefault();
    kittens.votes1 += 1;


    var el = document.getElementById('choice1');
    el.setAttribute('class', 'choice-box winner');
    var elP1 = document.getElementById('button1-wrap');
    elP1.setAttribute('class', 'hidethis');
    var elP2 = document.getElementById('button2-wrap');
    elP2.setAttribute('class', 'hidethis');
    var elWin = document.getElementById('one-wins');
    elWin.setAttribute('class', 'showthis blink');
    var elLose = document.getElementById('two-loses');
    elLose.setAttribute('class', 'showthis blink');
    var elPlayAgain = document.getElementById('play-again-wrap');
    elPlayAgain.setAttribute('class', 'showthis');
    console.log('You voted for ' + kittens[kittenNumber1].name + '!');
  };
  var voteForTwo = function(event) {
    event.preventDefault();
    kittens.votes2 += 1;


    var el = document.getElementById('choice2');
    el.setAttribute('class', 'choice-box winner');
    var elP1 = document.getElementById('button1-wrap');
    elP1.setAttribute('class', 'hidethis');
    var elP2 = document.getElementById('button2-wrap');
    elP2.setAttribute('class', 'hidethis');
    var elWin = document.getElementById('two-wins');
    elWin.setAttribute('class', 'showthis blink');
    var elLose = document.getElementById('one-loses');
    elLose.setAttribute('class', 'showthis blink');
    var elPlayAgain = document.getElementById('play-again-wrap');
    elPlayAgain.setAttribute('class', 'showthis');
    console.log('You voted for ' + kittens[kittenNumber2].name + '!');
  };
  var voteAgain = function(event) {
    event.preventDefault();

  };

  votedOne.addEventListener('click', voteForOne);
  votedTwo.addEventListener('click', voteForTwo);

});
})();
