let userScore = 0;
let compScore = 0;

//accessing each choice
const choices = document.querySelectorAll(".choice");
const msg =  document.querySelector(".msg");

const user = document.querySelector("#User-Score");
const comp = document.querySelector("#Comp-Score");

//generates computer choice
const generateCompChoice=()=>{
    //storing the options in an array
    const options=["rock","paper","scissors"];
    //Math class has a method called random.....Math.random() generated any value between 0 and 1.
    //Want a number between 0 to 9, Math.random()*10
    //Want to remove the later decmal values --> Math.floor(Math.rendom()*10);
    //taking these ramdom numbers as index
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];

};

//draw game
const drawGame = ()=>{
    console.log("Game was draw");

}

//user won
const youWon = (compChoice)=>{
    console.log("You Won. Computer chose ",compChoice);
    msg.innerText=`You Win. Computer chose ${compChoice}`;
    msg.style.background = "green";
    userScore+=1;
    user.innerText=userScore;
    
}
//computer
const compWon = (compChoice)=>{
    console.log("You lose. Computer chose ",compChoice);
    msg.innerText = `You Lose. Computer chose ${compChoice}`;
    msg.style.background = "red";
    compScore+=1;
    comp.innerText=compScore;
}

const playgame = (userChoice)=>{
    console.log("userChoice = ",userChoice);
    const compChoice=generateCompChoice();
    console.log("compChoice = ",compChoice);
    if(userChoice==compChoice){
        //draw
        drawGame();
    }
    if(userChoice=="rock" && compChoice=="paper"){
        compWon(compChoice);
    }
    if(userChoice=="rock" && compChoice=="scissors"){
        youWon(compChoice);
    }
    if(userChoice=="paper" && compChoice=="rock"){
        youWon(compChoice);
    }
    if(userChoice=="paper" && compChoice=="scissors"){
        compWon(compChoice);
    }
    if(userChoice=="scissors" && compChoice=="rock"){
        compWon(compChoice);
    }
    if(userChoice=="scissors" && compChoice=="paper"){
        compWon(compChoice);
    }

};
//modular way of programming --> making several functions, each of which performs a single work.


choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        //accessing id
        const userChoice = choice.getAttribute("id");
        //console.log("choice was clicked",userChoice);
        playgame(userChoice);
    });
});