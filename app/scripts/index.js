var $ = require('jquery');
var _ = require('underscore');

var counter = 0;

function Player(name, health){
  this.name = name;
  this.health = health || 100;
};

function Enemy(name, health){
  this.name = name;
  this.health = health || 100;

};

Enemy.prototype.attack = function(victim){
  var damage = _.random(20);
  victim.health = victim.health - damage;
};

var batman = new Player('Batman');
var superman = new Player('Superman');

var joker = new Enemy('Joker');
var lexLuthor = new Enemy('Lex Luthor');
var zod = new Enemy('Zod');
var bane = new Enemy('Bane');


  $('.player-select').click(function(){
    if ($(this).siblings('.start').hasClass('hide')){
      $(this).siblings('.start').removeClass('hide');
    }
  });

  $('.start').click(function(){
    if ($(this).siblings('.player-atk-btn').hasClass('hide')){
      $(this).siblings('.player-atk-btn').removeClass('hide');
      $(this).siblings('.player-select').addClass('hide');
      $(this).addClass('hide');
    }
  });


  $(".player-select").on('click', function(){
    counter++;
    var select = counter % 2;
    if (select == 0){

      $('.hero-display').html("<h1>" + batman.name + "</h1>");
   } else {
     $('.hero-display').html("<h1>" + superman.name + "</h1>");
   }

 })

$('.hero-display').append("<h1>Select a Player</h1>")


var villains = [joker.name, lexLuthor.name, zod.name, bane.name];
var shuffledVillains = _.shuffle(villains);
var fightVillain = _.last(shuffledVillains);
$('.villain-display').append("<h1>" + fightVillain + "</h1>");


$('.player-atk-btn').on('click', function(){

  var damage = _.random(20);

  joker.health = joker.health - damage;
  $('.ninja-bar').width(joker.health + "%");

  console.log("Villain health: ", joker.health);

  if (joker.health <= 0){
    alert("You Won!");
    location.reload();
  }



  if (joker.health <= 50){
    $('.villain-bar').css("background-color", "rgba(250, 100, 0, 1)");
  }
  if (joker.health <= 30){
    $('.villain-bar').css("background-color", "rgba(250, 0, 0, 1)");
  }

  setTimeout(function(){
    joker.attack(batman);
    $('.hero-bar').width(batman.health + "%");
    if (batman.health <= 0){
      alert("Defeat!");
      location.reload();
    }

    if (batman.health <= 50){
      $('.hero-bar').css("background-color", "rgba(251, 235, 0, 1)");
    }
    if (batman.health <= 30){
      $('.hero-bar').css("background-color", "rgba(251, 24, 0, 1)");
    }
    console.log("Hero health: ", batman.health);
  }, 1200);

});
