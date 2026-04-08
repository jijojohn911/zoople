import http from "http";

const server= http.createServer((request,response)=>{
    response.writeHead(200,{"content-type":"text/plan"});
    response.end("hallo world");

});

server.listen(3000,()=>{
    console.log("server is listening on http://localhost:3000");
    
})