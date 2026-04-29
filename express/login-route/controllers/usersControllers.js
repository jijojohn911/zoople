
export const login = (req,res)=>{
    const {username,password}=req.body
    console.log("username:",username);
    console.log("password:",password);

    if (!username || !password){
        return res.status(400).send("username and password are required")
    }
    const DBusername="jijo"
    const DBpassword="12345"
     
    if(username !== DBusername){
        return res.status(400).send("User Not Found");
    }
       if(password !== DBpassword){
        return res.status(400).send("incorrect password");
    }
    res.send("home page")
}
