// ===== COMPUTER CHOICE FUNCTION =====
// Generates a random choice (rock, paper, or scissors) for the computer
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

// ===== HUMAN CHOICE HANDLER =====
// Handles button clicks and starts a new round
function getHumanChoice(choice) {
    const computerChoice = getComputerChoice();
    updateComputerChoiceImg(computerChoice);
    playRound(choice, computerChoice);
}

// Updates the computer choice image
function updateComputerChoiceImg(choice) {
    const img = document.getElementById("computer-choice-img");
    if (choice === "rock") {
        img.src = "rock.png";
        img.alt = "Rock";
    } else if (choice === "paper") {
        img.src = "paper.png";
        img.alt = "Paper";
    } else if (choice === "scissors") {
        img.src = "scissors.png";
        img.alt = "Scissors";
    } else {
        img.src = "question-mark.svg";
        img.alt = "Computer's choice";
    }
}

// ===== DOM ELEMENT SELECTIONS =====
// Select all the game buttons and display elements
const rockBtn = document.querySelector("button#rock");
const paperBtn = document.querySelector("button#paper");
const scissorsBtn = document.querySelector("button#scissors");

// ===== EVENT LISTENERS =====
// Add click handlers to all game buttons
rockBtn.addEventListener("click", () => getHumanChoice("rock"));
paperBtn.addEventListener("click", () => getHumanChoice("paper"));
scissorsBtn.addEventListener("click", () => getHumanChoice("scissors"));

// ===== GAME STATE  =====
// Track scores and display elements
let humanScore = 0;
let computerScore = 0;

const resultText = document.querySelector("p.result");
const scoreText = document.querySelector(".score-header");

function updateBackground(result) {
    document.body.classList.remove("win", "draw", "lose");
    if (result === "win") {
        document.body.classList.add("win");
    } else if (result === "draw") {
        document.body.classList.add("draw");
    } else if (result === "lose") {
        document.body.classList.add("lose");
    }
}


// ===== MAIN GAME LOGIC =====
// Handles a single round of the game
function playRound(humanChoice, computerChoice) {
    // Stop incrementing if game is over 
    const checkForBtn = document.querySelector("#play-again-button");
    if (checkForBtn) {
        return;
    } 
    
    // Check for human win conditions
    if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
            resultText.textContent = "You win! " + humanChoice + " beats " + computerChoice;
            humanScore = humanScore + 1;
            scoreText.textContent = "Human score: " + humanScore + " | " + "Computer score:" + computerScore;
            updateBackground("win");

    // Check for computer win conditions
    } else if ((humanChoice === "scissors" && computerChoice === "rock") ||
               (humanChoice === "rock" && computerChoice === "paper") ||
               (humanChoice === "paper" && computerChoice === "scissors")) {
         resultText.textContent = "You lose! " + computerChoice + " beats " + humanChoice;
         computerScore = computerScore + 1;
         scoreText.textContent = "Human score: " + humanScore + " | " + "Computer score:" + computerScore;
         updateBackground("lose");
        
    // Check for draw condition
    } else if (humanChoice === computerChoice) {
            resultText.textContent = "It's a draw";
            scoreText.textContent = "Human score: " + humanScore + " | " + "Computer score:" + computerScore;
            updateBackground("draw");
    }
    
    checkGameWinner();
}

// ===== GAME WINNER CHECK =====
// Checks if either player has reached 5 points and ends the game
function checkGameWinner() {
    if (humanScore >= 5) {
        resultText.textContent = "Game Over! You win the game!";
        scoreText.textContent = "Human score: " + humanScore + " | " + "Computer score:" + computerScore;
        playAgain();
    } else if (computerScore >= 5) {
        resultText.textContent = "Game Over! Computer wins the game!";
        scoreText.textContent = "Human score: " + humanScore + " | " + "Computer score:" + computerScore;
        playAgain();
    }
}

// ===== PLAY AGAIN FUNCTIONALITY =====
// Creates a Play Again button when the game ends
function playAgain() {
    const playAgainBtn = document.createElement("button");
    const checkForBtn = document.querySelector("#play-again-button")
    
    // Prevent multiple Play Again buttons
    if (checkForBtn) {
        return;
    }
    
    playAgainBtn.textContent = "Play Again";
    playAgainBtn.id = "play-again-button";
    
    // Add reset functionality to the button
    playAgainBtn.addEventListener("click", resetGame => {
        humanScore = 0;
        computerScore = 0;
        resultText.textContent = "";
        scoreText.textContent = "Human score: 0 | Computer score: 0";
        document.body.classList.remove("win", "draw", "lose");
        const computerImg = document.getElementById("computer-choice-img");
        if (computerImg) {
            computerImg.src = "question-mark.svg";
            computerImg.alt = "Computer's choice";
        }
        if (playAgainBtn) {
            playAgainBtn.remove();
        }
    });
    
    // Add the button to the page
    document.querySelector(".result-container").appendChild(playAgainBtn);
}








    
