import Planmodel from "../models/Planmodel.js";

export const planCreate = async (req,res) =>{
    const {store_location, valid_from, valid_to, items} = req.body
    if(!store_location || !valid_from || !valid_to || !items){
        return res.status(400).json({
            success: false,
            message: "enter complete info"
        })
    }
    const new_plan = {
            store_location: store_location,
            valid_from : valid_from,
            valid_to: valid_to,
            items : items
        }
    await Planmodel.create(new_plan)
    return res.status(201).json({
        "plan_id": new_plan.plan_id,
        "store_location": new_plan.store_location,
        "success": true,
        "message": "Plan Created Successfully",
      }
      
      )

}

export const getPlan = async (req,res) =>{
    const {plan_id} = req.params
    const existingPlan = await Planmodel.findById(plan_id)
    if(!existingPlan){
        return res.status(404).json({
            "success":false,
            "message" : "plan aint existing"
        })
    }
    return res.json(
        {
            "plan_id": existingPlan.plan_id,
            "store_location": existingPlan.store_location,
            "valid_from": existingPlan.valid_from,
            "valid_to": existingPlan.valid_to,
            "items": existingPlan.items
          }
          
    )
}