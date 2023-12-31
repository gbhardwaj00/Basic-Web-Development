const gameBoard = document.querySelector("#gameBoard")
const gameScore = document.querySelector("#gameScore")
const overStatus = document.querySelector("#overStatus")
const resetBtn = document.querySelector("#restartBtn")
const startBtn = document.querySelector("#startBtn")
const context = gameBoard.getContext("2d")
const boardWidth = gameBoard.width
const boardHeight = gameBoard.height

const snakeColor = "rgba(16, 22, 25, 0.75)"
const snakeBorderColor = "rgb(150, 175, 79)"
const foodColor = "rgba(16, 22, 25, 0.75)"
const boardColor = "rgb(150, 175, 79)"

const unitSize = 25

let score = 0
let xStep
let yStep
let running = false
let startedGame = false
let foundFood = false

let tickTime
const minSpeedTickTime = 70
let timeoutId

let foodPositionX
let foodPositionY
let gameSpeedAduster
let movesQueue

let xStart = null                                                     
let yStart = null

let snake = [
    {x: unitSize * 4, y: 0},
    {x: unitSize * 3, y: 0},
    {x: unitSize * 2, y: 0},
    {x: unitSize * 1, y: 0},
    {x: 0, y: 0}
];

window.addEventListener("keydown", changeDirection);
startBtn.addEventListener("click", startGame)
resetBtn.addEventListener("click", resetGame)

gameBoard.addEventListener('touchstart', handleTouchStart, false)      
gameBoard.addEventListener('touchend', handleTouchEnd, false)

generateStartScreen()

function generateStartScreen() {
    overStatus.textContent = ""
    gameScore.textContent = getZeroes(score)
    generateSnake()
}

function startGame() {
    setVariables()
    clearBoard()
    generateStartScreen()
    createFood()
    drawFood()
    initGame()
}

function initGame() {
    if (running == false) {
        running = true
        nextTick()
    }
}

function nextTick() {
    if(running == true) {
        console.log("if")
        timeoutId = setTimeout(() => {
            clearBoard()
            drawFood()
            moveSnake()
            checkGameOver()
            generateSnake()
            nextTick()
        }, tickTime)
    }
    else {
        console.log("else")
        overStatus.textContent = "GAME OVER"
        setVariables()
    }
}

function createFood() {
    console.log("createFood")
    foodPositionX = Math.floor((Math.random() * boardWidth) / unitSize) * 25 
    foodPositionY = Math.floor((Math.random() * boardHeight) / unitSize) * 25
    for (let i = 0; i < snake.length; i++) {
        if (foodPositionX == snake[i].x && foodPositionY == snake[i].y) {
            createFood()
        }
    }
}

function drawFood() {
    context.fillStyle = foodColor
    context.fillRect(foodPositionX + unitSize / 3, foodPositionY, unitSize / 3, unitSize / 3)
    context.fillRect(foodPositionX, foodPositionY + unitSize / 3, unitSize / 3, unitSize / 3)
    context.fillRect(foodPositionX + (( 2 * unitSize) / 3), foodPositionY + unitSize / 3, unitSize / 3, unitSize / 3)
    context.fillRect(foodPositionX + unitSize / 3, foodPositionY + (2 * unitSize / 3), unitSize / 3, unitSize / 3)
}

function clearBoard() {
    context.fillStyle = boardColor
    context.fillRect(0, 0, boardWidth, boardHeight)
}

function moveSnake() {
    console.log("moveSnake")
    let head = null
    if (movesQueue.length !== 0) {
        let step = movesQueue.shift()
        head = {x: snake[0].x + step.x, y: snake[0].y + step.y}
    }
    else {
        head = {x: snake[0].x + xStep, y: snake[0].y + yStep}
    }
    snake.unshift(head)
    if(head.x == foodPositionX && head.y == foodPositionY) {
        score += 5
        gameScore.textContent = getZeroes(score)
        createFood()
        if (tickTime > minSpeedTickTime) {
            tickTime -= 6
        }
        foundFood = true
    }
    else {
        snake.pop()
    }
}

