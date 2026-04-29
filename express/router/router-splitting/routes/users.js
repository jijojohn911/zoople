import {Router} from "express"
const router = Router()

router.get("/",(req,res)=>{
    res.json("all users")
})
router.get("/:id",(req,res)=>{
    res.json("one user")
})
router.post("/",(req,res)=>{
    res.json("create user")
})
router.put("/:id",(req,res)=>{
    res.json("update users")
})
router.delete("/:id",(req,res)=>{
    res.json("delete users")
})

export default router