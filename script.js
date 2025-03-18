let userScore =0;
let compScore=0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const drawGame =() =>{
    console.log("The game was draw");
    msg.innerText="Game was draw. Play again";
    msg.style.backgroundColor = "rgb(7, 7, 76)" ;
}

const genCompChoice = () => {
    //comp will generate from rock, paper & scissors any choice randonly
    const options =['rock', 'paper', 'scissors'];
    const randIdx = Math.floor(Math.random()*3);
    //Thus our comp choice will be the randon idx generated inside options array
    return options[randIdx];

}

const showWinner= (userWin,userChoice,compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        
        msg.innerText=`You Win !!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
       
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
       
        msg.innerText=`You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

}

const playGame=(userChoice) => {
    console.log("User choice is ",userChoice); // User choice
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("Comp choice is ",compChoice);

    // Now the conditions that may occur after both player choices
    if (userChoice === compChoice){
        // Draw condition
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock"){
            //comp will either choose  scissors, paper
            userWin =compChoice === "paper" ? false :true;
        } else if (userChoice === "paper") {
            // comp will either choose rock, or scissors
            userWin = compChoice === "scissors"? false :true; 
        } else {
            //rock, paper
            userWin =compChoice === "rock"? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}

choices.forEach((choice) => {
  
    const userChoice = choice.getAttribute("id");
    choice.addEventListener('click',() => {
    playGame(userChoice);

    })
}) 