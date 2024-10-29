let computerScore = 0;
let humanScore = 0;

const rock = "Rock";
const paper = "Paper";
const scissor = "Scissor";

const playerWonRound = "Win";
const playerLostRound = "Lose";
const roundDraw = "Draw";


const buttons = document.querySelectorAll("button");
const computerScoreText = document.querySelector(".computerScore");
const humanScoreText = document.querySelector(".playerScore");

displayScores();

buttons.forEach(button => {
    button.addEventListener("click", onButtonClicked);
});


function onButtonClicked(event) {
    result = getRoundResult(event.target.textContent, getRandomComputerChoise());

    if (result === playerWonRound) {
        humanScore++;
    } else if (result === playerLostRound) {
        computerScore++;
    }

    displayScores();
}

function displayScores() {
    computerScoreText.textContent = computerScore;
    humanScoreText.textContent = humanScore;
}

function getRandomComputerChoise() {
    let randomNumber = Math.random();
    if (randomNumber > 0 && randomNumber <= .35) {
        return rock;
    } else if (randomNumber > .35 && randomNumber <= .7) {
        return paper;
    } else {
        return scissor;
    }
}


function getRoundResult(humanInput, computerInput) {
    if (humanInput === computerInput) {
        return roundDraw
    }

    if (humanInput === rock) {
        return computerInput === scissor ? playerWonRound : playerLostRound
    } else if (humanInput === paper) {
        return computerInput === rock ? playerWonRound : playerLostRound;
    } else if (humanInput === scissor) {
        return computerInput === paper ? playerWonRound : playerLostRound;
    }
}