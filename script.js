let startButton = document.getElementById("startQuiz");
let mainPageEl= document.getElementById("mainPage");
let questionsPageEl = document.getElementById("questionsPage");
let userScorePageEl = document.getElementById("userScorePage");
let highScorePageEl = document.getElementById("highScorePage");

// On click, begins quiz by bringing up "questionsPage"
startButton.addEventListener("click", beginQuiz);

// Begins quiz by bringing up "questionsPage"
function beginQuiz() {
    mainPageEl.setAttribute("class", "hide");
    userScorePageEl.setAttribute("class", "hide");
    highScorePageEl.setAttribute("class", "hide");
}




//Timer

function startTimer(duration, display) {
    var timer = duration,
        minutes,
        seconds;
    setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
        timer = duration;
        }
    }, 1000);
}

window.onclick = function() {
    var oneMinute = 60,
        display = document.querySelector("#time");
    startTimer(oneMinute, display);
};
