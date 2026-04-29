import { Router } from "express";
const router =Router()

import {loginPage,login} from "../controller/usercontrols.js"

router.get("/login",loginPage) //to get login page in browser
router.post("/login",login) 

export default router