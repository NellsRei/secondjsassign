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



//asks for the human input
const readline = require('readline');
const user = readline.createInterface({
    input: process.stdin,   //for reading input from the user
    output: process.stdout, //outputting text
})

let humanScore = 0
let computerScore = 0

//generates the computers move
function comps(){
    let choice = Math.random()

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
    //for the scores
    // console.log(userinput)
    // console.log(comps)
    if(userinput == comps){
        console.log( "Both tied")
    }else if((userinput == "rock" && comps == "scissors") || (userinput == "scissors" && comps == "paper") || (userinput == "paper" && comps == "rock")){
        
        console.log("You win")
        console.log("The computer lost")
        return humanScore=humanScore+1

    }else{
        console.log("The computer wins")
        return computerScore=computerScore+1
    }
    
}
//playing round 1
const roundOne= (userinput) =>{
    let compsMove = comps()
    console.log(`You chose: ${userinput}`)
    console.log(`Computer chose: ${compsMove}`)

    //display results
    // let scores = choseWinner(userinput, compsMove)
    // humanScore = scores.humanScore
    // computerScore = scores.computerScore
    console.log(humanScore)
    console.log(computerScore)
   
    console.log(`Your score is: ${humanScore} and the computer's score is: ${computerScore}`)
}


user.question("Choose rock, paper, or scissors: ", (userinput) => {
       userinput = userinput.toLowerCase()
    if (userinput !== "rock" && userinput !== "paper" && userinput !== "scissors") {
        console.log("Enter a valid choice (rock, paper, or scissors).")
    } else {
        roundOne(userinput)
    }
    user.close()
    }    
    )

