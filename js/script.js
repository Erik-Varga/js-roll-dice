// DOM Elements
const diceContainer = document.querySelector('.dice-container');
let diceNumber = document.querySelector('.dice-number');
const diceValue = document.querySelector('.dice-value');
const btnRollDice = document.querySelector('.btn-roll-dice');

let numContainer = document.getElementById('num');

let dice_side = document.getElementById('dice-side');
let side_1 = document.getElementById('side1');
let side_2 = document.getElementById('side2');
let side_3 = document.getElementById('side3');
let side_4 = document.getElementById('side4');
let side_5 = document.getElementById('side5');
let side_6 = document.getElementById('side6');

let btnInc = document.querySelector('.inc');
let btnDec = document.querySelector('.dec');
let btnReset = document.querySelector('.reset');


// Global Variables
let dice = 2;
let number_of_dice = dice;
let rolled_dice_value = 0;

let rolled_1 = false;
let rolled_2 = false;
let rolled_3 = false;
let rolled_4 = false;
let rolled_5 = false;
let rolled_6 = false;

side_1.innerHTML = rolled_1;
side_2.innerHTML = rolled_2;
side_3.innerHTML = rolled_3;
side_4.innerHTML = rolled_4;
side_5.innerHTML = rolled_5;
side_6.innerHTML = rolled_6;

// Functions
function createDice(number) {
    const dotPositionMatrix = {
        1: [
            [50, 50]
        ],
        
        2: [
            [20, 20],
            [80, 80]
        ],

        3: [
            [20, 20],
            [50, 50],
            [80, 80]
        ],

        4: [
            [20, 20],
            [20, 80],
            [80, 20],
            [80, 80]
        ],

        5: [
            [20, 20],
            [20, 80],
            [50, 50],
            [80, 20],
            [80, 80]
        ],

        6: [
            [20, 20],
            [20, 80],
            [50, 20],
            [50, 80],
            [80, 20],
            [80, 80]
        ]
    };

    const dice = document.createElement('div');
    dice.classList.add('dice');

    for (const dotPosition of dotPositionMatrix[number]) {
        const dot = document.createElement('div');

        dot.classList.add('dice-dot');
        dot.style.setProperty('--top', dotPosition[0] + '%');
        dot.style.setProperty('--left', dotPosition[1] + '%');
        dice.appendChild(dot);
    }

    return dice;

}

function randomizeDice(diceContainer, numberOfDice) {
    diceContainer.innerHTML = '';
    diceValue.innerHTML = '';
    diceNumber = 0;
    rolled_dice_value = 0;

    side_1.innerHTML = `<i class="fa-solid fa-x"></i>`;
    side_2.innerHTML = `<i class="fa-solid fa-x"></i>`;
    side_3.innerHTML = `<i class="fa-solid fa-x"></i>`;
    side_4.innerHTML = `<i class="fa-solid fa-x"></i>`;
    side_5.innerHTML = `<i class="fa-solid fa-x"></i>`;
    side_6.innerHTML = `<i class="fa-solid fa-x"></i>`;

    for (let i = 0; i < numberOfDice; i++) {
        const random = Math.floor((Math.random() * 6) + 1);
        const dice = createDice(random);
        diceContainer.appendChild(dice);

        if (random === 1) {
            side_1.innerHTML = `<i class="fa-solid fa-check"></i>`;
        };
        
        if (random === 2) {
            side_2.innerHTML = `<i class="fa-solid fa-check"></i>`;
        };
        
        if (random === 3) {
            side_3.innerHTML = `<i class="fa-solid fa-check"></i>`;
        };
        
        if (random === 4) {
            side_4.innerHTML = `<i class="fa-solid fa-check"></i>`;
        };
        
        if (random === 5) {
            side_5.innerHTML = `<i class="fa-solid fa-check"></i>`;
        };
        
        if (random === 6) {
            side_6.innerHTML = `<i class="fa-solid fa-check"></i>`;
        };
        
        rolled_dice_value += parseInt(random);
    }
    diceValue.innerHTML = rolled_dice_value;
    diceNumber.innerHTML = number_of_dice;
    numContainer.innerHTML = number_of_dice;
    
}


// Events
btnRollDice.addEventListener('click', () => {
    
    const interval = setInterval(() => {
        randomizeDice(diceContainer, number_of_dice);        
    }, 50);
    
    setTimeout(() => clearInterval(interval), 1000);
});

btnInc.addEventListener('click', () => {
    number_of_dice++;
    numContainer.textContent = number_of_dice;
});

btnDec.addEventListener('click', () => {
    number_of_dice--;
    if (number_of_dice < 0) {
        number_of_dice = Math.max(0);
    }
    else {
        number_of_dice;
    }
    numContainer.textContent = number_of_dice;
});

btnReset.addEventListener('click', () => {
    number_of_dice = dice;
    numContainer.textContent = number_of_dice;
});


// Onload
randomizeDice(diceContainer, number_of_dice);
