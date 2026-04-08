import http from "http"
function logger(req,res){
    console.log(`request.method:${req.method} req.url: ${req.url}`);
    
}
const server = http.createServer((Request,Response)=>{
    
    logger(Request,Response);
    if(Request.url==="/login"){
        Response.writeHead(200,{"Content_type":"application/json"})
        Response.end(JSON.stringify("login"))

    }else if (Request.url==="/signup"){
        Response.writeHead(200,{"Content_type":"application/json"})
        Response.end(JSON.stringify("signup"))
    }else{Response.writeHead(404)
        Response.end("Not Found")
    }
})

server.listen(3000,()=>{console.log("serverr running on 3000");
})

