const plays = ["rock", "paper", "scissors"];

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let result = ""
    let playerSelection = "";

    for (let i = 0; i < 5; i++) {
        while (true) {
            playerSelection = prompt("Choose (rock), (paper), (scissors):")
            if (plays.includes(playerSelection.toLowerCase())) {
                break
            }
        }
        result = playRound(playerSelection, computerPlay())
        console.log(result)
        if (result.startsWith("You Win")) {
            playerScore++
        }
        else if (result.startsWith("You Lose")) {
            computerScore++
        }
    }
    if (playerScore > computerScore) {
        console.log("You Win the game")
    }
    else {
        console.log("You Lose the game")
    }
}


function computerPlay() {
    return plays[Math.floor(Math.random() * 3)]
}

function playRound(player, computer) {
    player = player.toLowerCase()
    if (player === "paper" && computer === "rock") {
        return `You Win! ${player} beats ${computer}`
    }
    else if (player === "rock" && computer === "scissors") {
        return `You Win! ${player} beats ${computer}`
    }
    else if (player === "scissors" && computer === "paper") {
        return `You Win! ${player} beats ${computer}`
    }
    else if (player === computer) {
        return `It's a tie`
    }
    else {
        return `You Lose! ${computer} beats ${player}`
    }
}
game()