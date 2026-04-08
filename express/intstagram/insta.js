import express from "express";

const insta = express();

insta.get("/",(req,res)=>{
    res.send("Insta main page")
})
insta.get("/reels",(req,res)=>{
    res.send("reels json")
})
insta.get("/help",(req,res)=>{
    res.send("help page")
})
insta.post("/customer-center",(req,res)=>{
    res.json([{number:"09898837"},
        {name:"jijo"}]
    )
})
insta.get("/about",(req,res)=>{
    res.send("about page")
})
insta.post("/reel-edit",(req,res)=>{
    res.send("reel-edit page")
})
insta.get("/view-reels",(req,res)=>{
    res.send("view reels page")
})
insta.get("/home",(req,res)=>{
    res.send("home page")
})
insta.post("/stories",(req,res)=>{
    res.send("stories")
})
insta.get("/view-stories",(req,res)=>{
    res.send("view storis page")
})
insta.get("/faq",(req,res)=>{
    res.send("faq page")
})
insta.post("/message",(req,res)=>{
    res.send("message page")
})
insta.delete("/account-delete",(req,res)=>{
    res.send("account delete permenently")
})
insta.post("/comments",(req,res)=>{
    res.send("comment page")
})
insta.get("/view-comment",(req,res)=>{
    res.send("view-comment page")
})
insta.post("/search",(req,res)=>{
    res.send("search page")
})




insta.listen(3000,()=>{
    console.log("running 3000");
    
})