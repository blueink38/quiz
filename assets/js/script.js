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

}

// select answer
function selectAnswer() {

}

// questions
const questions = [
    {
        question: 'first question here',
        answers: [
            { text: 'a: option a', correct: true },
            { text: 'b: option b', correct: false },
            { text: 'c: option c', correct: false },
            { text: 'd: option d', correct: false }

        ]
    }
]