// javascript code goes here
const timeEle = document.getElementById('time');
const startBtn = document.getElementById('start');
const pauseContinueBtn = document.getElementById('pause');
const stopBtn = document.getElementById('stop');

let hours = 0;
let min = 0;
let sec = 0;

function getTime(){
    let time ="";
    time += hours < 10 ? `0${hours}` : `${hours}`;
    time += min < 10 ? `:0${min}` : `:${min}`;
    time += sec < 10 ? `:0${sec}` : `:${sec}`;
    return time;  
}

timeEle.innerText = getTime();

pauseContinueBtn.setAttribute('disabled',true);
stopBtn.setAttribute('disabled',true);

function increaseTime(){
    sec += 0.5;
    if(sec === 60){
        sec = 0;
        min += 1;
    }
    if(min === 60){
        min = 0;
        hours += 1;
    }
    if(Number.isInteger(sec)){
        timeEle.innerHTML = getTime();
    }
}

let interval;
function start(){
    interval = setInterval(function(){
        increaseTime();
    },500)
    startBtn.setAttribute('disabled',true);
    pauseContinueBtn.removeAttribute('disabled');
    stopBtn.removeAttribute('disabled');
}

function pause(){
    if(pauseContinueBtn.innerText ==="pause"){
        clearInterval(interval);
        pauseContinueBtn.innerText ="continue";
    }else{
        start();
        pauseContinueBtn.innerText = "pause";
    }
}

function stop(){
    clearInterval(interval);
    hours = 0;
    min = 0;
    sec = 0;
    timeEle.innerText = getTime();
    pauseContinueBtn.setAttribute('disabled',true);
    stopBtn.setAttribute('disabled',true);
    startBtn.removeAttribute('disabled')
    pauseContinueBtn.innerText = "pause";
}