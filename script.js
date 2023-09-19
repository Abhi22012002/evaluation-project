
sessionStorage.userScore;
sessionStorage.computerScore;



function display_result(){
    const playingarea = document.getElementById("root-playingarea");
    const result =  document.getElementById("root-result");
    playingarea.style.display="none";
    result.style.display="flex";
}


const computer = ["rock", "paper", "scissor"];

function computerPicked() {
  let picked = Math.floor(Math.random() * computer.length);
  return computer[picked];
}
   
let show_rock=function(){

     display_result();
    let computer_picked=computerPicked();
    document.getElementById("you-picked").className= document.getElementById("rock").className;
    document.getElementById("you-picked-image").src="rock.png";
    document.getElementById("computer-picked").className= document.getElementById(computer_picked).className;

    document.getElementById("computer-picked").innerHTML=document.getElementById(computer_picked).innerHTML
    
    if(computer_picked == 'paper')
    {  
       document.getElementById("win-status").innerHTML="Computer Won";
       if(sessionStorage.computerScore)
       {
       sessionStorage.computerScore=Number(sessionStorage.computerScore)+1;
       } else{
           sessionStorage.computerScore=1;
       }
       document.getElementById("compscore").innerHTML=sessionStorage.computerScore;
    }
     else if(computer_picked== 'scissor')
    {
       
        document.getElementById("win-status").innerHTML="You Won ";
        if(sessionStorage.userScore)
        {
        sessionStorage.userScore=Number(sessionStorage.userScore)+1;
        } else{
            sessionStorage.userScore=1;
        }
        document.getElementById("userscore").innerHTML=sessionStorage.userScore;
        document.getElementById("next-btn").style.display="block";
    }
    else{
        document.getElementById("win-status").innerHTML="Tie";
       

    }


}
let show_paper=function(){

    display_result();
   let computer_picked=computerPicked();
   document.getElementById("you-picked").className= document.getElementById("paper").className;
   document.getElementById("you-picked-image").src="paper.png";
   document.getElementById("computer-picked").className= document.getElementById(computer_picked).className;

   document.getElementById("computer-picked").innerHTML=document.getElementById(computer_picked).innerHTML
   
   if(computer_picked == 'scissor')
   {
      document.getElementById("win-status").innerHTML="Computer Won";
      if(sessionStorage.computerScore)
      {
      sessionStorage.computerScore=Number(sessionStorage.computerScore)+1;
      } else{
          sessionStorage.computerScore=1;
      }
      document.getElementById("compscore").innerHTML=sessionStorage.computerScore;
    
   } else if(computer_picked== 'rock')
   {
       document.getElementById("win-status").innerHTML="You Won ";
       if(sessionStorage.userScore)
        {
        sessionStorage.userScore=Number(sessionStorage.userScore)+1;
        } else{
            sessionStorage.userScore=1;
        }
       document.getElementById("userscore").innerHTML=sessionStorage.userScore;
       document.getElementById("next-btn").style.display="block";
   }
   else{
       document.getElementById("win-status").innerHTML="Tie";
    
   }


}
let show_scissor=function(){

    display_result();
   let computer_picked=computerPicked();
   document.getElementById("you-picked").className= document.getElementById("scissor").className;
   document.getElementById("you-picked-image").src="scissor.png";
   document.getElementById("computer-picked").className= document.getElementById(computer_picked).className;

   document.getElementById("computer-picked").innerHTML=document.getElementById(computer_picked).innerHTML
   
   if(computer_picked == 'paper')
   {
      document.getElementById("win-status").innerHTML="You Won";
      if(sessionStorage.userScore)
        {
        sessionStorage.userScore=Number(sessionStorage.userScore)+1;
        } else{
            sessionStorage.userScore=1;
        }
      document.getElementById("userscore").innerHTML=sessionStorage.userScore;
      document.getElementById("next-btn").style.display="block";
   } 
   else if(computer_picked== 'rock')
   {
       document.getElementById("win-status").innerHTML="Computer Won ";
       if(sessionStorage.computerScore)
       {
       sessionStorage.computerScore=Number(sessionStorage.computerScore)+1;
       } else{
           sessionStorage.computerScore=1;
       }
       document.getElementById("compscore").innerHTML=sessionStorage.computerScore;
   }
   else{
       document.getElementById("win-status").innerHTML="Tie";
      

   }


}


let playagain=function(){
    const playingarea=document.querySelector("#root-playingarea");
    const result=document.querySelector("#root-result");
    
    playingarea.style.display="flex";
    result.style.display="none";
    document.getElementById("next-btn").style.display="none";


    
}
let dispRules=function(){

    document.getElementById("rules-model").style.display = "flex";
}
let hideRules=function(){
    document.getElementById("rules-model").style.display = "none";
}
let hurray=function()
{
    document.getElementById("root").style.display="none";
    document.getElementById("rulesBt").style.display="none";
    document.getElementById("final-page").style.display="flex";
   
    sessionStorage.computerScore=0;
    sessionStorage.userScore=0;
}


