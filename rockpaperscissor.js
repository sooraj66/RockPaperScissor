let userscore1 = 0;
let compscore = 0;

let choice1 = document.querySelectorAll(".choice");


function showwinner(userwin){
    if(userwin){
        let msg = document.getElementById("message");
        msg.innerHTML = "You Win!!!"
        userscore1 ++;
        document.getElementById("userscore").innerHTML = userscore1
        msg.style.backgroundColor = "green";
        msg.style.color = "white"
    }else{
        let msg = document.getElementById("message");
        msg.innerHTML = "You Lose!"
        compscore ++;
        document.getElementById("pcscore").innerHTML = compscore
        msg.style.backgroundColor = "red";
        msg.style.color = "white"
    }
}

const compchoice = ()=>{
    const options=["rock","paper","scissor"]
    const randidx = Math.floor((Math.random())*3)
    const pchoice = options[randidx]
    document.getElementById("pcchoice1").innerHTML = `Computer choice : ${pchoice}`;
    return options[randidx];
}

const drawgame = () =>{
    let msg = document.getElementById("message");
        msg.innerHTML = "Game was draw. Play again"
        msg.style.backgroundColor = "blue";
        msg.style.color = "white"
}

const playgame = (userchoice) =>{
    console.log("user choice was", userchoice)
    const computerchoice = compchoice();
    console.log("computer choice",computerchoice)

    if(userchoice === computerchoice){
        drawgame()
    }
    else {
        let userwin =  true;
        if(userchoice === "rock"){
            userwin =  computerchoice==="paper"?false:true

        }else if(userchoice === "paper"){
            userwin =  computerchoice ==="scissor"?false:true

        }else{
            userwin =  computerchoice==="rock"?false:true
        }
        showwinner(userwin)
    }

}




choice1.forEach((choices) => {
    choices.addEventListener("click",()=>{
        
        let userchoice = choices.getAttribute("id")
        document.getElementById("uchoice").innerHTML =`User : ${userchoice}`;
        playgame(userchoice);
        

    })
});
