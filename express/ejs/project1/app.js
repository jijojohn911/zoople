import express from "express"
const app= express()
   
//critical line 1: tell express to use EJS as template engine
app.set('view engine','ejs');

//critical line 2: tell express where to find template
app.set("views","./views") 

app.get("/",(req,res)=>{

    const data = {
        pageName: "my first ejs page",
        studentName:"Arun",
        batch:2025
    }
    res.render('index',data)
})

app.listen(3000,()=>{
    console.log("server running in port 3000");
    
})