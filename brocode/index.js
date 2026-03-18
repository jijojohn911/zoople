
// let username;
// document.getElementById("mysubmit")
// function greet(){
//      welcome=document.getElementById("myh1")
//      let username=document.getElementById("text1").value;
//       console.log("hiii",username)
//      welcome.innerText=`hallo ${username} `;
//     //  console.log(username)
// }


// radius=window.prompt("enter the radius of circle")
// const PI=3.14159;
// radius=Number(radius);


// document.getElementById("mysubmit")
// function calculate(){
//   let text=  document.getElementById("mytext").value;    //--------------------------------------------------
//     radius=text;
//     circumferance=2*PI*radius;
//     document.getElementById("myh3").textContent= circumferance
// }



//no mehod chaining
// let username=window.prompt("enter your name");
// username =username.trim();
// let letter=username.charAt(0);
// letter=letter.toUpperCase();

// let extraChar=username.slice(1);
// extraChar=extraChar.toLowerCase()
// username=letter+extraChar;
// console.log(username)


////method chaining
//  username=username.trim().charAt(0).toUpperCase()+username.trim().slice(1).toLowerCase();
//  console.log(username)


//while looping -----------------------doubt2.34min

// let loggedIn=false;
// let username;
// let password;

// while(!loggedIn){
//     username=window.prompt("enter your username");
//     password=window.prompt("enter your password");
// pass=Number(password)
// console.log(typeof pass);


// if(username === "123" && pass ===456){
//     loggedIn=true;
//    console.log("you are loggedIn");
// }
// else{
//    console.log("please try again");
// }
// }


//  let happybirthday=(username,age)=>{
// console.log(`happy birthday to you ${username} you are ${age}`)
// }
// happybirthday("jijo",22);

// function isEven(number){
//     if(number%2==0){
//         return true;

//     }else{
//        return false;
//     }
// }
//  console.log(isEven(13))


// let isOdd=(number)=>{
//     return number %2==1?true:false
// }

//  console.log(isOdd(11))


//  let isValidEmail=(email)=>{
//     return email.includes("@") ? true:false;
//  }
//  console.log(isValidEmail("jijo.@com"));

// spread operators
// let username = "jijo john";
// let letters =[...username].join("-")
// console.log(letters)


// let fruits= ["apple","orange","grape","mango"];
// let newFruits=["peach","pappaya","musambi"];
// let result=[...fruits,...newFruits];
// console.log(result);


// rest parameters



// function openfridge(...foods){
//     console.log(...foods)
// }

// function getfoods(...foods){
// return foods
// }

// const foods1 ="pizza"
// const foods2 ="brosters"
// const foods3 ="shawaya"
// const foods4 ="alfaham"
// const foods5="shawarma"


// // openfridge(foods1,foods2,foods3,foods4,foods5);
// const foods=getfoods(foods1,foods2,foods3,foods4,foods5)
// console.log(foods)


// for each and callback

// let fruit=[1,2,3,4,5];
// let hi=fruit.forEach(double)
// console.log(hi)
// fruit.forEach(display)

// function double(ele,ind,arr){
// arr[ind]=ele*2
// }
// function display(element){
//    console.log(element)
// }


// //map method


// const students=["jIjo","jObin","anoop","ankith"];
// const studentUpper= students.map(upperCase)
// console.log(studentUpper);
//   const studentLow=students.map(lowercase)
//   console.log(studentLow)
//   function upperCase(element){
//     return element.toUpperCase()
//   }
//   function lowercase(element){
//     return element.toLowerCase()
//   }


//   let dates = ["1-10-2025","4-5-2026","24-7-2027"]

//    function formateDate(event){
//     const part=event.split("-")
//     return `${part[1]}/${part[0]}/${part[2]}`
//    }
//    const formatteddate=dates.map(formateDate)
//    console.log(formatteddate)


// filter method
// const number=[1,2,3,4,5,6,7,8,9]
//  function isEven(element){
//     return element%2===0
//  }
//  const newNum=number.filter(isEven)
//  console.log(newNum);
//  function isOdd(element){
//     return element%2!==0
//  }
//  const newOdd=number.filter(isOdd)
//  console.log(newOdd);



// //  reduce method
// const grade =[10,40,50,90,20,35];
// function getMax(element,accum){
//     return Math.max(element,accum)
// }

