import express from "express";
const app=express();
 function loggerMiddleware(req,res,next){
    console.log(`logger Middleware-method :  ${req.method} url: ${req.url}`);
    next()
    
 }
 function timerMiddleware(req,res,next){
    console.log(`timmermiddleware  -  request recevied at :`,new Date(Date.now()));
    next();
 }
 function authMiddleware(req,res,next){
    console.log("auth maddleware - checking....");
    next();
 }
 app.use(loggerMiddleware)
  app.use(timerMiddleware)
   app.use(authMiddleware)

 app.get("/",function(req,res){
     console.log("middleware exicuted1");
     res.json("home page")
})
 app.get("/contact",function(req,res){
     console.log("middleware exicuted1");
     res.json("contact page")
})
   app.listen(3000,()=>{
    console.log("server running");
    
   })