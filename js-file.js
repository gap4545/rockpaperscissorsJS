function computerPlays() {
            
    const randomInt = Math.floor(Math.random()*3)

    if (randomInt === 1) {
        return "rock";
    } else if (randomInt === 2) {
        return "paper";
    } else {
        return "scissors";
    }
    
}

function playRound(playerSelection, computerSelection=computerPlays()) {

    switch(playerSelection) {
        case "rock": 
            if (computerSelection === "rock") {
                return "tie";
            } else if (computerSelection === "paper"){
                return "lose";
            } else if (computerSelection === "scissors") {
                return "win";
            }
        case "paper": 
            if (computerSelection === "rock") {
                return "win";
            } else if (computerSelection === "paper"){
                return "tie";
            } else if (computerSelection === "scissors") {
                return "lose";
            }
        case "scissors": 
            if (computerSelection === "rock") {
                return "lose";
            } else if (computerSelection === "paper"){
                return "win";
            } else if (computerSelection === "scissors") {
                return "tie";
            }
    }
}
let wins = 0;
let loses = 0;
let winDiv = document.getElementById('wins');
let loseDiv = document.getElementById('loses');
let endResult = document.getElementById('endResult');

document.addEventListener('click', pressed => {
    let result = playRound(pressed.target.id);
    if (wins < 5 && loses < 5) {
        if (result == 'win') {
            wins++;
            winDiv.textContent = `Wins: ${wins}`
        } else if (result == 'lose') {
            loses++;
            loseDiv.textContent = `Loses: ${loses}`
        };
    } else if (wins == 5) {
        endResult.textContent = 'You win!';
    } else {
        endResult.textContent = 'You lose!'
    }
});