// const maxGrade=grade.reduce(getMax)
// console.log(maxGrade)

// function getMin(elemnet,accumulator){
//     return Math.min(elemnet,accumulator)
// }

// const minGrade=grade.reduce(getMin)
// console.log(minGrade)


// function expresssion

// const number=[1,2,3,4,5,6,7,8,9];
// const square =number.map(function(event){
//     return Math.pow(event,2)
// })
// const cube=number.map(function(event){
//     return Math.pow(event,3);
// })
// const evenNum = number.filter(function(event){
//     return event%2===0;
// })
// const oddNum = number.filter(function(event){
//     return event%2!==0;
// })
// console.log(square)
// console.log(cube)
// console.log(evenNum)
// console.log(oddNum);


// Arrow function
// const array =[1,2,3,4,5,6,7,8,9];
// const square=array.map((element)=>Math.pow(element,2));
// const cube= array.map((element)=>Math.pow(element,3));
// const evenNum=array.filter((event)=>event%2===0);
// const oddNum=array.filter((element)=>element%2!==0);
// const total=array.reduce((element,accumulator)=>accumulator+element)

// console.log(square)
// console.log(cube)
// console.log(evenNum)
// console.log(oddNum)
// console.log(total)


// object

// const person={
//     name:"jijo",
//     age:22,
//     employee:false,
//   sayHello:()=>{console.log(`hii! iam jijo`)}
// }
// const person2={
//     name:"ankith",
//     age:21,
//     employee:true,
//     say:()=>console.log(`hi! i am ankith`)
// }

// person.sayHello()
// person2.say()

// this keyword

// const person={   
//       name:"jijo",
//       age:22,
//       employeed:true,
//       sayhalo:function(){console.log(`hi! i am ${this.name} I'm ${this.age} age old`)}
// }
// person.sayhalo()

// function divide(a,b){
// try {
//     if(b===0){
//         throw new Error("division by zero!")
//     }
//     return a/b
// } catch (error) {
//     return "error occurred"
// }
// }
// console.log(divide(0,10))



// super keyword
// ⬆️
// class Animal{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
// }
// class Rabbits extends Animal{
//     constructor(name,age,runspeed){
//         super(name,age);
//         this.runspeed=runspeed
//     }
// }
// class Fish extends Animal{
//     constructor(name,age,swimspeed){
//         super(name,age);
//         this.swimspeedspeed=swimspeed
//     }
// }

// class Hawk extends Animal{
//     constructor(name,age,flyspeed){
//         super(name,age);
//         this.flyspeed=flyspeed
//     }
// }
// const rabbits=new Rabbits("rabbit",1,25);
// const fish =new Fish("ayala",2,20)
// const hawk=new Hawk("sugunan",3,150)

// console.log(rabbits.name)
// console.log(rabbits.age)
// console.log(rabbits.runspeed)



// getter& setter    -------------------doubt
//⬆️
// class Person {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName
//         this.age = age
//     }
//     set firstName(newfirstName) {
//         if (typeof newfirstName === "string" && newfirstName.length > 0) {
//             this._firstName = newfirstName
//         }

//         else {
//             console.error("first name must be a non-empty strng")
//         }
//     }
//      set lastName(newlastName) {
//         if (typeof newlastName === "string" && newlastName.length > 0) {
//             this._lastName = newlastName
//         }

//         else {
//             console.error("first name must be a non-empty strng")
//         }
//     }
//     set age(newAge){
//         if (typeof newAge===Number&&newAge>=0){
//             this._age=newAge
//         }else{
//             console.error("must be a non-negative number")
//         }
//     }
//     get firstName(){
//         return this._firstName
//     }
//      get lastName(){
//         return this._lastName
//     }
//      get age(){
//         return this.newAge
//     }
// }
// const user = new Person("Jijo", "John", 0);
// console.log(user.firstName)
// console.log(user.lastName)
// console.log(user.age)



//fisher-yates algorithm

// const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];


// function shuffle(array) {
//     for (let i = array.length- 1; i > 0; i--) {
//         const random = Math.floor(Math.random() * (i + 1));
//         [array[i], array[random]] = [array[random], array[i]];
//     }

// }

