export const loginPage=(req,res)=>{
    res.render("login")
}

export const login=(req,res)=>{
    console.log("req.body::::",req.body);
    
    const {username,password}=req.body
    
    const DBusername= "Jijo";
    const DBpassword=123456;
    if(!username || !password ){
        return res.status(400).send("username and password are required")
    }
    if(username !==DBusername){
        return res.status(400).send("username is incorrect")
    }
    if(password !=DBpassword){
        return res.status(400).send("password is incorrect")
    }
    res.render("Home",{username})
}
