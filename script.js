
var player1="X", player2="O";
var flag = player1;
var p1Score=0;
var p2Score=0;


function change(){
   if(flag==player1){
       flag=player2;
   }else{
       flag=player1;
   }
}

function checker(){
    const box = document.getElementById("box").children;
    
    const pId1 = document.getElementById("score1");
    const pId2 = document.getElementById("score2");    
    
    // horizontal checking
    for(var x=0;x<9;x+=3){
        if (box[x].innerText!="" 
    && box[x].innerText==box[x+1].innerText && box[x].innerText==box[x+2].innerText){
    
    if(flag==player1){
        p1Score +=1;
        pId1.innerText = p1Score;
        alert("Player1 win");
        //alert(p1Score);
    }else{
        p2Score +=1;
        pId2.innerText = p2Score;
        alert("Player2 win");
    }     
    }
    }  
    
    //verticle checking
     for(var x=0;x<3;x++){
        if (box[x].innerText!="" 
    && box[x].innerText==box[x+3].innerText && box[x].innerText==box[x+6].innerText){
    
    if(flag==player1){
        p1Score +=1;
        pId1.innerText = p1Score;
        alert("Player1 win");
    }else{
        p2Score +=1;
        pId2.innerText = p2Score;
        alert("Player2 win");
    }     
    }
    }       

//diagonal top left to bottom right
if (box[0].innerText!="" 
    && box[0].innerText==box[4].innerText && box[0].innerText==box[8].innerText){
    
    if(flag==player1){
        p1Score +=1;
        pId1.innerText = p1Score;
        alert("Player1 win");
    }else{
        p2Score +=1;
        pId2.innerText = p2Score;
        alert("Player2 win");
    }     
    }  
    
// diagonal top right to bottom left
if (box[2].innerText!="" 
    && box[2].innerText==box[4].innerText && box[2].innerText==box[6].innerText){
    
    if(flag==player1){
        p1Score +=1;
        pId1.innerText = p1Score;
        alert("Player1 win");
    }else{
        p2Score +=1;
        pId2.innerText = p2Score;
        alert("Player2 win");
    }     
    }    

}

//clicked
function clicked(x){
x.addEventListener('click', () => {
    if(x.innerText == ""){
        x.innerText = flag;
        checker();
        change();
        
    }
});
}


onload = function start(){
const box = document.getElementById("box").children;
const btnReset = document.getElementById("btn-reset");


for(var x=0; x<9; x++){
    clicked(box[x]);
}

btnReset.onmousedown=()=>{
btnReset.classList.add("dark-blue");
   for(var x=0;x<9;x++){
        box[x].innerText = "";
        start(); 
    }
    //btnReset.style.backgroundColor = "red";
}

btnReset.onmouseup=()=>{
    btnReset.classList.remove("dark-blue");
}

}
