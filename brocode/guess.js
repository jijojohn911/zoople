let maxNum=100;
let minNum=1;
let guess;
const answer= Math.floor(Math.random()*(maxNum-minNum +1))+minNum;
console.log("answer",answer);
const ans= Math.floor(Math.random()*100)
console.log("answer2",ans);

attempt=0;
let running=true;
while(running){
  guess=window.prompt(`Guess a number betweeen ${minNum} - ${maxNum}`)
  guess=Number(guess);

  if(isNaN(guess)){
    window.alert(`please enter a validnumber`)
}
else if(guess>maxNum||guess<minNum){
    window.alert(`enter a valid number`)
}
else{
    attempt++
    if(guess>answer){
        window.alert(`too high try again`)
    }
    else if(guess<answer){
        window.alert(`too low try again`)
    }
    else{
        window.alert(`correct! your answer:${answer}.you took ${attempt} attempts`)
        running=false;
    }
}
}