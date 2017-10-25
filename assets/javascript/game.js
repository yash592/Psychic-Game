// define win, loss and guesses

// 	Define an array of alphabets

// 	Then ask computer to pick a randon alphabet

// 	Listen to what user types thru onkey

// 	compare userguess to computerguess

// 	if same then wins++ or else losses++

var wins = 0;
var losses = 0;
var guesses = 9;
var alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];

document.onkeyup = function(event) {

var userguess = event.key;
console.log(userguess);

var computerguess = alphabets[Math.floor(Math.random()*alphabets.length)];
console.log(computerguess);

if (userguess === computerguess){
   wins++;
   alert("You won brah!");
}


else {
	guesses--;
	losses++;
} 

if (guesses <= 0){
	wins = 0;
	losses = 0;
	guesses = 9;
	alert("Game Over!");
}
	

var winscore = 	document.getElementById("win");
winscore.textContent = "Wins: " + wins;

var losescore = document.getElementById("loss");
losescore.textContent = "Losses: " + losses;

var guesssofar = document.getElementById("guessfar");
guesssofar.textContent = "Guesses so far: " + userguess;

var guessleft = document.getElementById("guessleft");
guessleft.textContent = "Guesses left: " + guesses;

}