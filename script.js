


let dispRules=function(){

    document.getElementById("rules-model").style.display = "flex";
}
let hideRules=function(){
    document.getElementById("rules-model").style.display = "none";
}

let show=function(){

const playingarea=document.querySelector("#root-playingarea");
const result=document.querySelector("#root-result");
    
    playingarea.style.display="none";
    result.style.display="flex";

    document.getElementById("you-picked").className= document.getElementById("rock").className;
    document.getElementById("you-picked-image").src="rock.png";
    document.getElementById("computer-picked").className= document.getElementById("paper").className;
    document.getElementById("computer-picked-image").src="paper.png";


}