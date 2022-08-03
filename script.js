function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    var index = Math.floor(Math.random()*3)
    return choices[index];
}

var computerSelection = getComputerChoice();
var playerSelection = prompt('Choose your weapon:')
playerSelection = playerSelection.toLowerCase();


function declareWinner(computerSelection,playerSelection) {
        if (computerSelection === playerSelection)
        {
            console.log("Tie")
        }
        else if (computerSelection == "rock" && playerSelection == "scissors" || computerSelection == "paper" && playerSelection == "rock" || computerSelection == "scissors" && playerSelection == "paper" )
        {
            console.log("computer wins")
        }
        else 
        {
            console.log("Human wins")
        }
}

console.log(playerSelection)
console.log(computerSelection)
declareWinner(computerSelection,playerSelection)
