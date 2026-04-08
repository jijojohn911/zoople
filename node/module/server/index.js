// import http from "http"
// import fs from "fs"
// import path from "path"

// const server=http.createServer((req,res)=>{
//     if(req.url==="/home"){
//         res.writeHead(200,{"Content-Type":"text/html"})
//         const htmlPath = path.join(__dirname, 'index5.html')
//         const htmlContent = fs.readFileSync(htmlPath, 'utf8')
//         res.end(htmlContent)
//     } else {
//         res.writeHead(404)
//         res.end("Not Found")
//     }
// })

// server.listen(3001,()=>{
//     console.log("Server running on port 3001")
// })


// import path from "path";
// import fs from "fs";
// import http from "http";

// const server = http.createServer((req,res)=>{
//    if(req.url==="/home"){
//     res.writeHead(200,{"Content-Type":"text/html"})
//     res.end()
//    }
// })
import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const server = http.createServer(async (req, res) => {
    try {
        // Find the file
        const filePath = path.join(__dirname, 'index5.html');
        
        // Read the file (yields a Buffer)
        const content = await fs.readFile(filePath);

        // GIVE THESE RESPONSES:
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);

    } catch (err) {
        // If file is missing, send a 404 error instead
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

server.listen(3000);