function generateSnake() {
    if(foundFood) {
        context.fillStyle = boardColor
        context.fillRect(snake[0].x, snake[0].y, unitSize, unitSize)
        foundFood = false
    }
    context.fillStyle = snakeColor
    context.strokeStyle = snakeBorderColor
    snake.forEach((snakePart) => {
        context.fillRect(snakePart.x, snakePart.y, unitSize, unitSize)
        context.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize)
    })
}

function changeDirection(event) {
    if(!running) {
        return
    }
    const keyCode = event.keyCode;
    const LEFT = 37
    const UP = 38
    const RIGHT = 39
    const DOWN = 40

    const goingUp = (yStep == -unitSize)
    const goingDown = (yStep == unitSize)
    const goingRight = (xStep == unitSize)
    const goingLeft = (xStep == -unitSize)

    if(keyCode == LEFT && goingLeft){
        return
    }
    else if(keyCode == RIGHT && goingRight) {
        return
    }
    else if(keyCode == UP && goingUp) {
        return
    }
    else if (keyCode == DOWN && goingDown) {
        return
    }

    if (keyCode == LEFT && !goingRight) {
        xStep = -unitSize
        yStep = 0
    }
    else if (keyCode == RIGHT && !goingLeft) {
        xStep = unitSize
        yStep = 0
    }
    else if (keyCode == UP && !goingDown) {
        xStep = 0
        yStep = -unitSize
    }
    else if (keyCode == DOWN && !goingUp) {
        xStep = 0
        yStep = unitSize
    }
    movesQueue.push({x: xStep, y: yStep})
}

function checkGameOver() {
    if (snake[0].x < 0) {
        running = false
    }
    else if (snake[0].x >= boardWidth) {
        running = false
    }
    else if (snake[0].y < 0) {
        running = false
    }
    else if (snake[0].y >= boardHeight) {
        running = false
    }
    for (let i = 1; i < snake.length; i+= 1) {
        if(snake[i].x == snake[0].x && snake[i].y == snake[0].y){
            running = false;
        }
    }

}

function getZeroes(score) {
    if (score <= 9) {
        return '000' + score
    }
    else if (score <= 99) {
        return '00' + score
    }
    else if (score <= 999) {
        return '0' + score
    }
    else {
        return score
    }
}

function resetGame() {
    console.log("Reset clicked")
    clearBoard()
    setVariables()
    generateStartScreen()
    clearTimeout(timeoutId)
    running = false
}

function setVariables() {
    snake = [
        {x: unitSize * 4, y: 0},
        {x: unitSize * 3, y: 0},
        {x: unitSize * 2, y: 0},
        {x: unitSize * 1, y: 0},
        {x: 0, y: 0}
    ];
    score = 0
    xStep = unitSize
    yStep = 0
    tickTime = 300
    movesQueue = []
}

function handleTouchStart(evt) {
    const firstTouch = evt.touches[0];                                     
    xStart = firstTouch.clientX                                     
    yStart = firstTouch.clientY                                      
}

function handleTouchEnd(evt) {
    if (!xStart || !yStart || !running) {
        return;
    }

    const goingUp = (yStep == -unitSize)
    const goingDown = (yStep == unitSize)
    const goingRight = (xStep == unitSize)
    const goingLeft = (xStep == -unitSize)

    let xEnd = evt.changedTouches[0].clientX
    let yEnd = evt.changedTouches[0].clientY

    let xDiff = xStart - xEnd
    let yDiff = yStart - yEnd

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0 && goingLeft) { 
            return
        } else if (goingRight) {
            return
        }                       
    } else {
        if (yDiff > 0 && goingUp) { 
            return
        } else if (goingDown) { 
            return
        }                                                                 
    }

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0 && !goingRight) { 
            xStep = -unitSize
            yStep = 0
        } else if (!goingLeft) {
            xStep = unitSize;
            yStep = 0;
        }                       
    } else {
        if (yDiff > 0 && !goingDown) { 
            xStep = 0;
            yStep = -unitSize;
        } else if (!goingUp) { 
            xStep = 0;
            yStep = unitSize;
        }                                                                 
    }

    xDown = null;
    yDown = null;                                             
}

