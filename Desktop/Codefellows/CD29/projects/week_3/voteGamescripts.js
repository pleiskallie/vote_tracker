'use strict';
var kittyCounter = (function(){
//document.addEventListener("DOMContentLoaded", function(event) {
  var kittens = [];
  var counter = 0;
  var kittenNumber1;
  var kittenNumber2;
  var votedOne = $('#choose1');
  var votedTwo = $('#choose2');
  var playAgain = $('#play-again');
  var Photo = function(name, source, votes) {
    this.name = name;
    this.votes1 = 0;
    this.votes2 = 0;
  };
  kittens.push(new Photo('kitty1'));
  kittens.push(new Photo('kitty2'));
  kittens.push(new Photo('kitty3'));
  kittens.push(new Photo('kitty4'));
  kittens.push(new Photo('kitty5'));
  kittens.push(new Photo('kitty6'));
  kittens.push(new Photo('kitty7'));
  kittens.push(new Photo('kitty8'));
  kittens.push(new Photo('kitty9'));
  kittens.push(new Photo('kitty10'));
  kittens.push(new Photo('kitty11'));
  kittens.push(new Photo('kitty12'));
  kittens.push(new Photo('kitty13'));
  kittens.push(new Photo('kitty14'));
  var voteForkitty = function() {
    kittenNumber1 = Math.floor(Math.random() * (7 - 1)) + 1;
    kittenNumber2 = Math.floor(Math.random() * (14 - 8)) + 8;
  }
  var el = $('#photo1');
  el.attr('src',kittens[kittenNumber1].source);
  var el = $('#photo2');
  el.attr('src',kittens[kittenNumber2].source);
};

  var makeChart = function()  {
    var data = [
    {
      { value: kittens[kittenNumber1].votes,
          color: "#7fffd4",
          label: kittens[kittenNumber1].name  },
        { value: kittens[kittenNumber2].votes,
          color: "#ff7fea",
          label: kittens[kittenNumber2].name  }
    ];
  var canvas = document.getElementById('canvas1');
  var ctx = canvas.getContext('2d');
};
    //     value: 300,
    //     color:"#F7464A",
    //     highlight: "#FF5A5E",
    //     label: "Red"
    // },
    // {
    //     value: 50,
    //     color: "#46BFBD",
    //     highlight: "#5AD3D1",
    //     label: "Green"
    // },
    // {
    //     value: 100,
    //     color: "#FDB45C",
    //     highlight: "#FFC870",
    //     label: "Yellow"

 var myNewChart = new Chart(ctx).Pie(data);
 myNewChart.update();
  var votedOne = document.getElementById('choose1');
  var votedTwo = document.getElementById('choose2');//the listener will go on this
  var voteForOne = function(event) {
    event.preventDefault();
    kittens.votes1 += 1;

    var el = $('#choice1');
    el.attr('class', 'choice-box winner');
    var elP1 = $('#button1-wrap');
    elP1.attr('class', 'hidethis');
    var elP2 = $('#button2-wrap');
    elP2.attr('class', 'hidethis');
    var elWin = $('#one-wins');
    elWin.attr('class', 'showthis blink');
    var elLose = $('#two-loses');
    elLose.attr('class', 'showthis blink');
    var elPlayAgain = $('#play-again-wrap');
    elPlayAgain.attr('class', 'showthis');
    console.log('You voted for ' + kittens[kittenNumber1].name + '!');
  };

  var voteForTwo = function(event) {
    event.preventDefault();
    kittens.votes2 += 1;

    var el = $('#choice2');
    el.attr('class', 'choice-box winner');
    var elP1 = $('#button1-wrap');
    elP1.attr('class', 'hidethis');
    var elP2 = $('#button2-wrap');
    elP2.attr('class', 'hidethis');
    var elWin = $('#two-wins');
    elWin.attr('class', 'showthis blink');
    var elLose = $('#one-loses');
    elLose.attr('class', 'showthis blink');
    var elPlayAgain = $('#play-again-wrap');
    elPlayAgain.attr('class', 'showthis');
    console.log('You voted for ' + kittens[kittenNumber2].name + '!');
  };

  var voteAgain = function(event) {
    event.preventDefault();

  };

  voteForkitty();
  $('#choose1').click(voteForOne);
  $('#choose2').click(voteForTwo);

  // votedOne.addEventListener('click', voteForOne);
  // votedTwo.addEventListener('click', voteForTwo);
};
