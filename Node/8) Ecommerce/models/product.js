import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 100
    },
    image: {
        type: String,
    },
    imageId: {
        type: String,
    },
    description: {
        type: String,
        required: true
    },

}, { timestamps: true });

const ProductModel = new mongoose.model('Product', ProductSchema);
export default ProductModel