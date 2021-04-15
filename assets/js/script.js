// how do i get the value of the timeLeft when the quiz is completed/ endGame function is called so I can add it to the current score to produce the final score to be saved to localStorage
// submit button won't present highscores page
// how do i add the recently recorded score to the list of previous ones to be presented on the highscore page?

var frontPageEl = document.querySelector('.front-page');
var navEl = document.querySelector('nav');
var questionsEl = document.querySelector('.questions');
var initialsEl = document.querySelector('.enter-initials');
var highscoreEl = document.querySelector('.display-highscores');
var qEl = document.querySelector('#q');
var timerEl = document.getElementById('count');
var a1 = document.getElementById('0');
var a2 = document.getElementById('1');
var a3 = document.getElementById('2');
var a4 = document.getElementById('3');
var highscoresUlEl = document.getElementById('highscores');
var currentScore = document.getElementById('current-score');
var correct = document.getElementById('correct-incorrect');

var scoresBtnEl = document.querySelector('#view-scores')
var startBtnEl = document.querySelector('#start');
var submitBtnEl = document.querySelector('#submit-initials');
var refreshBtnEl = document.querySelector('#refresh')

console.log(highscoresUlEl);

var scoresArray = JSON.parse(localStorage.getItem("score")) || [];

var currentQuestionIndex = 0;

var timeInterval


var score = 0;
var timeLeft=60;

var startQuiz = function() {
    console.log("startQuiz is running");
    frontPageEl.classList.add('hidden');
    questionsEl.classList.remove('hidden');
    startTimer();
    nextQuestion();
}

var startTimer = function() {
    console.log("startTimer is running");
    timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            timerEl.textContent = timeLeft;
            timeLeft--
        }
        else {
            timeInterval.textContent = '';
            clearInterval(timeInterval);
            alert("Time's up!");
            endGame();
        }
    }, 1000);
}

var nextQuestion = function() {
    console.log(currentQuestionIndex);
    var currentQuestion = questionsArray[currentQuestionIndex];
    qEl.textContent = currentQuestion.q;
    for (let i = 0; i < currentQuestion.a.length; i++) {
        const currentAnswer = currentQuestion.a[i];
        document.getElementById(i).textContent = currentAnswer
    }
}

var checkAnswer = function(event) {
    console.log("checkAnswer is running");
    var answerText = event.target.textContent;
    
    if (questionsArray[currentQuestionIndex].c === answerText) {
        correct.innerText = "Previous answer: Correct!";
    }
    else {
        correct.innerText = "Previous answer: Incorrect";
        timeLeft = timeLeft - 10;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex === questionsArray.length) {
        clearInterval(timeInterval);
        endGame();
    }
    else {
        nextQuestion();
    }
}

var questionsArray = [
    {
        q: "What is the first parameter in the setInterval method?",
        a: ["A: time in milliseconds", "B: eventListener", "C: for loop", "D: function"],
        c: "D: function",
    },
    {
        q: "What property is used to add a class to an element without replacing other classes already attached to the element?",
        a: ["A: element.className()", "B: element.classList.add()", "C: element.classAdd", "D: element.addClass"],
        c: "B: element.classList.add()",
    },
    {
        q: "Which of the following is not equivalent in functionality to a div?",
        a: ["A: main", "B: block", "C: aside", "D: header"],
        c: "B: block",
    },
    {
        q: "How does one remove the default dots in front of li items within a ul tag? (using CSS on the ul tag)",
        a: ["A: padding: 0", "B: display: ruby", "C: list-style: none", "D: text-decoration: none"],
        c: "C: list-style: none",
    },
    {
        q: "How does one add a data item to local storage?",
        a: ["A: localStorage.plus('*item key*', '*item value*')", "B: localStorage.add('*item key*', '*item value*')", "C: localStorage.setItem('*item key*', '*item value*')", "D: localStorage.getItem('*item key*', '*item value*')"],
        c: "C: localStorage.setItem('*item key*', '*item value*')",
    },
];

var endGame = function() {
    score = timeLeft;
    currentScore.innerText = "Your score is " + score + "!"
    questionsEl.classList.add('hidden');
    navEl.classList.add('hidden');
    initialsEl.classList.remove('hidden');
}

var saveScore = function (event) {
    event.preventDefault();
    console.log('saveScore is running');
    var initialsInput = document.querySelector("input[name='initials-input']").value;
    if(initialsInput === "") {
        alert("Initials cannot be blank!");
        return false
    }
    else {
        scoresArray.push({initials: initialsInput, score: score});
        localStorage.setItem("score", JSON.stringify(scoresArray));
        showScores();
    }
}

var showScores = function() {
    frontPageEl.classList.add('hidden');
    questionsEl.classList.add('hidden');
    navEl.classList.add('hidden');
    initialsEl.classList.add('hidden');
    highscoreEl.classList.remove('hidden');

    scoresArray.sort(function(a, b) {
        return parseInt(b.score) - parseInt(a.score)
    }
    )
    
    for (let i = 0; i < scoresArray.length; i++) {
        scoresArray[i];
        var highscoreLiEl = document.createElement("li");
        highscoreLiEl.innerText = scoresArray[i].initials + ": " + scoresArray[i].score;
        highscoresUlEl.appendChild(highscoreLiEl);
    }
};

var refreshPage = function() {
    window.location.reload();
}

scoresBtnEl.addEventListener("click", showScores)
startBtnEl.addEventListener("click", startQuiz);
submitBtnEl.addEventListener("click", saveScore);
refreshBtnEl.addEventListener("click", refreshPage)

a1.addEventListener("click", checkAnswer);
a2.addEventListener("click", checkAnswer);
a3.addEventListener("click", checkAnswer);
a4.addEventListener("click", checkAnswer);