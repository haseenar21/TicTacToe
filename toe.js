let tac=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let newGame=document.querySelector("#newgame");
let container=document.querySelector(".msgcon");
let para=document.querySelector("#msg");

let turnO = true; //player x,player O
let count=0;
const win = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

tac.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        count++;
        console.log(count);
        box.disabled=true;
        if(count === 9){
            draw();
        }
        checkWinner();
    });
});

const draw=()=>{
    para.innerText =`Game is Draw`;
    container.classList.remove("hide");
}

const disableboxes=()=>{
    for(let box of tac){
        box.disabled=true;
    }
}

const enableboxes=()=>{
    for(let box of tac){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    para.innerText =`Congratulations, Winner is ${winner}`;
    container.classList.remove("hide");
    disableboxes();
 };


const checkWinner=()=>{
    for (pattern of win){
        let pos1Val =tac[pattern[0]].innerText;
        let pos2Val =tac[pattern[1]].innerText;
        let pos3Val =tac[pattern[2]].innerText;

        if(pos1Val!= ""&&pos2Val!=""&&pos3Val!="" ){
            if(pos1Val===pos2Val&&pos2Val===pos3Val){
                showWinner(pos1Val);
                
            }
        }
    }
};

const resetGame=()=>{
    turnO = true;
    enableboxes();
    container.classList.add("hide");
}

newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);