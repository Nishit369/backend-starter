import express from "express"
import * as calculate from "../controllers/calculationController.js"


const router = express.Router()
router.post('/', calculate.calculate)

export default router