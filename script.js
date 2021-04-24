let userChosen
let computerChosen
const displayResult = document.querySelector('[data-result]')
const userChoice = document.querySelector(['[data-your-choice]'])
const computerChoice = document.querySelector('[data-computer-choice]')
var result = results()
const randomNumber = Math.floor(Math.random() * (3))



const possibleChoices = document.querySelectorAll('.choices')
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChosen = e.target.id
    results()
    generatedComputerChoice()
    userChoice.innerText = userChosen
    computerChoice.innerText = computerChosen
    displayResult.innerText = result

}))

function generatedComputerChoice() {
    if (randomNumber === 1) {
        return (computerChosen = "rock");
    } else if (randomNumber === 2) {
        return (computerChosen = "paper");
    } else if (randomNumber === 3) {
        return (computerChosen = "scissors");
    } debugger

}

function results() {
    if (userChosen == computerChosen) {
        return (result = "Tie!");
    } else if (userChosen === "rock" && computerChosen === "paper") {
        return (result = "You lose!");
    } else if (userChosen === "rock" && computerChosen === "scissors") {
        return (result = "You win!");
    } else if (userChosen === "paper" && computerChosen === "rock") {
        return (result = "You win!");
    } else if (userChosen === "paper" && computerChosen === "scissors") {
        return (result = "You lose!");
    } else if (userChosen === "scissors" && computerChosen === "rock") {
        return (result = "You lose!");
    } else if (userChosen === "scissors" && computerChosen === "paper") {
        return (result = "You win!");
    }

}