let [centiseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let displayTime = document.getElementById("displayTime");
let timer = null;

function stopwatch() {
    centiseconds++;
    if (centiseconds === 100) {
        centiseconds = 0;
        seconds++;
    }

    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let cs = centiseconds < 10 ? "0" + centiseconds : centiseconds;

    if (hours > 0) {
        displayTime.innerHTML = `${h}:${m}:${s}.${cs}`;
    } else if (minutes > 0) {
        displayTime.innerHTML = `${m}:${s}.${cs}`;
    } else {
        displayTime.innerHTML = `${s}.${cs}`;
    }
}

function watchStart() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 10);
}

function watchStop() {
    clearInterval(timer);
    timer = null;
}

function watchReset() {
    clearInterval(timer);
    timer = null;
    [centiseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    displayTime.innerHTML = "00.00";
}
