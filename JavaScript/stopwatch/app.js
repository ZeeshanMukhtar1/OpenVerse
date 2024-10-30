
let [microseconds, seconds, minutes, hours] = [0,0,0,0];
let displayTime = document.getElementById("displayTime");
let timer = null;

function stopwatch(){
    microseconds++;
    if(microseconds == 100){
        microseconds = 0;
        seconds++;
    }

    if(seconds == 60){
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;

        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m =minutes < 10 ? "0" + minutes :minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = microseconds < 10 ? "0" +microseconds :microseconds;
    if (seconds < 60) {
        displayTime.innerHTML = s + "." + ms;
    }
    if (minutes >= 1) {
        displayTime.innerHTML =  m + ":" + s + "." + ms;
    
    } 
    if (hours >= 1){
        displayTime.innerHTML =h + ":" + m + ":" + s + "." + ms;
    }
}

function watchStart() {
    if (timer !== null) {
        clearInterval(timer);
    }
   timer = setInterval(stopwatch,10);
}
function watchStop(){
    clearInterval(timer);
}

function wathReset() {
    clearInterval(timer);
    [microseconds, seconds, minutes, hours] = [0,0,0,0];
    displayTime.innerHTML = "00.<span class='mss'>00</span>"
}
