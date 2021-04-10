// how do i get the value of the timLeft when the quiz is completed/ endGame function is called
// how do i end the game once the array has been run through?

var frontPageEl = document.querySelector('.front-page');
var navEl = document.querySelector('nav');
var questionsEl = document.querySelector('.questions');
var initialsEl = document.querySelector('.enter-initials');
var highscoreEl = document.querySelector('.display-highscores');
var startBtnEl = document.querySelector('#start');
var qEl = document.querySelector('#q');
var timerEl = document.getElementById('count');
var a1 = document.getElementById('0');
var a2 = document.getElementById('1');
var a3 = document.getElementById('2');
var a4 = document.getElementById('3');

var currentQuestionIndex = 0;

var score = 0;
var timeLeft=60;

var startQuiz = function() {
    frontPageEl.classList.add('hidden');
    questionsEl.classList.remove('hidden');
    startTimer();
    nextQuestion();
}

var startTimer = function() {
    var timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            timerEl.textContent = timeLeft;
            timeLeft--
        }
        else {
            timeInterval.textContent = '';
            clearInterval(timeInterval);
            alert("Time's up!");
            score=0;
            endGame();
        }
    }, 1000);
}

var nextQuestion = function() {
    var currentQuestion = questionsArray[currentQuestionIndex]
    qEl.textContent = currentQuestion.q;
    for (let i = 0; i < currentQuestion.a.length; i++) {
        const currentAnswer = currentQuestion.a[i];
        document.getElementById(i).textContent = currentAnswer
    }
}

var checkAnswer = function(event) {
    var answerText = event.target.textContent;
    
    if (questionsArray[currentQuestionIndex].c === answerText) {
        alert("Yup!");
        score++;
    }
    else {
        alert("Nope!")
        timeLeft = timeLeft - 10;
    }
    currentQuestionIndex++;

    nextQuestion();
    
    console.log('currentQuestionIndex: ' + currentQuestionIndex);
    // endGame();
    // return timeLeft
}

var questionsArray = [
    {
        q: "What is the first parameter in the setInterval method?",
        a: ["A: time in milliseconds", "B: eventListener", "C: for loop", "D: function"],
        c: "D: function"
    },
    {
        q: "What property is used to add a class to an element without replacing other classes already attached to the element?",
        a: ["A: element.className()", "B: element.classList.add()", "C: element.classAdd", "D: element.addClass"],
        c: "B: element.classList.add()"
    },
    {
        q: "Which of the following is not equivalent in functionality to a div?",
        a: ["A: main", "B: block", "C: aside", "D: header"],
        c: "B: block"
    },
    {
        q: "How does one remove the default dots in front of li items within a ul tag? (using CSS on the ul tag)",
        a: ["A: padding: 0", "B: display: ruby", "C: list-style: none", "D: text-decoration: none"],
        c: "C: list-style: none"
    },
    {
        q: "How does one add a data item to local storage?",
        a: ["A: localStorage.plus('*item key*', '*item value*')", "B: localStorage.add('*item key*', '*item value*')", "C: localStorage.setItem('*item key*', '*item value*')", "D: localStorage.getItem('*item key*', '*item value*')"],
        c: "C: localStorage.setItem('*item key*', '*item value*')"
    },
];

var endGame = function() {
    questionsEl.classList.add('hidden');
    navEl.classList.add('hidden');
    initialsEl.classList.remove('hidden');
    console.log('game has ended');
    // return timeLeft
}


startBtnEl.addEventListener("click", startQuiz);
a1.addEventListener("click", checkAnswer);
a2.addEventListener("click", checkAnswer);
a3.addEventListener("click", checkAnswer);
a4.addEventListener("click", checkAnswer);