'use strict';

let secretNumber = Math.round(Math.random() * 20);
let score = 20;
let highscore = 0;

console.log(secretNumber);

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const pogodak = parseInt(document.querySelector('.guess').value);
    console.log(pogodak);
    if (!pogodak) {
        displayMessage('Insert some number');
    }
    else if (pogodak == secretNumber) {
        displayMessage('You got it');
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
    else if (pogodak != secretNumber) {
        if (score > 1) {
            if (secretNumber > pogodak) {
                displayMessage('Too low');
            } else {
                displayMessage('Too  hihg');
            }
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            displayMessage('You lost the game');
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    let secretNumber = Math.round(Math.random() * 20);
    let score = 20;

    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
})