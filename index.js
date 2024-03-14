
const button =document.querySelector("button");
const body =document.querySelector("body");
const color =["red","blue","black","green","yellow","grey","pink","purple","violet"];

body.style.backgroundColor = "violet";
button.style.backgroundColor="black"

button.addEventListener("click",changeb);

 function changeb(){
    const colorindex = parseInt(Math.random()*color.length);
    body.style.backgroundColor =color[colorindex];
    button.style.backgroundColor =color[colorindex];
 }