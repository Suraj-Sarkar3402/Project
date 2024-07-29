let userScore=0;
let computerScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const computerScorePara=document.querySelector("#computer-score");

const compChoice=()=>{
    let options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    msg.innerText="game draw!!";
    msg.style.backgroundColor="rgb(128, 193, 54)";
}

const showWinner=(userWin,userChoice,computerChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You won the game.You choosed ${userChoice} and computer choosed ${computerChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        computerScore++;
        computerScorePara.innerText=computerScore;
        msg.innerText=`You lose the game!!.You choosed ${userChoice} and computer choosed ${computerChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    const computerChoice=compChoice();
    if(userChoice===computerChoice){
         drawGame();   
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=computerChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=computerChoice==="scissor"?false:true;
        }
        else{
            userWin=computerChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,computerChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});