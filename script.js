let questionsCount = 0;
let placeQuestion = document.getElementById("questionSpace");
let startButton = document.getElementById("startQuiz");
let headerEl = document.getElementById("header");
let mainPageEl= document.getElementById("mainPage");
let questionsPageEl = document.getElementById("questionsPage");
let userScorePageEl = document.getElementById("userScorePage");
let highScorePageEl = document.getElementById("highScorePage");
let answerAEl = document.getElementById("answerA");
let answerBEl = document.getElementById("answerB");
let answerCEl = document.getElementById("answerC");
let answerDEl = document.getElementById("answerD");


// On click, begins quiz by bringing up "questionsPage"
startButton.addEventListener("click", beginQuiz);

// Begins quiz by bringing up "questionsPage"
function beginQuiz() {
    mainPageEl.setAttribute("class", "hide");
    questionsPageEl.setAttribute("class", "show");
    userScorePageEl.setAttribute("class", "hide");
    highScorePageEl.setAttribute("class", "hide");
}

// Places question text in jumbotron
function displayQuestions() {
    let currentQuestion = questions[questionsCount];
    placeQuestion.textContent = currentQuestion.title;
    answerAEl.textContent = currentQuestion.choices[0];
    answerBEl.textContent = currentQuestion.choices[1];
    answerCEl.textContent = currentQuestion.choices[2];
    answerDEl.textContent = currentQuestion.choices[3];
}







//View High Scores page
function HallofFame() {
    headerEl.setAttribute("class","hide");
    mainPageEl.setAttribute("class", "hide");
    questionsPageEl.setAttribute("class", "hide");
    userScorePageEl.setAttribute("class", "hide");
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
