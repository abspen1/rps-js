let userScore = 0
let computerScore = 0
const userScore_span = document.getElementById("user-score")
const computerScore_span = document.getElementById("computer-score")
const scoreBoard_div = document.querySelector(".score-board")
const result_p = document.querySelector(".result > p")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")
const smallUserWord = "(user)".fontsize(5)
const smallCPUWord = "(cpu)".fontsize(5)


function getComputerChoice() {
    const choices = ['r', 'p', 's']
    const randNum = Math.floor(Math.random() * 3)
    return choices[randNum]
}


const getFullWord = letter => {
    if (letter === 'r') return "Rock"
    if (letter === 'p') return "Paper"
    return "Scissors"
}


function formatResult(winLoss, user, computer) {
    let output
    if (winLoss === 'You win!') {
        output = `${getFullWord(user)}${smallUserWord} beats ${getFullWord(computer)}${smallCPUWord}`
    } else {
        output = `${getFullWord(computer)}${smallCPUWord} beats ${getFullWord(user)}${smallUserWord}`
    }
    result_p.innerHTML = output + ". " + winLoss
}

function win(user, computer) {
    userScore++
    userScore_span.innerHTML = userScore
    formatResult("You win!", user, computer)
}


function lose(user, computer) {
    computerScore++
    computerScore_span.innerHTML = computerScore
    formatResult("You lost!", user, computer)
}


function draw() {
    result_p.innerHTML = "It's a draw!"
}

function game(userChoice) {
    const computerChoice = getComputerChoice()
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice)
            break
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice)
            break
        case "rr":
        case "pp":
        case "ss":
            draw()
            break
    }
}


function main() {
    rock_div.addEventListener('click', function() {
        game("r")
    })
    
    paper_div.addEventListener('click', function () {
        game("p")
    })
    
    scissors_div.addEventListener('click', function () {
        game("s")
    })
}

main()