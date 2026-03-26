let startTime, timerInterval;
const display = document.getElementById('display');

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);
    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);
    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);
    return `${hh.toString().padStart(2, '0')}:${mm.toString().padStart(2, '0')}:${ss.toString().padStart(2, '0')}`;
}

document.getElementById('startBtn').onclick = () => {
    if (!timerInterval) {
        startTime = Date.now() - (startTime || 0);
        timerInterval = setInterval(() => {
            display.innerHTML = timeToString(Date.now() - startTime);
        }, 1000);
    }
};

document.getElementById('stopBtn').onclick = () => {
    clearInterval(timerInterval);
    timerInterval = null;
    startTime = Date.now() - startTime;
};

document.getElementById('resetBtn').onclick = () => {
    clearInterval(timerInterval);
    timerInterval = null;
    startTime = 0;
    display.innerHTML = "00:00:00";
};
