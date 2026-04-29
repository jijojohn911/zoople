 


import express from "express"

const app=express()
import userRouter from "./routes/users.js"

function middleWareA(req,res,next){
    console.log("method:",req.method);
    console.log("url:",req.url);
    next()
}

//it is the link to routes
app.use(middleWareA)
app.use(express.json())
app.use("/user",userRouter)


app.listen(3001,()=>{
    console.log("server is running on port 3001");
    
})