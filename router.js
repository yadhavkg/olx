import { Router } from "express";
import * as rh from "./requestHandler.js";

const router=Router()
router.route("/register").post(rh.register)

















export default router;