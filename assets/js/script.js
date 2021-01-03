// set time interval
const time = document.querySelector('h4');
let timeSecond = 65;

time.innerHTML = (timeSecond);

const countDown = setInterval (()=> {
    timeSecond--;
    time.innerHTML = (timeSecond);
    if (timeSecond<=0 || timeSecond<1){
        clearInterval(countDown);
    }
}, 1000)