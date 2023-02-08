// Can input R, P or S to eignif choice of rock paper or scissors
// var input = prompt("Input R for rock, P for paper, or S for sizzors");

// Computer chooses rock paper or sissors
// Psudo=Random Number Generator
function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
};

// Generate random number between 1-3
random (1,3);
console.log(random (1,3))

// Convert random number into computer choice
var computerChoice = function(choice) {
    if (random === 1){
        choice = "R";
        return choice;
    }else if (random === 2){
        choice = "P";
        return choice;
    }
    else {
        choice = "S";
        return computerChoice.choice;
    }
    
};



// compare computer choice to user using if statements
// if (input === computerChoice){
//     window.alert("Tie! Play again?")
// } else if (input === "R"){
//         if(computerChoice = "P"){

//          }else {

//          }
    
//         }else if (input === "P"){

//         }


// use window.alert() to ask if user wants to play again


// console.log(input)
console.log(computerChoice)