update();
setInterval(update, 1000)

function update() {
  let date = new Date()
  document.getElementById("myClock").innerHTML = formatTime(date) + `<br>` + formatDate(date)
  
  function formatTime(date){
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    let amOrPm = hour > 12 ? "PM" : "AM"
    
    hour = hour % 12 || 12
    
    hour = setZero(hour)
    minute = setZero(minute)
    second = setZero(second)
    return `${hour}:${minute}:${second} ${amOrPm}`
  }
  
  function formatDate(date) {
    let dayOfMonth = date.getDate()
    let year = date.getFullYear()
    let month = date.getMonth()
    dayOfMonth = setZero(dayOfMonth)
    year = setZero(year)
    month = setZero(month)
    return `${dayOfMonth}/${month}/${year}`
  }
  
  function setZero(date){
    date = date.toString()
    return (date.length) > 1 ? date : `0${date}`
  }  
}


