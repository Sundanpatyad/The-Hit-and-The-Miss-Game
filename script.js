let timer = 60;
let score = 0;
let hitrn;
function bubblemaker(){
    var bubble = "";
    let solution = 0; // counter to check how many times we can insert a solution

    for (var i = 1; i <= 106; i++) {
       let number = Math.floor(Math.random()*10);
       if(number != hitrn){
        bubble += `<div class="bubble">${number}</div>`;
    }
       else if(number == hitrn && solution==2){
        bubble += `<div class="bubble" id="sol">${number}</div>`;
        solution += 1;
    } else{
        solution += 1;
    }

}

if(solution < 2){
    bubble += `<div class="bubble">${number}</div>`;

}
    
    document.getElementById("panelbottom").innerHTML = bubble;
}

function tog() {
    let solElement = document.querySelector('.bubble#sol');

    // Check if 'sol' element exists before toggling the class
    if (solElement) {
        solElement.classList.add('dark');
        timer = timer-10;

    }
}


function getnewhit(){
     hitrn = Math.floor(Math.random()*10);
    document.querySelector(".hitvalue").textContent = hitrn;
}
function timermaker() {
    let timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector(".timervalue").textContent = timer;
        } else {
            document.querySelector("#panelbottom").innerHTML =`<h1>Game Over <br> Your Score is ${score}<h1>`;
            document.querySelector("#result").innerHTML =`<h3> Your Score is ${score}<h3>`;
        }
    }, 1000);
}
function increasescore(){
    score = score += 10;
    document.querySelector(".scoreval").textContent = score;
}

document.querySelector("#panelbottom").addEventListener("click", function(details){
    let clickednumber = Number(details.target.textContent);
    if (hitrn==clickednumber){
        increasescore();
        getnewhit();
        bubblemaker();
        
    }
})



getnewhit();
timermaker();
bubblemaker();


