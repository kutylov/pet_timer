let hours = document.querySelector('.hours')
let minutes = document.querySelector('.minutes')
let seconds = document.querySelector('.seconds')
let days = document.querySelector('.days')

const s = 1000,
    m = s * 60,
    h = m * 60,
    d = h * 24;

function countFunction() {
    const countDown = new Date(2023, 0, 1).getTime();
    const currentTime = new Date().getTime();
    let distance = countDown - currentTime;

    days.textContent = Math.floor(distance / d)
    hours.textContent = Math.floor((distance % d) / h)
    minutes.textContent = Math.floor((distance % h) / m)
    seconds.textContent = Math.floor((distance % m) / s)
}

countFunction()
setInterval(countFunction, 1000)
