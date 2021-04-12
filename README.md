# Code Quiz

This repo contains code for a 5 question quiz (though more can be added to the questionsArray without effecting the functionality of the application). 
There are 4 different pages with class names front-page, questions, enter-initials, and display-highscores which do what their class names indicate.
There are also 4 buttons. 
One, 'View Scores', takes the user straight to the display-highscores page from either the front-page page or the questions page by calling the showScores function.
The button aptly labelled 'Start Quiz' calls the startQuiz function which also calls the startTimer and nextQuestion functions.
Once all of the questions have been answered or the timer has ended and the enter-initials page has been reached, there is a 'Submit' button to trigger the saveScore function once a non-blank response has been entered for the initials. 
Once the showScores function has been called (following a click of the 'View Scores' button or running of saveScore() following a valid initials response), the refresh button will appear which, you guessed it, refreshes the page so the user can take the quiz again.

Screenshots:


Link to deployed application:

