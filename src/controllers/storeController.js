import Storemodel from "../models/Storemodel.js";

export const storeCreate = async (req,res) =>{

    try{

    const {store_location, currency, tax_percentage, premium_items} = req.body;

    if(!store_location || !currency || !tax_percentage || !premium_items){
        return res.status(400).json({
            success: false,
            message: "enter complete info"
        })
    }
    const store = await Storemodel.findOne({store_location})
    if(store){
        return res.json({
                "success": false,
                "message": "Store with this location already exists",
        })
    }

    const new_store = {
        store_location: store_location,
        currency : currency,
        tax_percentage : tax_percentage,
        premium_items : premium_items
    }
    await Storemodel.create(new_store)

    return res.status(201).json({
        "success": true,
        "message": "Store Created Successfully",
      }
      )
    }
    catch(error){
        return res.json({
            
                "success": false,
                "message": "Store with this location already exists",
              
              
        })
    }
}

export const storeUpdate = async(req,res)=>{
    try{
        const {currency, tax_percentage, premium_items} = req.body;
        console.log(currency)
        const {store_location} = req.params
        console.log(store_location)
        if(!currency || !tax_percentage || !premium_items){
            return res.status(400).json({
                success: false,
                message: "enter complete info"
            })
        }

        const store = await Storemodel.findOne({store_location})
        console.log(store.currency)
        store.currency = currency;
        store.tax_percentage = tax_percentage;
        store.premium_items = premium_items;
        store.save();

        return res.json(
            {
              "success": true,
              "message": "Store Updated Successfully",
            }
            
            
        )

    }
    catch(error){
        return res.json({
            
            "success": false,
            "message": "Store with this location already exists",
            "error":error
          
          
    })
    }
}