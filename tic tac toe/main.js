let btns = document.querySelectorAll('.box');
let won = false;
let indexArray = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

function enterUserSymbol(btn) {
    symbolEnteredByUser = false;
    if (btn.innerText == "") {
        btn.innerText = "X";
        btn.style.background = "Green";
        symbolEnteredByUser = true;
    }
      
}

function enterComputerSymbol() {
    let btn = Math.floor(Math.random()*9)
    console.log(btn);
    if (btns[btn].innerText == "") {
        btns[btn].innerText = "O"
        btns[btn].style.background = "RED"
    }else{
        enterComputerSymbol()
}
}
//call this function when any button clicked 
function enterSymbols(btn) {
    enterUserSymbol(btn)
    checkForWinner()
    checkIfPlacesAvailable()
    checkIfTie()
    if (placesAvailable) {
        if (symbolEnteredByUser) {
            enterComputerSymbol()
            checkForWinner()
            checkIfPlacesAvailable()
        }}
    }
    

function checkIfPlacesAvailable() {
    placesAvailable = false;
    for(i=0;i < btns.length; i++){
        if (btns[i].innerText == '') {
            placesAvailable = true;
            console.log('places Available');
            break;
        }  
    };
}

function checkForIndexes(a, b , c) {
    if (btns[a].innerText != '') {
        console.log('a is not empty');
        if (btns[a].innerText == btns[b].innerText && btns[b].innerText == btns[c].innerText) {
            console.log('all the indexes are same in value');
            won = true;
            if (btns[a].innerText == "X") {
                console.log('got x as value');
                userWon = true;
                console.log('user won');
                popUp("user Won", "Green")
            }else{
                computerWon = true;
                console.log("computer Won");
                popUp("computer Won", "red")
            }
        }
    }}


function checkForWinner() {
    indexArray.forEach(element => {
        checkForIndexes(element[0], element[1], element[2])
    });
}

function checkIfTie() {
    if(!placesAvailable){
        if (!won) {
            popUp("It's a draw", 'blue')
        }
    }
}

function popUp(message, color) {
    popup = document.querySelector('.popup');
    popup.style.display = 'block';
    popup.innerText = `${message}`;
    popup.style.background = color;
    container = document.querySelector('.container')
    container.style.display = 'none';
    document.querySelector('#redo').style.display = 'block';
}
