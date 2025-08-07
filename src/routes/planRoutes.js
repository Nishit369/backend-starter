import express from "express"
import * as plan from "../controllers/planController.js"


const router = express.Router()
router.post('/', plan.planCreate)
router.get('/:plan_id', plan.getPlan)


export default router
