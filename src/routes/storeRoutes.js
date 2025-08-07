import express from "express"
import * as store from "../controllers/storeController.js"


const router = express.Router()
router.post('/', store.storeCreate)
router.put('/:store_location', store.storeUpdate)

export default router



