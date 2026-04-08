
import http from "http";

//create server
const server = http.createServer((request, response) => {
    //cheak route
    // console.log("request.url" , request.url);

    if (request.url === "/flipcart") {
        response.writeHead(200, { "Content-Type": "application/json" })
        response.end(JSON.stringify({ message: "home API" }));
        // converts javascript object ➡️ json string
    }else if(request.url==="/about"){
        response.writeHead(200,{"Content-Text":"application/json"})
        response.end(JSON.stringify({about:"about API"}))
    }
});
//start server
server.listen(3100, () => {
    console.log("server running on port 3100");

});



