const randomNum1 = Math.floor(Math.random() * 6) + 1;
const randomNum2 = Math.floor(Math.random() * 6) + 1;
const dice1 = document.querySelector(".img1");
const dice2 = document.querySelector(".img2");

// Need refactoring
dice1.setAttribute("src", `./images/dice${randomNum1}.png`);
dice2.setAttribute("src", `./images/dice${randomNum2}.png`);

const h1 = document.querySelector(".container h1");

if( randomNum1 > randomNum2 ) h1.textContent = "🚩Player 1 Wins!";
else if ( randomNum1 < randomNum2 ) h1.textContent = "Player 2 Wins!🚩"
else h1.textContent = "Draw!";


// function generateRndNumber() 
// {
// 	return Math.floor(Math.random() * 6 + 1);
// }

// function resetDice() {
// 	dice.setAttribute("src", `./images/dice${generateRndNumber()}.png`);
// }

// function init()
// {
// 	resetDice();
// }

//init();