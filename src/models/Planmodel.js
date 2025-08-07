import mongoose from "mongoose"

const planSchema = new mongoose.Schema(
    {
    store_location:{
        type: String,
        required: true,
        trim: true
    },
    valid_from:{
        type: String,
        required: true,
        trim: true
    },
    valid_to:{
        type: String,
        required: true,
        trim: true
    },
    items:{
        type: Object,
        required: true
    }
   
 
})
export default mongoose.model('Plan', planSchema)