// Objective: Create a two-player Rock Paper Scissors game in JavaScript, with one player being the user and the other being the computer.
 
// Requirements:
 
// Functionality:
 
// User selects their choice (rock, paper, or scissors) through buttons or user input.
// Computer randomly chooses its move (0-0.33 rock, 0.34-0.66 paper, 0.67-1 scissors).
// Winner is determined based on standard rock paper scissors rules.
// Display the result (win, lose, tie) and user/computer choices on the screen.
// Consider adding scorekeeping and a winner declaration for multiple rounds (optional).
// Code Structure:
 
// Use at least one function declaration.
// Use at least one function expression.
// Use at least one arrow function.
// Use at least one anonymous function.
// Use a ternary operator for a concise outcome display 
// Utilize default parameters in a function
 
// Cheat Mode:
 
// Design a "cheat mode" feature that alters the computer's choice in some way (optional).
// Come up with one specific implementation of cheat mode (e.g., computer always chooses scissors).

let humanScore = 0
let computerScore = 0


//asks for the human input
const { timeEnd } = require('console');

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

//generates the computers move
function comps(){
    let choice = Math.random

    if(choice < 0.34){
        return "rock"
    }else if(choice < 0.67){
        return "paper"
    }else {
        return "scissors"
    }
}

//choosing the winner
function choseWinner(userinput,comps){
    if(userinput == comps){
        return "tie"
    }else if(userinput == "rock" && comps == "scissors" || userinput == "scissors" && comps == "paper" || userinput == "paper" && comps == "rock"){
        humanScore++
        console.log("You win")
    }else if(userinput == "paper" && comps == "scissors"){
        computerScore++
        console.log("The computer wins")
    } 
}



const roundOne= (userinput) =>{
    let compsMove = comps()
    let resultFinal = choseWinner(userinput,comps)
    console.log(`You chose: ${userinput}`)
    console.log(`Computer chose: ${compsMove}`)

    //display results
console.log(`Your score is: ${humanScore} and the computer's score is: ${computerScore}`)

}


rl.question("Choose rock, paper, or scissors: ", (userinput) => {
    roundOne(userinput.toLowerCase());
    rl.close();
});
