// template literales
// const name="Ali";
// const message =`hallo ${name}`
// console.log(message)

// let name ="sara";
// let city = "dubai"
// console.log(`my name is ${name} i live in ${city}`)

// deconstruting

// const  username={
//     name:"jijo",
//     age:25
// }
// const {name,age}=username

// console.log(name)
// console.log(age)




// decunstruting +renaming

// const user={
//     name:"sara",
//     age:25
// }
// const user1={
//     name:"jijo",
//     age:21
// }

// const {name:name1,age:age1}=user
// const {name:name2,age:age2}=user1

// console.log(name1)
// console.log(name2)
// console.log(age1)
// console.log(age2)


// array destructuring

// const numbers = [10,20,30]
// const [a,b]=numbers

// console.log(a)
// console.log(b)



// spread operator

// const array =[1,2,3,4,5]
// let copy =[...array]
// console.log(copy)


// merging array

// const a=[1,2]
// const b=[3,4]
// const merge=[...a,...b]
// console.log(merge)


// optional chain
const user={
    // name:"jijo",
   address :{
       city: "germany"
    }
    
}
console.log(user?.address?.city)
