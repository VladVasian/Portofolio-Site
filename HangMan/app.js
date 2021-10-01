const startGameButton = document.getElementById('startGame');
const letters = document.querySelectorAll('[word-cell]');
const word = document.querySelector('.word');
const omulet = document.querySelectorAll('.el');
const result = document.querySelector('.winning-message')
const restartButton = document.getElementById('restartButton');
const keyboard = document.querySelector('.keyboard');
const restart = document.getElementById('restart');
//Start Game
startGameButton.addEventListener('click', startGame);
const keyboardLetters = document.querySelectorAll('[alphLetters]');
let charCuvantulIntrodus;
let numberOfMembers = 0;
let winCounter = 0;

//START GAME & ENTER NEW WORD

function startGame(){
    let cuvantulIntrodus = window.prompt("Introduceti un cuvant:");
    charCuvantulIntrodus = cuvantulIntrodus.split('');
    let i = 0;

    //Remove the present letters
    removeTheLetters();

    //Add the new ones
    charCuvantulIntrodus.forEach((e) => {
        let words = `<div class="words"><p word-cells value="${e}"></p></div>`
        word.insertAdjacentHTML('beforeend',words);

    })

    //make the button readonly
    startGameButton.classList.add('disabled');

        // GUESS THE WORD
    keyboardLetters.forEach((btn) => { 
        btn.addEventListener("click", compareLetter);
        btn.myParam = btn.value;
    }); 


    omulet.forEach( (e) => {
        e.classList.add('display-none');
    })

    return charCuvantulIntrodus;

}

function removeTheLetters() {
    letters.forEach ( (e) => {
        word.removeChild(e.parentElement);
    })
}



function compareLetter(value) {
    let pressedKey = value.currentTarget.myParam;
    let counter = 0;


    for (let i = 0; i< charCuvantulIntrodus.length; i++) {    
        if (charCuvantulIntrodus[i].toUpperCase() == pressedKey){
            word.childNodes[i + 8].firstChild.innerText = pressedKey;  
            value.currentTarget.classList.add('disabled');
            winCounter++;
            break;  
        }  else {
            counter++;
        }  
    }

    if (counter == charCuvantulIntrodus.length) {
        omulet[numberOfMembers].classList.remove('display-none');
        numberOfMembers++;
        //Animation
        animation();


        
    }

    if (numberOfMembers == 8) {
        result.firstChild.innerText = "You Lost";
        result.classList.add('show');
    }

    if (winCounter == charCuvantulIntrodus.length) {
        result.firstChild.innerText = "You Won";
        result.classList.add('show'); 
    }
}

//Restart
restartButton.addEventListener("click", () => {
    location.reload();
})

restart.addEventListener("click", () => {
    location.reload();
})


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
async function animation() {
    keyboard.classList.add('animation');
    await sleep(300);
    keyboard.classList.remove('animation');
}
  