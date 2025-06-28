// make the options

function getComputerChoice() {
    function choiceNumber() {
        return Math.floor(Math.random() * 3 + 1);
    }
    let choice = choiceNumber();
    if (choice == 1) {
        return ("rock");
    } else if (choice == 2) { 
        return ("paper");
    } else if (choice == 3) {
        return ("scissors");
}
 }
    
// function getHumanChoice() {
//     let choice = prompt("Enter your choice: Rock, Paper, or Scissors")
//     let finalChoice = choice.toLowerCase();
//     if (finalChoice == "rock") {
//         return ("rock");
//     } else if (finalChoice == "paper") {
//         return ("paper");
//     } else if (finalChoice == "scissors") {
//         return ("scissors");
//     }

// }

const rockBtn = document.querySelector("button#rock");
const paperBtn = document.querySelector("button#paper");
const scissorsBtn = document.querySelector("button#scissors");

    rockBtn.addEventListener("click", () => {
        const humanChoice = "rock";
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
    paperBtn.addEventListener("click", () => {
        const humanChoice = "paper";
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
    scissorsBtn.addEventListener("click", () => {
        const humanChoice = "scissors";
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });




    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice , computerChoice) {
        
        if ((humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")) {
                console.log("You win! " + humanChoice + " beats " + computerChoice);
                humanScore = humanScore + 1;
                console.log(humanScore, computerScore)

        } else if ((humanChoice === "scissors" && computerChoice === "rock") ||
                   (humanChoice === "rock" && computerChoice === "paper") ||
                   (humanChoice === "paper" && computerChoice === "scissors")) {
                console.log("You lose! " + computerChoice + " beats " + humanChoice);
                computerScore = computerScore + 1;
                console.log(humanScore, computerScore)
                
        } else if (humanChoice === computerChoice) {
                console.log("It's a draw");
                console.log(humanScore, computerScore)
        }
    }



    // function playGame() {
    //     // plays 5 rounds
    //     for (let i = 0; i < 5; i++) {
    //         const humanSelection = getHumanChoice();
    //         const computerSelection = getComputerChoice();
    //         playRound(humanSelection, computerSelection);   
    //     }

    //     if ( humanScore > computerScore ) {
    //         console.log("Game over: You win!");
    //     }  else if ( humanScore < computerScore ) {
    //         console.log("Game over: You lose!");
    //     } else {
    //         console.log("Game over: It's a draw!");
    //     }
    //     // asks if they want to play again
    //     if (confirm("Play again?")) {
    //         humanScore = 0;
    //         computerScore = 0;
    //         playGame();
    //     }
    // }
    //     playGame();









    
