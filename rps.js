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


function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice == "rock" && computerChoice == "scissors"){
        results.textContent = "You win, rock beats scissors";
        humanScore ++;

    }

    else if (humanChoice == "paper" && computerChoice == "rock"){
        results.textContent = "You win, paper beats rock";
        humanScore ++;
    }

    else if (humanChoice == "scissors" && computerChoice == "paper"){
        results.textContent = "You win, scissors beat paper";
        humanScore ++;
    }

    else if (humanChoice == computerChoice){
        results.textContent = "Tie!";
    }

    else{
        results.textContent = "You lose!";
        computerScore ++;
    }
    updateScores();
}

let computerScore = 0;
let humanScore = 0;


const playerSelectionMenu = document.querySelector('#menu');
const humanScoreText = document.querySelector('#humanScore');
const computerScoreText = document.querySelector('#computerScore');
const results = document.querySelector('#results');

playerSelectionMenu.addEventListener('click', (event) => {
    let target = event.target;

        if (target.id ==='rock' || target.id === 'paper' || target.id === 'scissors'){
            computerSelection = getComputerChoice();
            humanSelection = target.id;
            playRound(humanSelection,computerSelection);
        }
});


function updateScores(){
    humanScoreText.textContent = `Human score: ${humanScore}`;
    computerScoreText.textContent = `Computer score: ${computerScore}`;

    if (computerScore == 5){
        results.textContent = "Computer wins!";
        resetGame();
    }else if(humanScore == 5){
        results.textContent = "Human wins!";
        resetGame();
    }

}

function resetGame(){
    humanScore = 0;
    computerScore = 0;
    updateScores();
}




