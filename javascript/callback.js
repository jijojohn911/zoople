
//  sync function
// function longTask(){
//     for(i=0;i<10000000000;i++){
      
//     }
 
// }

// console.log("start");
// longTask()
// console.log(i);

// console.log("start");
// console.log("end")



// async function

// console.log("start");

// setTimeout(() => {
//     console.log("2 sec finished");
    
// }, 2000);
// console.log("end");


// callback function

// function greet(name,callback){
//     console.log(`hallo ${name}`);
//     callback()
// }
// function saybye(){
//     console.log(`good bye`)
// }
// greet("john",saybye);


function downloadfile(jijo){
    console.log("started download");

    setTimeout((hallo) => {
    console.log("downloaded")
jijo()
}, 6500);
}

function fileprosssing(){
    console.log("processing file")
}
downloadfile(fileprosssing)
