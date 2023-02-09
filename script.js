//TO DO: 1) increment wins lsoses and ties. do so in win variable, lose variable, and in comparison algorithm respectivly
// 2) use window alert to display incremented values
// 3) have game restart in win variable, lose variable and in  comparison algorithm. find way to store 
//"var humanChoice = prompt("Input R for rock, P for paper, or S for sissors");" as variable.


// Can input R, P or S to eignif choice of rock paper or scissors

var wins = 0;
var losses = 0;
var ties = 0;

var humanChoice = prompt("Input R for rock, P for paper, or S for sissors");

function dialoguebox(){
    var humanChoice = prompt("Input R for rock, P for paper, or S for sissors");
}


var win = function(){
    wins = wins+1;
    console.log(wins);

    if (window.confirm ("You win! Congradulations! Play again?")){
        dialoguebox();
    }

};
var lose = function(){
    losses = losses +1;
    window.confirm ("You lose! Play again?");
    console.log(losses);
    return dialoguebox;
};


// Computer chooses rock paper or sissors
// Psudo=Random Number Generator
function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
};

// Generate random number between 1-3
var computerChoice = random (1,3);
// Convert random number into computer selection
if (computerChoice === 1){
    computerChoice = "R";
}else if (computerChoice === 2){
    computerChoice = "P";
}
else {
    computerChoice = "S";
};


// compare computer choice to user using if statements
if (humanChoice === computerChoice){
    var ties = ties + 1
    window.confirm("Tie! Play again?")
    console.log(ties)
    dialoguebox();
} else if (humanChoice === "R"){
         if(computerChoice = "P"){
                lose();
          }else {
                win();
         }
        }else if (humanChoice === "P"){
            if(computerChoice = "S"){
                lose();
            }else 
                win();
        }else if (humanChoice === "S"){
            if(computerChoice = "R"){
                lose();
            }else 
                win();
        }
        


//Keep Track of score, increment a seperate variable for each result

// use window.alert() to Display Score
