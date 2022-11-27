
const number = prompt("No of squares you want on a side");
if (number > 100){
    alert("number should be less than 100");
}
const container = document.querySelector(".container");
const num = (800 - (number * 2)) / number;
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