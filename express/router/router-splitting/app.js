import express from "express"
const app = express()

import usersRouter from './routes/users.js'



app.use('/users',usersRouter)

app.listen(3000,()=>{
    console.log("server is running");
    
})