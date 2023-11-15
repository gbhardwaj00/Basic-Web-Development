const hoursBox = document.querySelector('#hours')
const minutesBox = document.querySelector('#minutes')
const secondsBox = document.querySelector('#seconds')
const mSecondsBox = document.querySelector('#mSeconds')
const mainBtn = document.querySelector('#mainBtn')
const resetBtn = document.querySelector('#resetBtn')
const changeThemeBtn = document.querySelector("[data-theme-toggle]")
const themeBtn = document.querySelector('.themeBtn')

themeBtn.addEventListener('click', () => {
  if (document.querySelector('html').getAttribute('data-theme') == 'light') {
    themeBtn.innerHTML = '&#x263C'
  }
  else {
    themeBtn.innerHTML = '&#x263D'
  }
})

changeThemeBtn.addEventListener('click', () => {
  if (document.querySelector('html').getAttribute('data-theme') == 'light') {
    document.querySelector('html').setAttribute('data-theme', 'dark')
  }
  else {
    document.querySelector('html').setAttribute('data-theme', 'light')
  }
})

let currentInterval = null
let elapsedTime = 0

mainBtn.addEventListener('click', toggleStart)
resetBtn.addEventListener('click', clearSW)

function clearSW() {
  clearInterval(currentInterval)
  currentInterval = null
  elapsedTime = 0
  update()
  mainBtn.textContent = 'Start'
  mainBtn.style.backgroundColor = 'darkgreen';
}

function toggleStart() {
  if(currentInterval) {
    mainBtn.textContent = 'Resume'
    mainBtn.style.backgroundColor = '#F08000';
    clearInterval(currentInterval)
    currentInterval = null
  }
  else {
    mainBtn.textContent = 'Pause'
    mainBtn.style.backgroundColor = 'darkred';
    let startingTime = Date.now() - elapsedTime
    currentInterval = setInterval(() => {
      elapsedTime = Date.now() - startingTime
      update()
    }, 10)
  }
}

function setZero(num) {
  return (num < 10) ? ('0' + num) : num;
}

function update() {
  hours = Math.floor(elapsedTime/(1000*60*60))
  minutes = Math.floor(elapsedTime/(1000*60)) % 60
  seconds = Math.floor(elapsedTime/(1000)) % 60
  mSeconds = Math.floor(elapsedTime % (1000)/10)

  hoursBox.textContent = setZero(hours)
  minutesBox.textContent = setZero(minutes)
  secondsBox.textContent = setZero(seconds)
  mSecondsBox.textContent = setZero(mSeconds)
}

