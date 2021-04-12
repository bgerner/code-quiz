# Code Quiz

This repo contains code for a 5 question quiz (though more can be added to the questionsArray without effecting the functionality of the application). 
There are 4 different pages with class names front-page, questions, enter-initials, and display-highscores which do what their class names indicate.
There are also 4 buttons. 
One, 'View Scores', takes the user straight to the display-highscores page from either the front-page page or the questions page by calling the showScores function.
The button aptly labelled 'Start Quiz' calls the startQuiz function which also calls the startTimer and nextQuestion functions.
Once all of the questions have been answered or the timer has ended and the enter-initials page has been reached, there is a 'Submit' button to trigger the saveScore function once a non-blank response has been entered for the initials. 
Once the showScores function has been called (following a click of the 'View Scores' button or running of saveScore() following a valid initials response), the refresh button will appear which, you guessed it, refreshes the page so the user can take the quiz again.

Screenshots:

<img width="1071" alt="Screen Shot 2021-04-12 at 2 52 06 PM" src="https://user-images.githubusercontent.com/79947732/114462360-2c958080-9ba0-11eb-88a7-5f30313b587b.png">
<img width="1075" alt="Screen Shot 2021-04-12 at 2 52 23 PM" src="https://user-images.githubusercontent.com/79947732/114462367-2ef7da80-9ba0-11eb-990f-115823e15577.png">
<img width="1074" alt="Screen Shot 2021-04-12 at 2 52 38 PM" src="https://user-images.githubusercontent.com/79947732/114462384-33bc8e80-9ba0-11eb-9dd5-e9837e74a80f.png">
<img width="373" alt="Screen Shot 2021-04-12 at 2 53 42 PM" src="https://user-images.githubusercontent.com/79947732/114462389-35865200-9ba0-11eb-84d4-804d59e0f695.png">
<img width="278" alt="Screen Shot 2021-04-12 at 2 54 25 PM" src="https://user-images.githubusercontent.com/79947732/114462393-36b77f00-9ba0-11eb-859f-e3ba933e7fa9.png">



Link to deployed application:

https://bgerner.github.io/code-quiz/
