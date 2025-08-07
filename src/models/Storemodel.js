import mongoose from "mongoose"

const storeSchema = new mongoose.Schema(
    {
    store_location:{
        type: String,
        required: true,
        trim: true
    },
    currency:{
        type: String,
        required: true,
        trim: true
    },
    tax_percentage:{
        type: Number,
        required: true,
    },
    premium_items:{
        type: [String],
        required: true,
    }
 
},{
    timestamps: true
}
)
export default mongoose.model('Store', storeSchema)