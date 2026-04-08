// const fs= require("fs");
import fs from "fs";

fs.readFile("data.txt","utf8",(error,data)=>{

    if(error){
        console.log("error reading file");
        return;  
    }
    console.log("File Content:");
    console.log(data);
    
    
})

import os from "os";
console.log("operating system",os.platform());

console.log("cpu cores",os.cpus().length);

console.log("free memory",os.freemem());


