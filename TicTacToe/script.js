const cells = document.querySelectorAll(".cell")
const gameInfoText = document.querySelector("#gameInfo")
const restartBtn = document.querySelector("#restartBtn")

let running = false
let currentPlayer = 'X'
let currentBoard = ["", "", "", "", "", "", "", "", ""] 

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

initGame()

function initGame() {
    cells.forEach(cell => { cell.addEventListener("click", () => {
            const cellIndex = cell.getAttribute("cellIndex")
            updateCell(cell, cellIndex);
        })
    })
    gameInfoText.textContent = `${currentPlayer}'s turn!`
    running = true
    restartBtn.addEventListener("click", resetGame)
}

function updateCell(cell, cellIndex){
    if(running == true) {
        if (currentBoard[cellIndex] != "") {
            return;
        }
        cell.textContent = currentPlayer
        currentBoard[cellIndex] = currentPlayer
        checkWinOrDraw()
    }
}

function checkWinOrDraw(){
    for(let i = 0; i < winPatterns.length; i++) {
        const cell1 = currentBoard[winPatterns[i][0]]
        const cell2 = currentBoard[winPatterns[i][1]]
        const cell3 = currentBoard[winPatterns[i][2]]
        if (cell1 == "" || cell2 == "" || cell3 == "") {
            continue
        }
        if (cell1 == cell2 && cell2 == cell3) {
            gameInfoText.textContent = `${currentPlayer} won! Restart to play again.`
            running = false
            return 
        }
    }
    if(!currentBoard.includes("")) {
        gameInfoText.textContent = `It's a draw! Restart to play again.`
        return 
    }
    else {
        changePlayer()
    }
}

function changePlayer(){
    currentPlayer = (currentPlayer == 'X') ? currentPlayer = 'O' : currentPlayer = 'X'
    gameInfoText.textContent = `${currentPlayer}'s turn!` 
}

function resetGame() {
    currentBoard = ["", "", "", "", "", "", "", "", ""] 
    currentPlayer = 'X'
    running = true
    gameInfoText.textContent = `${currentPlayer}'s turn`
    cells.forEach((cell) => cell.textContent = "")
}