// shuffle(cards);
// console.log(cards)
//--------------------------------------------------------------practical problem
// ⬇
// const person = ["jijo", "jobin", "ankith", "anoop", "amal", "amar", "syam"];
// function shuffle(persons){
// for (let i = person.length - 1; i > 0; i--) {
//      const random=Math.floor(Math.random()*(i+1));
//      [persons[i],persons[random]]=[persons[random],persons[i]]

// }
// }
// shuffle(person)
// console.log(person)



//date objects
//-------------------

//closures
// function createGame(){
// let score=0
// function increaseScore(points){
//     score+=points;
//  console.log(`+${points}pts`);

// }
// function decreaseScore(points){
//     score-=points
//     console.log(`-${points}pts`);

// }
// function getScore(){
//     return score;
// }
//     return {increaseScore, decreaseScore,getScore}

// }


// const game =createGame()
// game.increaseScore(16)
// game.decreaseScore(8)
// console.log(`the final score is ${game.getScore()}pts`);

// import {PI,getArea,getCircumferance,getVolume} from '.utils.js'   -----------doubt
// console.log(PI);



// const newh1=document.createElement("h1")

// newh1.textContent="i like pizza !";
// newh1.id="myh1"
// document.getElementById("box2").append(newh1)






//add eventlistner 

// const mybox = document.getElementById("box");
// const btn = document.getElementById("btn")


// btn.addEventListener("click", event => {
//     mybox.style.backgroundColor = "tomato"
//     mybox.textContent = "Ouch🤕"
// })


// btn.addEventListener("mouseover", event => {
//     mybox.style.backgroundColor = "yellow"
//     mybox.textContent = "don't do it"
// })

// btn.addEventListener("mouseout", event => {
//     mybox.style.backgroundColor = "green"
//     mybox.textContent = "CLICK ME 😊"
// })


//arrow game

// const box = document.getElementById("box")
// const moveAmount = 10;
// let x = 0;
// let y = 0;

// document.addEventListener("keydown", event => {
//     box.textContent = "😮"
//     box.style.backgroundColor = "tomato"
// })
// document.addEventListener("keyup", event => {
//     box.textContent = "😀"
//     box.style.backgroundColor = "lightblue"
// })
// document.addEventListener("keydown", event => {
//     if (event.key.startsWith("Arrow")) {

//         event.preventDefault();

//         switch (event.key) {
//             case "arrowUp":
//                 y -= moveAmount;
//                 break;
//             case "arrowDown":
//                 y += moveAmount;
//                 break;
//             case "arrowLeft":
//                 x -= moveAmount;
//                 break;
//             case "arrowRight":
//                 x += moveAmount;
//                 break;
//         }
//         box.style.top=`${y}px`
//             box.style.top=`${x}px`
//     }
// })




//nodelist


//let button = document.querySelectorAll(".btn");
// btn.forEach(button=>{
// //     button.addEventListener("click",event=>{
// //         event.target.style.backgroundColor="lightblue"
// //     })

// button.addEventListener("mouseover",event=>{
//     button.style.backgroundColor="lightblue"
// })
// button.addEventListener("mouseout",event=>{
//     button.style.backgroundColor=""
// })
// })

// const newButton = document.createElement("button");
// newButton.textContent = "button 5";
// newButton.classList = "mybtn";
// document.body.appendChild(newButton)

// btn=document.querySelectorAll(".mybtn")
// console.log(btn);
// button.forEach(button=>{
//     button.addEventListener("click",event=>{
//         event.target.remove();
//         button=document.querySelectorAll(".btn")
//         console.log(button);
        
//     })
// })




//classlist
//const mybutton=document.getElementById("myBtn")
// mybutton.addEventListener("mouseover",event=>{
//     event.target.classList.toggle("hover")
// })
// mybutton.addEventListener("mouseout",event=>{
//     event.target.classList.toggle("hover")
// })

// mybutton.classList.add("enabled")

// mybutton.addEventListener("click",event=>{

// if(event.target.classList.contains("disabled")){
//     event.target.textContent+='😒'
// }

//     event.target.classList.replace("enabled","disabled")
    
// })



let buttons=document.querySelectorAll(".btn")

// buttons.forEach(button=>{
//     button.classList.add("enabled")
// })

buttons.forEach(button=>{
    button.addEventListener("mouseover",event=>{
        event.target.classList.toggle("hover")
    })
})
buttons.forEach( button=>{
    button.addEventListener("mouseout",event=>{
        event.target.classList.toggle("hover")
    })
})
