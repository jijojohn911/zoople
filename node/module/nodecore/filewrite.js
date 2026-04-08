
// import fs from "fs";
// fs.writeFile("log.txt","Hi there IM JIJO JOHN...",(error)=>{

//     if(error){
//         console.log("Write failed");        
//     }
//     console.log("File written Successfully");
    
// })


import { error } from "console";
import fs from "fs";

fs.appendFile("log.txt","\nJIJO", (error)=>{

    if (error){
        console.log("append failed");
        return;
        
    }
    console.log("log updated");
    
})