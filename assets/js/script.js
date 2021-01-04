//DOM
const startButton = document.getElementById('start-button')
const nextButton = document.getElementById('next-button')

const questionBoxEl = document.getElementById('question-box')
let currentQuestion
const questionEl = document.getElementById('question')
const answerButtonsEl = document.getElementById('answer-buttons')

startButton.addEventListener('click', startQuiz)

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
   startButton.classList.add('hide')
   currentQuestion = 0
   questionBoxEl.classList.remove('hide')
   console.log('added question')
   promptNextQuestion() 
}

// prompt next question
function promptNextQuestion() {
    showQuestion([currentQuestion])
}

// show question
function showQuestion(question) {
    resetState()
    questionEl.innerText = question.question
    question.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('button')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsEl.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild)
    }
}

// select answer
function selectAnswer() {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    answerButtonsEl.children
    Array.from(answerButtonsEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
}

function setStatusClass(element, correct) {
    clearStatusClass (element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

// questions
const questions = [
    {
        question: 'Timed Quiz  Try to answer the following code-related question in the given time.  Keep in mind incorrect responses will penalize your score/time by ten seconds.',
        answer: [
            {text: 'start', correct: true}
        ]
    },

    {
        question: 'Commonly used data types do not include:',
        answer: [
            { text: 'a: strings', correct: false },
            { text: 'b: booleans', correct: false },
            { text: 'c: alerts', correct: true },
            { text: 'd: numbers', correct: false }
        ]
    },

    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answer: [
            { text: 'JavaScript', correct: false },
            { text: 'Terminal/Bash', correct: false },
            { text: 'For Loops', correct: false },
            { text: 'console.log', correct: true },
        ]
    },

    {
        question: 'The conditional if and if/else statement is enclosed with ____ .',
        answer: [
            { text: 'quotes', correct: false },
            { text: 'curly brakets', correct: true },
            { text: 'parentheses', correct: false },
            { text: 'square brakets', correct: false },
        ]
    },

    {
        question: 'Arrays in JavaScript can be used to store ____ .',
        answer: [
            { text: 'numbers', correct: false },
            { text: 'strings', correct: false },
            { text: 'booleans', correct: false },
            { text: 'all of the above', correct: true },
        ]
    },

    {
        question: 'The best place to learn to code is:',
        answer: [
            { text: 'internet', correct: false },
            { text: 'colleagues', correct: false },
            { text: 'bootcamps', correct: false },
            { text: 'all of the above', correct: true },
        ]
    },

]