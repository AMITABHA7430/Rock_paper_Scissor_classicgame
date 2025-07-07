let userscore1 = 0;
let compscore1 = 0;
const choices=document.querySelectorAll(".choice");
const msg= document.querySelector("#msg")


const userscore=document.querySelector("#userscore");
const compscore=document.querySelector("#computerscore")


const gencompchoice=()=>{
    const opt=["rock","paper","scissor"];
   const randomindx = Math.floor(Math.random()*3)
   return opt[randomindx];
}

const showwinner=(userwin,userchoice,compChoice)=>{
    if(userwin){
        userscore1++;
        userscore.innerText=userscore1;
        console.log("you win");
        msg.innerText=`you win!${userchoice} beat ${compChoice}`;
        msg.style.backgroundColor="green"

    }
    else{
        compscore1++;
        compscore.innerText=compscore1;
        console.log("you loss")
        msg.innerText=`you loss ${compChoice} beats ${userchoice}`
        msg.style.backgroundColor="red"
    }
}
 const drawgame=()=>{
    console.log("game is draw")
    msg.innerText="game is draw"
    msg.style.backgroundColor="blue"
 }
const playgame=(userchoice)=>{
    console.log("user choice =" ,userchoice);
    const compChoice = gencompchoice();
     console.log("computer choice is =",compChoice)
    if(userchoice===compChoice){
        drawgame();
    }
    else{
    let userwin=true;
    if(userchoice==="rock"){
        userwin = compChoice==="paper" ? false: true;


    }
    else if(userchoice=="paper"){
        userwin = compChoice==="scissor" ? false: true;
    }
    else{
        userwin = compChoice==="rock" ? false: true;
    }
  showwinner(userwin,userchoice,compChoice); }
    


}


choices.forEach((choice)=> {
    choice.addEventListener("click",()=>{
     const userchoice=choice.getAttribute("id");
playgame(userchoice);
    })
})