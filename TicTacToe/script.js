const cells = document.querySelectorAll(".cell")
const gameInfoText = document.querySelector("#gameInfo")
const restartBtn = document.querySelector("#restartBtn")
const gameBoard = document.querySelector("#gameBoard")

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
            drawCrossLine(winPatterns[i])
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
    const line = document.getElementById("cross-line")
    if (line != null) {
        line.remove();
    }
}

function drawCrossLine(cellsToCross) {
    const line = document.createElement("div")
    line.classList.add("cross-line")
    line.id = 'cross-line';
    adjustLineOrientation(line, cellsToCross)
    gameBoard.appendChild(line)
}

function adjustLineOrientation(line, cellsToCross) {
    if (isArrayEqual(cellsToCross, winPatterns[0])) {
        line.style.top = "16.7%";
        line.style.width = "100%"
        line.style.height = "5px"
        line.style.animationName = "horizontal";
    }
    else if (isArrayEqual(cellsToCross, winPatterns[1])) {
        line.style.top = "50%";
        line.style.width = "100%"
        line.style.height = "5px"
        line.style.animationName = "horizontal";
    }
    else if (isArrayEqual(cellsToCross, winPatterns[2])) {
        line.style.top = "83.3%";
        line.style.width = "100%"
        line.style.height = "5px"
        line.style.animationName = "horizontal";
    }
    else if (isArrayEqual(cellsToCross, winPatterns[3])) {
        line.style.left = "16.5%";
        line.style.height = "100%"
        line.style.width = "5px"
        line.style.animationName = "vertical";
    }
    else if (isArrayEqual(cellsToCross, winPatterns[4])) {
        line.style.left = "50%";
        line.style.height = "100%"
        line.style.width = "5px"
        line.style.animationName = "vertical";
    }
    else if (isArrayEqual(cellsToCross, winPatterns[5])) {
        line.style.left = "83.3%";
        line.style.height = "100%"
        line.style.width = "5px"
        line.style.animationName = "vertical";
    }
    else if (isArrayEqual(cellsToCross, winPatterns[6])) {
        line.style.width = `${Math.sqrt(2)*gameBoard.offsetWidth}px`;
        // line.style.left = `-${(Math.sqrt(2)*gameBoard.offsetWidth-gameBoard.offsetWidth)/2}px`
        line.style.height = "5px";
        line.style.transform = "rotate(45deg)";
        line.style.animationName = "diagonal";
        line.style.transformOrigin = "top left";
    }
    else if (isArrayEqual(cellsToCross, winPatterns[7])) {
        line.style.width = `${Math.sqrt(2)*gameBoard.offsetWidth}px`;
        line.style.left = `-${(Math.sqrt(2)*gameBoard.offsetWidth-gameBoard.offsetWidth)}px`
        line.style.height = "5px";
        line.style.transform = "rotate(-45deg)";
        line.style.animationName = "diagonal-reverse";
        line.style.transformOrigin = "top right";
    }
}

function isArrayEqual(a, b) {
    return (a.length === b.length && a.every((val, index) => val === b[index]))
}
