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
  //var canvas = document.getElementById('canvas1');
  //var ctx = canvas.getContext('2d');
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
      if (kittens[kittenNumber1].votes > kittens[kittenNumber2].votes) {
        var el = $('#one-wins');
        el.attr('class', 'showthis blink');
        var el = $('#vote-count');
        el.html(kittens[kittenNumber1].name + ' has ' + kittens[kittenNumber1].votes + ' votes, but ' + kittens[kittenNumber2].name + ' only has ' + kittens[kittenNumber2].votes + '.');
      } else if (kittens[kittenNumber1].votes < kittens[kittenNumber2].votes) {
        var el = $('#two-wins');
        el.attr('class', 'showthis blink');
        var el = $('#vote-count');
        el.html(kittens[kittenNumber2].name + ' has ' + kittens[kittenNumber2].votes + ' votes, but ' + kittens[kittenNumber1].name + ' only has ' + kittens[kittenNumber1].votes + '.');
      } else {
        console.log('A tie!');
        var el = $('#vote-count');
        el.html(kittens[kittenNumber1].name + ' has ' + kittens[kittenNumber1].votes + ' votes and so does ' + kittens[kittenNumber2].name + ' - it\'s a tie!');
        var el = $('#tie1');
        el.attr('class', 'showthis blink');
        var el = $('#tie2');
        el.attr('class', 'showthis blink');
      }
    // var el = document.getElementById('choice1');
    // el.setAttribute('class', 'choice-box winner');
    // var elP1 = document.getElementById('button1-wrap');
    // elP1.setAttribute('class', 'hidethis');
    // var elP2 = document.getElementById('button2-wrap');
    // elP2.setAttribute('class', 'hidethis');
    // var elWin = document.getElementById('one-wins');
    // elWin.setAttribute('class', 'showthis blink');
    // var elLose = document.getElementById('two-loses');
    // elLose.setAttribute('class', 'showthis blink');
    // var elPlayAgain = document.getElementById('play-again-wrap');
    // elPlayAgain.setAttribute('class', 'showthis');
    // console.log('You voted for ' + kittens[kittenNumber1].name + '!');
    var el = $('#button1-wrap');
    el.attr('class', 'hidethis');
    var el = $('#button2-wrap');
    el.attr('class', 'hidethis');
    var el = $('#play-again');
    el.prop('disabled', false);
    var el = $('#vote-count');
    makeChart();
  };

  var voteForTwo = function(event) {
    event.preventDefault();
    kittens.votes2 += 1;
    // var el = document.getElementById('choice2');
    // el.setAttribute('class', 'choice-box winner');
    // var elP1 = document.getElementById('button1-wrap');
    // elP1.setAttribute('class', 'hidethis');
    // var elP2 = document.getElementById('button2-wrap');
    // elP2.setAttribute('class', 'hidethis');
    // var elWin = document.getElementById('two-wins');
    // elWin.setAttribute('class', 'showthis blink');
    // var elLose = document.getElementById('one-loses');
    // elLose.setAttribute('class', 'showthis blink');
    // var elPlayAgain = document.getElementById('play-again-wrap');
    // elPlayAgain.setAttribute('class', 'showthis');
    // console.log('You voted for ' + kittens[kittenNumber2].name + '!');
  };
  var voteAgain = function(event) {
    event.preventDefault();
    blankChart();
    var el = $('#button1-wrap');
    el.attr('class', 'showthis');
    var el = $('#button2-wrap');
    el.attr('class', 'showthis');
    var el = $('#one-wins');
    el.attr('class', 'hidethis blink');
    var el = $('#two-wins');
    el.attr('class', 'hidethis blink');
    var el = $('#tie1');
    el.attr('class', 'hidethis blink');
    var el = $('#tie2');
    el.attr('class', 'hidethis blink');
    var el = $('#vote-count');
    el.html('');
    // var el = $('#play-again-wrap');
    // el.attr('class', 'hidethis');
    var el = $('#play-again');
    el.prop('disabled', true);
    pickKittens();
  };
   // var votes = function() {
   //  console.log('im counting votes');
   //  counter++
   //  console.log(counter);
  };
  voteForkitty();
  $('#choose1').click(voteForOne);
  $('#choose2').click(voteForTwo);
  $('#play-again').click(voteAgain);

  // votedOne.addEventListener('click', voteForOne);
  // votedTwo.addEventListener('click', voteForTwo);
});
})();
