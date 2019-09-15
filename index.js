/* Random image 1 */

//random number 1 - 6
var randomNumber1 = Math.random();
randomNumber1 = Math.floor((randomNumber1 * 6) + 1);

// random dice1.png - dice6.png
var randomDiceImage1 = "dice" + randomNumber1 + ".png";

// random source: images/dice1.png - images/dice6.png
var randomImageSource1 = "images/" + randomDiceImage1;

// select class image1 and set attribute
var img1 = document.querySelector(".img1");
img1.setAttribute("src", randomImageSource1);


/* Random image 2 */

//random number 1 - 6
var randomNumber2 = Math.random();
randomNumber2 = Math.floor((randomNumber2 * 6) + 1);

// random dice1.png - dice6.png
var randomDiceImage2 = "dice" + randomNumber2 + ".png";

// random source: images/dice1.png - images/dice6.png
var randomImageSource2 = "images/" + randomDiceImage2;

// select class image2 and set attribute
var img2 = document.querySelector(".img2");
img2.setAttribute("src", randomImageSource2);


/* Change title h1: Refresh Me if who wins? */
var titleH1 = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  titleH1.textContent = "😍 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  titleH1.textContent = "Player 2 Wins! 🤩";
} else {
  titleH1.textContent = "Draw! 😥";
}
