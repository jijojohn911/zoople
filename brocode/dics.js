function rollDice(){
const numofDice=document.getElementById("numofDice");
const diceResult=document.getElementById("diceResult");
const diceImages=document.getElementById("diceImages");
 const values=[];
 const images=[];

 for(let i=0;i<numofDice.value;i++){
 const value= Math.floor(Math.random()*6)+1;
 console.log(value);
 
     values.push(value)
   images.push(`<img src="dice_images/dice${value}.png" alt="images">`)
   

 }
 diceResult.textContent=`dice:${values}`
 diceImages.innerHTML=images.join('')
}


