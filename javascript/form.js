//select form
let form1=document.getElementById("myForm");
console.log(form1)


//listen for submit
// form1.addEventListener("submit",(jijo)=>{

//     //stop page reload
//     jijo.preventDefault();
//     alert("form submitted")
//     console.log("form submitted")
// })
function makeJuuice(){
    grind()
    console.log("preparing");
}
function grind(){
    ready()
    console.log("mixed");
}
function ready(){
    console.log("juice is ready")
    makeJuuice()
}

