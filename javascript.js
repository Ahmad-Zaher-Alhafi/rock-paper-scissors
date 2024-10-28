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

    if (humanInput !== Rock && humanInput !== Paper && humanInput !== Scissor) {
        console.log("Wrong input, please stick to the Rock, Paper or Scissor only")
        continue;
    }

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
    if (humanInput === computerInput) {
        return Draw
    }

    if (humanInput === Rock) {
        return computerInput === Scissor ? Win : Lose
    } else if (humanInput === Paper) {
        computerInput === Rock ? Win : Lose;
    } else if (humanInput === Scissor) {
        computerInput === Paper ? Win : Lose;
    }
}