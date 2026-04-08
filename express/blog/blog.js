import express from "express";

const blog = express();

blog.get("/blog", (req, res) => {
    res.send("main page")
})
blog.get("/home", (req, res) => {
    res.send("home page")
})
blog.get("/new", (req, res) => {
    res.send("new page")
})
blog.get("/category", (req, res) => {
    res.send("category page")
})
blog.get("/about", (req, res) => {
    res.send("about")
})
blog.get("/membership", (req, res) => {
    res.send("membership page")
})
blog.get("/login", (req, res) => {
    res.send("oloog_in page")
})
blog.get("/signin", (req, res) => {
    res.send("sign_in page")
})


blog.listen(3000, () => {
    console.log("server 3000");

})