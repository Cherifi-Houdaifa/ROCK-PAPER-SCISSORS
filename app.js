// game variables
const plays = ["rock", "paper", "scissors"];
let result = "";
let playerSelection = "";

// DOM variables
const btns = document.querySelectorAll("input");
const refresh = document.querySelector(".winner input");
let playerScore = document.querySelector(".player .score");
let computerScore = document.querySelector(".computer .score");
let roundStatus = document.querySelector(".round-status p");
let winner = document.querySelector(".winner p");


btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        result = playRound(btn.classList[0], computerPlay());
        roundStatus.textContent = result;

        if (result.startsWith("You Win")) {
            playerScore.textContent = Number(playerScore.textContent) + 1;
        }
        else if (result.startsWith("You Lose")) {
            computerScore.textContent = Number(computerScore.textContent) + 1;
        }
        if (Number(playerScore.textContent) === 5) {
            winner.textContent = "You win";
            refresh.removeAttribute("hidden");
        }
        else if (Number(computerScore.textContent) === 5) {
            winner.textContent = "You lose";
            refresh.removeAttribute("hidden");
        }
    })
})



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