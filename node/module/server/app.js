import { log } from "console";
import http, { createServer } from "http";

const server=http.createServer((Request,Response)=>{    
    if(Request.url==="/flipcart"){
        Response.writeHead(200,{"Content-Type":"application/json"})
        Response.end(JSON.stringify({message:"Home API"}))
    }else if(Request.url==="/about"){
        Response.writeHead(200,{"Content-Type":"application/json"})
        Response.end(JSON.stringify({about:"about API"}))
    }else{
        Response.writeHead(404);
        Response.end("Not Found")
    }
});
server.listen(3000,()=>{console.log("server running on port 3100")
})