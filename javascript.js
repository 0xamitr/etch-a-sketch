let number;
const container = document.querySelector(".container");
function rgb0(){
    let rgb1 = Math.floor(Math.random() * 256);
    let rgb2 = Math.floor(Math.random() * 256);
    let rgb3 = Math.floor(Math.random() * 256);
    return [rgb1, rgb2, rgb3];
}
function promptfunc(){
    number = prompt("No of squares you want on a side");
    if (number > 100){
        alert("number should be less than 100");
        promptfunc();
    }
    let num = (800 - 4 * number) / number;
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
    }
        const div2 = document.querySelectorAll(".square");
        div2.forEach(element => {
            let i = 0;
            let rgbc = rgb0();
            let a = rgbc[0];
            let b = rgbc[1];
            let c = rgbc[2];
            element.addEventListener("mouseenter" , () => {
                element.style["background-color"] = 'rgb(' + (a - ((a/10)*i)) + ',' + (b - ((b/10)*i)) + ',' + (c - ((c/10)*i)) + ')';
                i++;
            });
    });
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
