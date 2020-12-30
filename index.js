// For Player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomDiceImage = "images/dice" + randomNumber1 + ".png"; //selects image
document.querySelector("img.img1").setAttribute("src", randomDiceImage);

// For Player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png"; //selects image
document.querySelector("img.img2").setAttribute("src", randomDiceImage2);

// Player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player1 Wins!";
}
// Draw
 else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
}
// Player 2 Wins
else {
  document.querySelector("h1").innerHTML = "Player2 Wins!";
}
