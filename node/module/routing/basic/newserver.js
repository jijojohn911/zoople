import http, { createServer } from "http";

const server=createServer((request,Response)=>{
    if(request.url==="/home"){
        Response.writeHead(200,{"Contact-Type":"text/plan"})
        Response.end(JSON.stringify("home"))
    }else if(request.url==="/about"){
        Response.writeHead(200,{"Content-Type": "text/plan"})
        Response.end("about:")
    }
    else if(request.url==="/contact"){
      Response.writeHead(200,{"COntact-Type":"text/plan"})
      Response.end("contact:")
    }
})
server.listen(3000,()=> {console.log("sever is running on port 3000")
})