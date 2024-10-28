let computerScore = 0;
let humanScore = 0;

const Rock = "Rock";
const Paper = "Paper";
const Scissor = "Scissor";

const Win = "Win";
const Lose = "Lose";
const Draw = "Draw";

for (let index = 0; index < 5; index++) {
    let humanInput = prompt("Enter Rock, Paper or Scissor");
    let computerInput;

    let randomNumber = Math.random();
    if (randomNumber > 0 && randomNumber <= .35) {
        computerInput = Rock;
    } else if (randomNumber > .35 && randomNumber <= .7) {
        computerInput = Paper;
    } else {
        computerInput = Scissor;
    }

    let result = GetRoundResult(humanInput, computerInput);

    if (result === Win) {
        humanScore++;
    } else if (result === Lose) {
        computerScore++;
    }

    console.log("Player score = " + humanScore + " Computer scroe = " + computerScore)
}


function GetRoundResult(humanInput, computerInput) {
    if (humanInput === Rock) {
        if (computerInput === Rock) {
            return Draw
        }

        if (computerInput === Paper) {
            return Lose
        }

        if (computerInput === Scissor) {
            return Win
        }
    } else if (humanInput === Paper) {
        if (computerInput === Rock) {
            return Win
        }

        if (computerInput === Paper) {
            return Draw
        }

        if (computerInput === Scissor) {
            return Lose
        }
    } else if (humanInput === Scissor) {
        if (computerInput === Rock) {
            return Lose
        }

        if (computerInput === Paper) {
            return Win
        }

        if (computerInput === Scissor) {
            return Draw
        }
    }
}