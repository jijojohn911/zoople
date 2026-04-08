import express from "express";

const app=express();

app.get("/flipcart",(req,res)=>{
    res.json({message:"hallo"})
})

app.get("/contact",(req,res)=>{
    res.send("Contact API")
})

app.get("/product",(req,res)=>{
    res.json([{shoe:"adidas"},
        {bag:"carry bag"}])
})

app.listen(3000,()=>{
    console.log("server running 3000");
    
})