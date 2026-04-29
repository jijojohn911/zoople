import express from "express"
const app = express()
import userRouter  from './routes/user.js'

app.use(express.json()) //parses req.body
app.use(express.urlencoded({extended:true})) //get data from html form

app.use("/user",userRouter)
app.set('view engine','ejs');
app.set('views','./view');


app.listen(3000,()=>{
    console.log('servere is running on port 3000');
    
})

