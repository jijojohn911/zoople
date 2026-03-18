 
 
let fruits=["apple","mango","orange","grape"];

  let list=document.getElementById("list")
     list.innerHTML=""

    for(i=0;i<fruits.length;i++){
  let li=document.createElement("li");
     
  li.innerText=fruits[i]
list.appendChild(li);
}
console.log("hi")

