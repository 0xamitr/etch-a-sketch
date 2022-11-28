let number;
const container = document.querySelector(".container");
function promptfunc(){
    number = prompt("No of squares you want on a side");
    if (number > 100){
        alert("number should be less than 100");
        promptfunc();
    }
    let num = (800 ) / number;
    for (let i = 0; i < number; i++){
        const div = document.createElement('div');
        div.setAttribute("style", "display: flex;");
        container.appendChild(div);
        for (let j = 0; j < number; j++){
            const div1 = document.createElement('div');
            div1.setAttribute("class", "square");
            div1.setAttribute("style", `height: ${num}px; width: ${num}px;`)
            div.appendChild(div1);
        }
        const div2 = document.querySelectorAll(".square");
        div2.forEach(element => {
            element.addEventListener("mouseover" , () => {
                element.style["background-color"] = "black";
            });
        });
    }
}
promptfunc();

function newpromptfunc(){
    while (container.firstChild) {
        while (container.firstChild.firstChild){
            container.firstChild.removeChild(container.firstChild.firstChild);
        }
        container.removeChild(container.firstChild);
    }
    promptfunc();
}


const button = document.querySelector(".button");
button.addEventListener("click", newpromptfunc);
