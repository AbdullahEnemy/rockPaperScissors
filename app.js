let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const genComputerChoice=()=>{
    const option=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx];
}
const drawGame=()=>{console.log("game was draw")};
const showWiner=(userWin)=>
{
    if(userWin)
    {
        userScore++;
        
    }
    else{
        compScore++;
    }
}
const fight=(userChoice,compChoice)=>
{
    let userWin=true;
    if(userChoice===compChoice)
    {
        drawGame();
    }
    else if(userChoice==="paper")
    {
        if(compChoice==="scissors"){
            userWin=false
        }
        if(compChoice==="rock"){
            userWin=true;
        }
    }
    else if(userChoice==="rock")
    {
        if(compChoice==="scissors"){
            userWin=true;
        }
        if(compChoice==="paper"){
            userWin=false
        }
    }
    else if(userChoice==="scissors")
    {
        if(compChoice==="rock"){
            userWin=false
        }
        if(compChoice==="paper"){
            userWin=true;
        }
    }
    showWiner(userWin);
    
}
const updateScore=()=>{
    let userS=document.getElementById("user");
    let compS=document.getElementById("comp");
    userS.innerText=userScore;
    compS.innerText=compScore;
}
const playGame=(userChoice)=>{
    console.log("user choice = ",userChoice);
    const compChoice=genComputerChoice();
    console.log("Comnp choice = ",compChoice);
    fight(userChoice,compChoice);
    updateScore();
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})
