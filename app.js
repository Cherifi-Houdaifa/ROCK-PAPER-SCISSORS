function game() {
    let playerScore = 0;
    let computerScore = 0;
    let result = "";

    for (let i = 0; i < 5; i++) {
        result = playRound(prompt("Choose (rock), (paper), (scissors):"), computerPlay())
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
    const plays = ["rock", "paper", "scissors"];
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