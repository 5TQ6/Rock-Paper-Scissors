// function getComputerChoice() {
//     const choices = ["rock", "paper", "scissors"]
//     var index = Math.floor(Math.random()*3)
//     return choices[index];
// }

// var humanScore = 0;
// var computerScore = 0;

// function declareWinner(computerSelection,playerSelection) {
//         if (computerSelection === playerSelection)
//         {
//             console.log("Tie")
//             humanScore++;
//             computerScore++;
//         }
//         else if (computerSelection == "rock" && playerSelection == "scissors" || computerSelection == "paper" && playerSelection == "rock" || computerSelection == "scissors" && playerSelection == "paper" )
//         {
//             console.log("computer")
//             console.log(computerSelection, "beats" ,playerSelection)
//             computerScore++;
//         }
//         else 
//         {
//             console.log("Human")
//             console.log(playerSelection, "beats", computerSelection)
//             humanScore++;
//         }
// }

// function game() {
//     for(let i = 0; i < 5; i++)
//     {
//         var computerSelection = getComputerChoice();
//         var playerSelection = prompt('Choose your weapon:')
//         playerSelection = playerSelection.toLowerCase();
//         console.log(playerSelection)
//         console.log(computerSelection)
//         declareWinner(computerSelection,playerSelection)
//         document.write("Human:", humanScore," Computer:", computerScore)
//        rock
//     }
//     if (humanScore == computerScore)
//     {
//         document.write("Tie score")
//     }
//     else if (humanScore > computerScore)
//     {
//         document.write("Human score win")
//     }
//     else 
//     {document.write("Computer score win")}
// }

// game()


