let userScore = 1;
let compScore = 1;

let choices = document.querySelectorAll(".box");
let msg = document.querySelector(".msg");
let user_Score = document.querySelector("#user-Score");
let comp_Score = document.querySelector("#comp-Score");

const drawGame = () =>{
    console.log("game was draw");
    msg.innerText = "Game was draw. Play again!";
    msg.style.backgroundColor = "#568ea6";
}

const showWinner = (userWin) =>{
    if(userWin){
        console.log("YOU WIN THE GAME");
        user_Score.innerText = userScore++;
        msg.innerText = "You win!"
        msg.style.backgroundColor = "pink";
    }else{
         comp_Score.innerText = compScore++;
        msg.innerText = "You lose!"
        msg.style.backgroundColor = "plum";
    }
}

const getCompChoice = () =>{
    const options = ["paper", "rock","scissor"];
    const randomId = Math.floor(Math.random() *3);
    console.log(randomId);
    return options[randomId];
}

const playGame = (userChoice) =>{
    console.log("user choice is ", userChoice);
    const compChoice = getCompChoice();
    console.log("comp choice is ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
        }
        
    }  
choices.forEach((box) =>{
    console.log(box);
    box.addEventListener("click", () =>{
        const userChoice =  box.getAttribute("Id");
        console.log("choices are clicked ", userChoice);
        playGame(userChoice);
    })

});