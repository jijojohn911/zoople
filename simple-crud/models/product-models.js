import { Timestamp } from "mongodb";
import mongoose from "mongoose";
const ProductSchema = mongoose.Schema
    (
        {
            name: {
                type: String,
                required: [true, "please ender product name"]
            },
            quantity: {
                type: Number,
                required: true,
                default: 0
            },
            price: {
                type: Number,
                required: true,
                default: 0
            },
            image: {
                type: String,
                required: false
            },
        }
    )

    const Product= mongoose.model("Product",ProductSchema)


 export default Product;