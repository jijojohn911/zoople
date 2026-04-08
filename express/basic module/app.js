import express from "express"
const app= express()

app.get("/",(req,res)=>{
    res.send("home page")
})

app.get("/about",(req,res)=>{
    res.send("send-message Page")
})
app.get("/out",(req,res)=>{
    res.json({name:"jijo"})
})

app.listen(4000,()=>{
    console.log("server is running in 4000");
    
})