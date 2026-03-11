let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let newBtn=document.querySelector("#newbtn");
let btns=document.querySelectorAll(".btn");
let reset=document.querySelector(".reset-btn");

let turn=true;
let count=0;

btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if (turn==true){
            btn.innerText="X"
            btn.style.backgroundColor="#904C77"
            btn.style.color="white"
            turn=false
        }else{
            btn.innerText="O"
            btn.style.color="black";
            turn=true;
        }
        btn.disabled=true;
        count++

        if (count===9 && checkWinning()!==true){
            checkDraw();
        }else{
            checkWinning()
            
        }
    })
})

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]
const showWinning=(pos1val)=>{
    msg.innerText=`winner is ${pos1val}`
    msgContainer.classList.remove("hide");
    checkDisable()
}

const checkDraw=()=>{
    msg.innerText=`Game Draw`
    msgContainer.classList.remove("hide");

}
const checkWinning=()=>{
    for (let patterns of winPatterns){
        pos1val=btns[patterns[0]].innerText
        pos2val=btns[patterns[1]].innerText
        pos3val=btns[patterns[2]].innerText

        if (pos1val!="" && pos2val!="" && pos3val!=""){
            if (pos1val===pos2val && pos2val===pos3val){
                showWinning(pos1val)
                return true
            }
        }
    }
}

const checkDisable=()=>{
    for (let btn of btns){
        btn.disabled=true;
    }
}

const enable=()=>{
    for (let btn of btns){
        btn.disabled=false;
        btn.innerText="";
        btn.style.backgroundColor="#DB3069";
    }
}

const resetGame=()=>{
    turn=true;
    count=0;
    enable();
    msgContainer.classList.add("hide");

}


newBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);









