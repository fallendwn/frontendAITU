// console.log("MY NAME IS DENIS LI SE-2436! HELLO JAVASCRIPT!!!!!!!")
// alert("HELLO, JAVASCRIPT WORLD!")


// let a = 22
// let b = 20

// let c = "PRIVET"
// let d = "PRIVET"

// let e = true

// console.log(a+b, c+d, e)

let textP = document.querySelector(".paragraphToChange");
let buttonP = document.querySelector(".buttonToChange");
let divP = document.querySelector(".divToChange")
let buttonDiv = document.querySelector(".buttonToChangeDiv");
let buttonDiv2 = document.querySelector(".buttonToChangeDivText");


function changeParagraph (){

    textP.innerHTML = "Lorem ipsum... i forgor..";

}

buttonP.addEventListener("click", changeParagraph);

function changeColor(){

    divP.style.backgroundColor = "black";

}

function changeFont(){

    divP.style.fontSize = "32px";

}

buttonDiv.addEventListener("click", changeColor);

buttonDiv2.addEventListener("click", changeFont);


let buttonToBorn = document.querySelector("#bornbutton");
let buttonToKill = document.querySelector("#killbutton");
let ulmother1 = document.getElementById("ulmother")

function killLi(){

    ulmother1.removeChild(ulmother1.lastChild);

}

function addLi(){

    let childName = prompt("GIVE NAME TO A CHILD");
    const childName1 = document.createElement('li');
    childName1.innerText = childName;
    ulmother1.appendChild(childName1);

}

buttonToKill.addEventListener("click", killLi);
buttonToBorn.addEventListener("click", addLi);



let colorDiv = document.getElementById("hoverDiv");
let styles = window.getComputedStyle(colorDiv);
color = styles.backgroundColor; 
function hoveringDiv(){

    colorDiv.style.backgroundColor = "black";

}
function hoverOut(){

    colorDiv.style.backgroundColor = color;

}
colorDiv.addEventListener("mouseover", hoveringDiv);
colorDiv.addEventListener("mouseout", hoverOut);


let textInput = document.getElementById("xd");
let log = document.getElementById("log");

function printTheKey(e){

    log.innerText += e.key

}

textInput.addEventListener("keyup", printTheKey)