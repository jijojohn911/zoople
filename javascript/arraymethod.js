// //mutator methhod

// let demo=[1,2,3,4]
// demo.push(5)
// console.log(demo);



// let demo2=[1,2,3,4]
// demo2.pop()
// console.log(demo2)

// let demo3=[1,2,3,4]
// demo3.unshift(5)
// console.log(demo3)

// let demo4=[1,2,3,4]
// demo4.shift()
// console.log(demo4)

// let demo5=[1,2,3,4]
// let demo6=[5,6,7]
// let result=demo5.concat(demo6)
// console.log(result)

// let demo7=["hey","hallo","you","me"]
// demo7.splice(2,0,5,6,7,8)
// console.log(demo7)

// let demo8=[1,2,3,4,"hey","hallo"]
//  result=demo8.slice(1,4)
// console.log(result)

// let deno=[1,2,3,4,5,6]
// deno.reverse()
// console.log(deno)

//let demo10=[1,2,3,4]
// let result=demo10.map((jijo)=>{
//   return jijo*10
// })
// console.log(result)


// let jijoo=[
//   {name:"jijo"},
//   {name:"syam"},
//   {name:"amar"},
//   {name:"naja"},
//   {age:"234"},
//   {name:"you"}
// ]
// let result1=jijoo.map((value)=>{
//   return value.name
// })
// console.log(result1)


// const age=[10,25,30,18,32,16,12]
// const adult = age.filter(age1=>age1>=18);
// console.log(adult);



// push= add new data at the last of Array
// pop= remove last data 
// unshift= add data at the beginning
// shift=remove data first
//concat= merge two or more `arrays 
//splice=add data in a specific place
//slice= to take a spacific part from index
//reverse=reverse all the index
//map=



// let rows = 9; // Total number of lines to print
// let peak = 5; // The maximum number of digits in a row

// for (let i = 1; i <= rows; i++) {
//   let output = "";
  
//   // Logic: if i is past the peak (5), start decreasing the count
//   let count = (i <= peak) ? i : (2 * peak - i);

//   for (let j = 1; j <= count; j++) {
//     output += j + " ";
//   }
  
//   console.log(output);
// }



//1) Javascript program to find largest number among three numbers? 

// let a=1;
// let b=30;
// let c=3;
// if(a>b && a>c){
//   console.log(a)
// }
// else if(b>c && b>a){
//   console.log(b)
// }else{
//   console.log(c)
// }


// let array=[10,20,30,40]
// let result=array.reverse()
// console.log(array)


// let a =11
// if(a%2==0){
//   console.log("even")
// }else{
//   console.log("odd")
// }


// const value="hallo world";
// console.log(value.substr(0,7))



// let a="malayalam";
// let result=a.split("") .reverse()  .join("")
// if(a===result){
//   console.log("palindrome")
// }
// else{
//   console.log("not palindrome")

// }








//practice
// let num=10
// for(i=1;i<=10;i++){

//      console.log(num,"*",i,"=",num*i)
// }

// let num=[1,2,3,4,5,6,7,8,9,10]
// for(i=0;i<=num.length;i++){
//   if(num[i]%2===0){
//     console.log(num[i],"is even");
//   }else{
//     console.log(num[i],"is odd")
//   }
//   }
 
// let fra=5
// let sum=1
// for(i=sum;i<=fra;i++){
//   sum=sum*i
  
// }

// document.write("fraction of 5 is "+sum)

// let a=[]
// for(i=1;i<=30;i++){
//   a.push(i);
// if(i%3===0&&i%7===0){
//   console.log(i)
// }

// }

// let b=[]
// for(i=20;i>=0;i-=3){
//     b.unshift(i);
// console.log(i)
// }








// let array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// for(i=0;i<=array.length;i++){
//   if(array[i]%2!=0){
//     console.log(array[i],"is odd")
//   }
// }




// named function

// function total_mark(eng,maths,sci){
//     let total=eng+maths+sci;
//     console.log("total",total);
//     return total;
// }
// let total=total_mark(90,80,50);
// if(total>=200){
//     console.log("pass")
// }else{
//     console.log("fail")
// }

// function calculateTotal(qty,price){
//     console.log("quantity",qty);
//     console.log("price",price);
//     let total=qty*price;
//     return total;
// }
// let total=calculateTotal(2,100);
// console.log(total);


// function cartFolder(qty,price){
//     let total=qty*price;
//     console.log("qty",qty);
//     console.log("price",price);
//    return total;

// }
// let total=cartFolder(4,100);
// console.log(total);


// annonimous function

// let equation= function(math,sci,eng){
//     let total=math+sci+eng;
//     console.log("marks",total);
//     return total
// }
// let sum= equation(20,30,50);
// if(sum>=70){
//     console.log("pass");
// }else{
//     console.log("fail")
// }


// arrow function
// let sum =(num1,num2=0)=>{
//     let sum=num1+num2;
//     console.log("sum",sum);
//     return sum;

// }
// let summ=sum(12,14)

// ((name)=>{
//     console.log('haloo,$(name}! I STARTED IMMEDIATLT.');

// })("Gemini");

// ((userName,isLoggedIn)=>{
//     if(isLoggedIn){
//         console.log("welcome back,${username}!");
//     }else{
//         console.log("please log In");
//     }
// })("jijo",false);


// function kaliyanmVilikuka(name){
//     console.log("kaliyanathinu allarum varane",name)
// }
// function kaliyanaKuriyadikkuka(name,callback){
//     console.log("jijodei kaliyana kuri ready ayi");
//     callback(name);
// }
// kaliyanaKuriyadikkuka("jijo",kaliyanmVilikuka)



// function teaShop(order){
//     console.log("one tea please");

// }
// function waitingPeriod(order,callback){
//     console.log("tea is ready");
//     callback(order);
// }
// waitingPeriod("here is your tea",teaShop)


// call back function

// console.log("one");
// console.log("two");
// setTimeout(()=>{
//     console.log("hallo");
// },1000);
// console.log("four");
// console.log("five");

// function* simpleGenerator(){
//     yield "first";
//     yield "second";
//     yield "third";
// }
// const gen = simpleGenerator ();
// console.log(gen.next().value);
// gen.next();           //if want to skip
// console.log(gen.next().value);


// let names = ["jijo","amar","syam","hasna"];
// for(i=0;i<names.length;i++){
//     console.log(names[i])
// }