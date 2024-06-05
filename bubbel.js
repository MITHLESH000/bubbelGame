
var clutter = "";
var num = "";
var timer =60;
var hit;
var clickedNum;
var score = 0;

document.querySelector("#pbtm").addEventListener("click",function(dts){
    clickedNum = Number(dts.target.textContent);
    if(hit===clickedNum){
        
        scoreFun();
        hitNum();
    }
    clutter=""; 
    bubbleMaker();
})


function scoreFun() {
    score += 10;
    document.querySelector("#scoreId").textContent=score;
    bubbleMaker();
}

function hitNum() {
    hit = Number(Math.floor(Math.random() * 10));
    document.querySelector("#hit").textContent = hit;
}

function runTimer() {
    setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timeVal").textContent = timer;
        }
        else {
            
            clearInterval(timer);
            document.querySelector("#pbtm").innerHTML = `<h1>Game over</h1>`;
        }
    }, 1000);
}

function bubbleMaker() {

    for (var i = 1; i <= 153; i++) {
        num = Number(Math.floor(Math.random() * 10));
        clutter += `<div class="bubble">${num}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

bubbleMaker();
runTimer();
hitNum();