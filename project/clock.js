let hrs =document.getElementById("hrs");
let sec=document.getElementById("sec");
let min=document.getElementById("min");



setInterval(()=>{
    let currentTime= new Date();
hrs.innerText=currentTime.getHours();
sec.innerText=currentTime.getSeconds();
min.innerText=currentTime.getMinutes();
},1000);

 
