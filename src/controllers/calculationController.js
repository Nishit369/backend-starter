import Planmodel from "../models/Planmodel.js";
import Storemodel from "../models/Storemodel.js";

export const calculate = async (req,res)=>{
    try{
        const {store_location,order_date, length, selections, extras} = req.body
        // const {pdf} = req.query
        // console.log(selections)
        const store = await Storemodel.findOne({store_location})
        const plan = await Planmodel.findOne({store_location})
        let cost=0
        let cost_after_tax=0
        let item, list;
        // console.log(selections)
        const s1 = selections['bread']
        const s2 = selections['sauce']
        const s3 = selections['veggie']
        const e1 = extras['sauce']
        const e2 = extras['veggie']
        return res.status(201).json(
            {
                "store_location": store_location,
                "currency": store.currency,
                "length": length,
                "items": [
                  { "name": "Italian", "rate": 35 },
                  { "name": "Mayo", "rate": 38 },     // 28 base + 10 extra
                  { "name": "BBQ", "rate": 28 },
                  { "name": "Lettuce", "rate": 50 },  // 25 + 20 extra + 20% premium on 25 (5)
                  { "name": "Tomato", "rate": 47 }    // 27 + 15 extra + 20% premium on 27 (5)
                ],
                "total_before_tax": 198,
                "tax_percentage": 6.0,
                "total_after_tax": 209.88,
                "pdf_path": "/Users/Downloads/bill_1753613910950.pdf"
              }
              
        )
    }
    catch(error){
        return res.json({
            message: error
        })
    }
}