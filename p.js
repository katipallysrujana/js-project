let startTime;
 let updatedTime;
 let difference;
 let tInterval;
let running = false;
let lapCount = 0;

const display = document.getElementById('display');
const laps = document.getElementById('laps');

function startTimer() {
    if (!running) {
        startTime = new Date().getTime() - (difference || 0);
        tInterval = setInterval(updateTime, 1000);
        running = true;
    }
}

function stopTimer() {
    clearInterval(tInterval);
    running = false;
}

function resetTimer() {
    clearInterval(tInterval);
    running = false;
    difference = 0;
    display.innerHTML = "00:00:00";
    laps.innerHTML = "";
    lapCount = 0;
}
function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    display.innerHTML = (hours < 10 ? "0" + hours : hours) + ":" +
                        (minutes < 10 ? "0" + minutes : minutes) + ":" +
                        (seconds < 10 ? "0" + seconds : seconds);
}

function recordLap() {
    if (running) {
        lapCount++;
        const lapTime = display.innerHTML;
        const lapItem = document.createElement('div');
        lapItem.textContent = `Lap ${lapCount}: ${lapTime}`;
        laps.appendChild(lapItem);
    }
}
document.getElementById('startButton').addEventListener('click', startTimer);
document.getElementById('stopButton').addEventListener('click', stopTimer);
document.getElementById('resetButton').addEventListener('click', resetTimer);
document.getElementById('lapButton').addEventListener('click', recordLap);

function playbuttonsound(){
    document.getElementById("buttonsound").play();
}