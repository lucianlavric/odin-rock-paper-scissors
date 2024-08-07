console.log("hello");

function getComputerChoice(){
    let computerNum = Math.random();
    console.log(computerNum);
    if (computerNum <= 0.3){
        return "rock";
    }else if (computerNum >= 0.6){
        return "scissors";
    }else{
        return "paper";
    }

}


function getHumanChoice(){
    let humanNum = prompt("hello, choose either rock, paper or scissors");
    return humanNum;
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You win, rock beats scissors");
        humanScore ++;
    }

    else if (humanChoice == "paper" && computerChoice == "rock"){
        console.log("You win, paper beats rock");
        humanScore ++;
    }

    else if (humanChoice == "scissors" && computerChoice == "paper"){
        console.log("You win, scissors beat paper");
        humanScore ++;
    }

    else{
        console.log("You lose!");
        computerScore ++;
    }

}

let computerScore = 0;
let humanScore = 0;

const computerSelection = getComputerChoice();
const humanSelection =getHumanChoice();
playRound(humanSelection, computerSelection);
