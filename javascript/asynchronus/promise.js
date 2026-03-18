// const myPromise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve("task completed");
//     }, 2000);
// })

// myPromise.then(function (result) {
//     console.log(result);

// })


// const yourPromise = new Promise(function (resolve, reject) {
//     setTimeout( ()=> {
//         let success = true;
//         if (success) {
//             resolve("file dowloaded")
//         }
//         else {
//             reject("downloadfailed")
//         }


//     }, 2000)
// });

//    yourPromise.then(result =>console.log(result))
//     .catch(error => console.log(error))





// let checkAge=new Promise((resolve,reject)=>{
//   let age=35
//     if(age>=18){
//         resolve("you can vote");
//     }else{
//         reject("You are too young to vote");
//     }
// })
//     checkAge
//     .then((result)=>console.log(result))
//     .catch((error)=>console.log(error))




// let fileDownload=new Promise((resolve,reject)=>{
//   let  downloadSuccess=true;
//     console.log("downloading file");
    
//     setTimeout(()=>{
//         if(downloadSuccess){
//             resolve("download successfull")
//         }else{
//             reject("DOwnloadfailed")
//         }
//     },2000)
// })

// fileDownload
// .then((result)=>console.log(result))
// .catch((error)=>console.log(error))


// let userName=new Promise((resolve,reject)=>{
//     let user="Ali"
//     password=false;
//     setTimeout(()=>{
//          if(password){
//         resolve(`welcome, ${user} !`)
//     }else{
//         reject(`please enter corrct password`)
//     }
//     },2000)

// })

// userName
// .then((result)=>console.log(result))
// .catch((error)=>console.log(error))




//promise with function


// function downloadFile(){
//     return new Promise((resolve, reject) => {
//         let  username="jijo";
//        let password=true
//       setTimeout(()=>{
//         if(password){
//             resolve(`download sucessfull ${username}`)
//         }
//         else{
// reject("try again")
//         }
//       },2000)
// })
// }

// downloadFile().then((result)=>{
//     console.log(result);
    
// })
// .catch((error)=>{
//     console.log(error);
    
// })




// function  checkAge(){
//     return new Promise((resolve,reject)=>{
//         let age=17
//         user="Jijo"
//        setTimeout(()=>{
//          if(age>=18){
//             resolve(`YOU CAN VOTE ${user}`)
//         }else{
//             reject(`YOU CAN'T VOTE ${user}`)
//         }
//        },2000)
//     })
// }

// checkAge()
// .then((result)=>{
//     console.log(result);
    
// })
// .catch((error)=>{
//     console.log(error);
    
// })




function downloadFile(){
     console.log("processing");
    return new Promise((resolve,reject)=>{
       let downloadsuccess=true;
      
       
       setTimeout(()=>{
        if(downloadsuccess){
        resolve("File Downloaded");
       }
       else{
          reject("Download failed")
       }
       },2000)
    })
}

function processFile(fileName){
    return new Promise((resolve,reject)=>{
        let process=true;
        if(process){
          resolve("processing done: "+fileName)
        }
        else{
            reject("proceesing failed")
        }
    })
}
  // downloadFile()
// .then(function(jijo){
//     return processFile(jijo)
// })
// .then(function (result){
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error);
    
// })

//asyc await
async function startProcess(){
    try {
        let fileName=  await downloadFile();
        let result=await processFile(fileName);
         console.log(result);
         
    } catch (error) {
        console.log(error);
        
    }
}
startProcess()




