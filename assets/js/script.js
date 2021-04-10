// how do i get the value of the timeLeft when the quiz is completed/ endGame function is called so I can add it to the current score to produce the final score to be saved to localStorage
// submit button won't present highscores page
// how do i add the recently recorded score to the list of previous ones to be presented on the highscore page?

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
var submitBtnEl = document.querySelector('#submit-initials');
var highscoresUlEl = document.getElementsByClassName('highscores');

var currentQuestionIndex = 0;



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
        alert("Yup!");
        score++;
    }
    else {
        alert("Nope!")
        timeLeft = timeLeft - 10;
    }

    currentQuestionIndex++;


// change following value of 5 to (questionsArray.length + 1) which should just work on its own within the if statement but somehow breaks the fucking code
    if (currentQuestionIndex === 5) {
        console.log("endgame is about to run");
        endGame();
    }
    else {
        nextQuestion();
    }

    // return timeLeft??
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
    console.log('endGame is running');
    questionsEl.classList.add('hidden');
    navEl.classList.add('hidden');
    initialsEl.classList.remove('hidden');

    // return timeLeft??
}

var saveScore = function () {
    console.log('saveScore is running');
    var initialsInput = document.querySelector("input[name='initials-input']").value;
    if(initialsInput.value === "") {
        alert("Initials cannot be blank!");
        return false
    }
    else {
        var savedScores = JSON.parse(localStorage.getItem("score")) || [];
        var currentScore = initialsInput
        // ?.push(currentHighscore);
        localStorage.setItem("score", initialsInput + ": " + JSON.parse(score + timeLeft));
        showScores();
    }
}

var showScores = function() {
    console.log("showScores is running");
    initialsEl.classList.add('hidden');
    highscoreEl.classList.remove('hidden');
    for (let i = 0; i < localStorage.length; i++) {
        localStorage.getItem(localStorage.score(i));

    }
}

submitBtnEl.addEventListener("click", saveScore);
startBtnEl.addEventListener("click", startQuiz);
a1.addEventListener("click", checkAnswer);
a2.addEventListener("click", checkAnswer);
a3.addEventListener("click", checkAnswer);
a4.addEventListener("click", checkAnswer);