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
    
function getHumanChoice() {
    let choice = prompt("Enter your choice: Rock, Paper, or Scissors")
    let finalChoice = choice.toLowerCase();
    if (finalChoice == "rock") {
        return ("rock");
    } else if (finalChoice == "paper") {
        return ("paper");
    } else if (finalChoice == "scissors") {
        return ("scissors");
    }

}
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice , computerChoice) {
        
        if ((humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")) {
                console.log("You win! " + humanChoice + " beats " + computerChoice);
                humanScore = humanScore + 1;

        } else if ((humanChoice === "scissors" && computerChoice === "rock") ||
                   (humanChoice === "rock" && computerChoice === "paper") ||
                   (humanChoice === "paper" && computerChoice === "scissors")) {
                console.log("You lose! " + computerChoice + " beats " + humanChoice);
                computerScore = computerScore + 1;
                
        } else if (humanChoice === computerChoice) {
                console.log("It's a draw");
        }
    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);












    
