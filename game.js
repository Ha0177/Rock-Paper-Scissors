// make the options

function getComputerChoice() {
    function choiceNumber() {
        return Math.floor(Math.random() * 3 + 1);
    }
    let choice = choiceNumber();
    if (choice == 1) {
        return ("Rock");
    } else if (choice == 2) { 
        return ("Paper");
    } else if (choice == 3) {
        return ("Scissors");
}
 }
    
function getHumanChoice() {
    let choice = prompt("Enter your choice: Rock, Paper, or Scissors")
    let finalChoice = choice.toLowerCase();
    if (finalChoice == "rock") {
        return ("Rock");
    } else if (finalChoice == "paper") {
        return ("Paper");
    } else if (finalChoice == "scissors") {
        return ("Scissors");
    }

}
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice , computerChoice) {

    
    
    }













    
