const increasebtn=document.getElementById("increase-btn");
const decreasebtn=document.getElementById("decrease-btn");
const resetbtn=document.getElementById("reset-btn");
const countbtn=document.getElementById("countLabel");
let count=0;
 
function increase(){
    count++;
    countbtn.textContent=count;
}
function reset(){
    count=0;
    countbtn.textContent=count;
}
function decrease(){
    count--;
    countbtn.textContent=count;
}