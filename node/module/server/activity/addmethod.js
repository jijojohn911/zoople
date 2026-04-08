import http from "http"
import { json } from "stream/consumers";
const server =http.createServer((req,res)=>{
    if(req.url==="/home" && req.method==="GET"){
        res.writeHead(200,{"Content-Text":"application/json"});
        res.end(JSON.stringify("hllo"))


    }else if (req.url==="/about" && req.method==="GET"){
        res.writeHead(200,{"Content-Text":"application/json"})
        res.end(JSON.stringify("about page"))
    }else if(req.url==="/signup" && req.method==="POST"){
        res.writeHead(200,{"Content-Text":"application/json"})
        res.end(JSON.stringify("signup Page"))
    }else{
        res.writeHead(404)
        res.end("Not Foud")
    }
})

server.listen(3000,()=>{console.log("server running in 3000")})