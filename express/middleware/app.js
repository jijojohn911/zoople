import express from "express";
const app=express();

function applicationMiddleware(req,res,next){
    console.log("middleware executed");
    console.log(`method: ${req.method}`);
    console.log(`url: ${req.url}`);
    next();
}
 app.use(applicationMiddleware)
app.get("/",function(req,res){
     console.log("middleware exicuted1");
     res.send("home page")
     
   
})
  app.get("/go",function(req,res){
     console.log("middleware exicuted1");
     res.send("go page")})

app.listen(3000,()=>{
    console.log("server running");
    
})