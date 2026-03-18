
// console.log("hello gyzz")
//         document.write("hello-world")
//         window.alert("warning")    -------external js------

// var name="hlo jijo"
// var name=" do what" var replace the previous value
// console.log(name);

// let result="welcome"
// let result="welcome all"
// console.log(result);
// const PI=3.14
// console.log(PI)



// --------premitive data types------
// let demo="hallo"
// let demo=1234
// let demo=true
// let demo=null
// let demo




//number
//string
//boolen
//null
//undefined


// ------non premitive data types------
//  let ket=["hallo",1234,true,null]
//  console.log(ket[1]);          -------array-------


// let demo={
//     name:"jijo",
//     age:23,
//     place:"kerala"   ------obect-------
// }
// console.log(demo.place);


// if(5<10){
//     console.log("positive");
// }else{
//     console.log("negative");
// }



//  let a=10;
//  let b=36;
//  let c;
// // [a,b]=[b,a];
// // console.log(a,b);
//   c=a
//   a=b
//   b=c
//   console.log(a,b);




// jan.15.2026

// let number=555;
// if(number%2==0){
//   console.log("even");
// }else{
//   console.log("odd");
// }


//  let day=3;
//  5===5;
//  console.log(5===5);


// let name1 = "jijo";
// console.log("name:",name1);
// let age1 = 22;
// console.log("age:",age1);
// let student = true;
// let hobby = "coding";
// console.log("hobby:", hobby);
// let num = 15;
// console.log("favorite number:", num)


// let letter = "hey"
// switch (letter) {
//     case "hello":
//         console.log("mondy")
//         break;

//     case "hey":
//         console.log("tuesday")
//         break;

//     case "welcome":
//         console.log("wednesday")
//         break;

//     default:
//         console.log("sorry")
//         break;
// }


// let vowels = "e"
// switch (vowels) {
//     case "a":
//         console.log("vowels")
//         break;
//     case "e":
//         console.log("vowels")
//         break;
//     case "i":
//         console.log("vowels")
//         break;
//     case "i":
//         console.log("vowels")
//         break;
//     case "o":
//         console.log("vowels")
//         break;
//     case "u":
//         console.log("vowels")
//         break;
//     default:
//         console.log("consonet")
//         break;

// }


// itrate


//  for(i=1;i<=100;i++)
//     {
//    console.log(i);
//  }

// let n=1
// while(n<=100){
//     console.log(n);
//     n++
// }


// let z=1
// do {
//     console.log(z);
//     z++
// }
// while(z<=120)



//let  n = 4
// ko=""
//  for(i=1;i<=4;i++){  //No. of rows
// for(j=1;j<=4;j++){    // No.of stars
// ko=ko+"$"
// }
// ko=ko+"\n"
// }
// console.log(ko)


// let n= 4
// ko=""
// for(i=1;i<=n;i++){
//     ko=ko+"$"
//     console.log(ko)
// }

// let e = 4
// str=""
// for(i=1;i<=4;i++){
// for(j=i;j<=4;j++){
// str=str+"$"
// }
// str=str+"\n"
// }
// console.log(str)

// let n=4
// string=""
// for(i=1;i<=4;i++){
// for(j=1;j<=n-i;j++){
//     string=string+" "
// }
// for(k=1;k<=i;k++){
//     string=string+"$"
// }
// string=string+"\n"
// }
// console.log(string)

// let n=5

// for(i=1;i<=n;i++){
//     string=""
// for(j=1;j<=i;j++){
// string+=(j*i)+"\t"

// string=string+"\n"
// }
// console.log(string)

// }


//      *
//     ***
//    *****
//     ***
//      *

// let n=5
// string=""

// // Top half (expanding)
// for(i=1;i<=n;i++){
//     // Add spaces
//     for(j=1;j<=n-i;j++){
//         string+=" "
//     }
//     // Add stars
//     for(k=1;k<=2*i-1;k++){
//         string+="*"
//     }
//     string+="\n"
// }

// // Bottom half (contracting)
// for(i=n-1;i>=1;i--){
//     // Add spaces
//     for(j=1;j<=n-i;j++){
//         string+=" "
//     }
//     // Add stars
//     for(k=1;k<=2*i-1;k++){
//         string+="*"
//     }
//     string+="\n"
// }

// console.log(string)







// let n =5
// string=""

// for(i=1;i<=n;i++){
// for(j=i;j<=n-1;j++){
//     string+=" "
// }
// for(k=1;k<=2*i-1;k++){
//     string+="*"

// }
// // for(k=2;k<=i;k++){
// //     string+="*"

// // }
// string+="\n"
// }
// console.log(string)



// let f = 5
// str=""
// for(a=1;a<=f;a++){
// for(b=1;b<=f;b++){
//     str+="*"
// }
// for(w=a;w<=f;w++){
//     str+=" "
// }
// str+="\n"
// }
// console.log(str)



// let a = prompt("enter a number")
// if (a % 2 == 0) {
//     document.write("odd")

// } else {
//     document.write("even")
// }


// function hello(){
//     console.log("welcome all")
//     a=5
//     console.log(a)
// //     function declaration
//  }
// hello() //function call


// function hey("halo" a,b){   //parameters
//     sum=a*b
//     console.log(sum)
// }
// hey(2,5)   //arguments



// let person = {
//     name: "jijo",
//     age: 22
// }
// function hey(result) {

//     console.log("i am" + " " + result.name + "\n" + "i am" + " " + result.age)


// }
// hey(person)





//class object
// class Car{
//     constructor(){    //constuctor method
//         console.log("my name is jijo")
//     }
// }


// const mycar1=new Car



//inharitence of class object
// class War{
//     constructor(){     //method

//         console.log("my carrrrr")
//     }
// }
// class Bike extends War{
//     constructor(){
//         console.log("my bikee")
//         super()     //used to denote parent class
//     }
// }
// const mycar2=new Bike



// function greet(name){
//     document.write("hallo"+ " "+name);
// }
// greet("jijo")
//--------------------------------------------------
// let sum=5
// string=""
// for(i=1;i<=sum;i++){
//     for(j=1;j<=i;j++){
// string+=j
//     }
// string+="\n"
// }
// console.log(string)



// let a=5
// let number=""
// for(i=a;i>=1;i--){
//     for(j=1;j<=i;j++){
//      number+=j
//     }
//     number+="\n"
// }
// console.log(number)


// let number=5;
// for(let i=1;i<=5;i++){
//     console.log("halo",i)
// }


// let n1=1
// while(n1<100){
// console.log(n1)
//     n1++
// }
// let a =1
// do{
//     console.log(a)
//       a++;
// }while(a<=5);

