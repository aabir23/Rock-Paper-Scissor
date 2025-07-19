let userScore = 0;
let compScore = 0;

const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const score1 = document.querySelector("#user-score");
const score2 = document.querySelector("#comp-score");

const genCompChoice = () => {
    const option = ["rock", "paper" , "scissor"]; 
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}

const drawGame = () => {
    console.log("Draw");
    msg.innerText = "Game is Draw";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        score1.innerText = userScore;
        msg.innerText = `You Win ${userChoice} beats ${compChoice}`;
    }
    else{
        compScore++;
        score2.innerText = compScore;
        msg.innerText = `Comp Win ${compChoice} beats ${userChoice}`;
    }
}

const playGame = (userChoice) => {
    //Generate a computer choice ->
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin,userChoice,compChoice);
    }
}

choice.forEach((choice) => {
    choice.addEventListener("click" , () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    });
});