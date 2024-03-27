let timer;
let isRunning = false;
let hours = 0;
let minutes = 0;
let seconds = 0;

function startStop() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTimer, 1000);
        document.getElementById("startStop").innerHTML = "Stop";
    } else {
        clearInterval(timer);
        isRunning = false;
        document.getElementById("startStop").innerHTML = "Start";
    }
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.getElementById("display").innerHTML = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
    document.getElementById("startStop").innerHTML = "Start";
}

function updateTimer() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    document.getElementById("display").innerHTML = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

function formatTime(time) {
    return (time < 10) ? "0" + time : time;
}
