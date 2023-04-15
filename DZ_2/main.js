const box = document.querySelector('.box');

let positionX = 0;
let positionY = 0;

const move = () => {
    if (positionX < 450 && positionY === 0) {
        positionX++;
        box.style.left = `${positionX}px`;
        setTimeout(move, 1);
    } else if (positionX === 450 && positionY < 450) {
        positionY++;
        box.style.top = `${positionY}px`;
        setTimeout(move, 1);
    } else if (positionX > 0 && positionY === 450) {
        positionX--;
        box.style.left = `${positionX}px`;
        setTimeout(move, 1);
    } else if (positionX === 0 && positionY > 0) {
        positionY--;
        box.style.top = `${positionY}px`;
        setTimeout(move, 1);
    }

}
move();

let counterValue = 0;
let intervalid;

const counterElement = document.getElementById('counter')
const startBtn = document.getElementById('startBtn')
const stopBtn = document.getElementById('stopBtn')

const updateCounter = () => {
    counterValue++
    counterElement.textContent = counterValue;
}
const startCounter = () => {
    intervalid = setInterval(updateCounter, 900)
}
const stopCounter = () => {
    clearInterval(intervalid);
}

startBtn.addEventListener('click', startCounter)
stopBtn.addEventListener('click', stopCounter)