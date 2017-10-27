// define win, loss and guesses

// 	Define an array of alphabets

// 	Then ask computer to pick a randon alphabet

// 	Listen to what user types thru onkey

// 	compare userguess to computerguess

// 	if same then wins++ or else losses++

var wins = 0;
var losses = 0;
var guesses = 9;
var guess = [];
var alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];


function generaterandomword () {
computerguess = alphabets[Math.floor(Math.random()*alphabets.length)];
}


generaterandomword();


function reset () {
	guesses = 9;
	generaterandomword();

}

document.onkeyup = function(event) {

var userguess = event.key;
console.log(userguess);



if (userguess === computerguess){
   wins++;
   alert("You won brah!");
   reset();
   
}


else {
	guess.push(userguess);
	guesses--;
	
} 

if (guesses <= 0) {    
	alert("Game Over!");
	losses++;
	reset();
	
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

