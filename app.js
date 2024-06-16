let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score")

const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText="GAME WAS DRAW.PLAY AGAIN";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin) =>{
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore
        msg.innerText="YOU WIN";
        msg.style.backgroundColor = "Green";
    }else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText="YOU LOSE";
        msg.style.backgroundColor = "Red";
        }
}


const playGame = (userChoice) =>{
    // Genrate Computer Choice;
    const compChoice =genCompChoice();
    if (userChoice === compChoice) {
        //draw
        drawGame();
    }else{
        let userWin =true;
        if(userChoice ==="rock") {
            //scissors ,paper
            userWin = compChoice ==="paper" ? false : true;
        }else if (userChoice === "paper") {
            //rock,scissors
            userWin = compChoice ==="rock" ? true : false;
        }else if (userChoice === "scissors") {
            //rock , papers
            userWin = compChoice ==="rock" ? false : true;
        }
        showWinner(userWin);
    }
};


choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});