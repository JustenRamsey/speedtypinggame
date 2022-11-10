window.addEventListener('load', init);

// Globals 

// Available Levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 2
};

// To change level
const currentLevel = levels.easy;
// levels = easyButton;
// const currentLevel = changeLevel;
// const easy = levels.easy;
// const medium = levels.medium;
// const hard = levels.hard;


let time = levels.easy;
let score = 0;
let isPlaying;

// DOM Elements 
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
// Make query selector for each level button 
var easyButton = document.querySelector('#easy-btn');
var mediumButton = document.querySelector('#medium-btn');
var hardButton = document.querySelector('#hard-btn');
var hiscoreDisplay = document.querySelector('#highscore');

//Event listener buttons 



// const levelChange = document.querySelector('#easy', '#medium', '#hard');

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition',
    'champion',
    'ghost',
    'fierce'
];

// Initialize Game
function init() {
    // Show number of seconds in UI
    seconds.innerHTML = levels.easy;
    // Load word from array
    showWord(words);
    // Start matching on word input
    wordInput.addEventListener('input', startMatch);
    // Call countdown every second
    setInterval(countdown, 1000);
    // Check game status 
    setInterval(checkStatus, 50);
}

// Start match 
function startMatch() {
    if (matchWords()) {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
        hiscoreDisplay.innerHTML = score;
    }
    // If score is -1 display 0
    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }



}


// Add to High Score
// function highScore() {
//     if (!isPlaying && time === 0) {
//         hiscoreDisplay = score;
//     }
// }


// Match currentWord to wordInput
function matchWords() {
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!!!';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}




//Pick & show random word
function showWord(words) {
    // Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    // Output random Word
    currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
    // Make sure time is not run out
    if (time > 0) {
        // Decrement 
        time--;
    } else if (time === 0) {
        // Game is over
        isPlaying = false;
    }

    // Show time
    timeDisplay.innerHTML = time;

}

// Check game status
function checkStatus() {
    if (!isPlaying && time === 0) {
        message.innerHTML = 'Game Over!!!';
        score = -1;
} 

    } 



// Level change buttons 
// function changeLevel(levels) {
//     if (levels = easy) {
//         time === levels.easy;
//     } else if (levels = medium) {
//         time === levels.medium; {
//         } if (levels = hard) {
//             time === levels.hard;
//         }
//     }

// } 

//  Change level 
// function changeLevel(levels){
//     if (levels = easyButton)
// console.log('btn connected');
// }

// Change Level 
function changeLevel(level) {
    // if (levels == easyButton) {
    //     time == levels + '.easy';
    // } 
    // alert('inside change level function');
//    time = level
   if (level === "easy") {
    time = levels.easy; 
   } if (level === "medium") {
    time = levels.medium;
   } if (level === "hard") {
    time = levels.hard;
   }
    // alert(levels.hard)
}


// easyButton.addEventListener('click', changeLevel);

