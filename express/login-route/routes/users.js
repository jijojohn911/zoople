import { Router } from "express";
const router = Router()
import { login } from "../controllers/usersControllers.js"


router.get("/login",login)
router.post("/signup",login)
router.post("/view-profile",login)
router.post("/edit-profile",login)



export default router