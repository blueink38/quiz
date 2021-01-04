//DOM
const startButton = document.getElementById('start-button')


// set time interval
const time = document.querySelector('p');
let timeSecond = 65;

time.innerHTML = (timeSecond);

const countDown = setInterval (()=> {
    timeSecond--;
    time.innerHTML = (timeSecond);
    if (timeSecond<=0 || timeSecond<1){
        clearInterval(countDown);
    }
}, 1000)

// start quiz
function startQuiz() {
   currentQuestion = 0
}


// questions
const questions = [

    {
        question: 'Commonly used data types do not include:',
        options: ["strings", "booleans", "alerts", "numbers"],
        answer: "onclick",
          },

    {
    question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    options: ["JavaScript", "Terminal/Bash", "For Loops", "console.log"],
    answer: "onclick",
        },

    {
    question: 'Arrays in JavaScript can be used to store ____ .',
    options: ["numbers", "strings", "booleans", "all of the above"],
    answer: "onclick",
        },


    {
    question: 'The best place to learn to code is:',
    options: ["internet", "colleagues", "bootcamps", "all of the above"],
    answer: "onclick",
        },
    ]


// set score
function setScore() {
}

// gets score 
function getScore() {

}

// enter initials
function enterInitials() {

}

// get initials
function getInitials() {

}

// get score
function getScore() {

}

// restart quiz
function restartQuiz() {
    
}