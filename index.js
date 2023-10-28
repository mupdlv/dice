var dice1 = document.querySelector("img.img1");
var dice2 = document.querySelector("img.img2");
var h1 = document.querySelector("h1");
var rollAgain = document.querySelector("h2.roll-again");

function rollDice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    dice1.setAttribute("src", "./images/dice" + randomNumber1 + ".png");
    dice2.setAttribute("src", "./images/dice" + randomNumber2 + ".png");

    if (randomNumber1 > randomNumber2) {
        h1.innerHTML = "🚩 Player 1 Wins!";
    } else if (randomNumber1 < randomNumber2) {
        h1.innerHTML = "Player 2 Wins! 🚩";
    } else {
        h1.innerHTML = "Draw!";
    }    
}

rollDice();

rollAgain.addEventListener("click", rollDice);