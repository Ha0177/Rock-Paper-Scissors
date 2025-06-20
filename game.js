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
    
    
    
