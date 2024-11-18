import { Router } from "express";
const router = Router()
import { getPong } from "../controllers/index.controller.js";
router.get('/ping', getPong)


export default router