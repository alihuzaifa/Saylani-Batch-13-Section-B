import { v2 as cloudinary } from 'cloudinary'
import ProductModel from '../models/product';

const createProduct = async (req, res) => {
    try {
        const { name, price, description } = req.body;
        let imagePath = req.file?.path;
        let url;
        let imageId;
        if (imagePath) {
            const imageUpload = await cloudinary.uploader.upload(imagePath);
            url = imageUpload?.secure_url
            imageId = imageUpload?.public_id
        }

        const product = new ProductModel({
            name,
            price,
            description,
            imageId,
            image: url
        })
        await product.validate();
        const response = await product.save();
        res.send({
            response,
            message: 'New Product Added Successfully'
        })

    } catch (error) {
        res.send({
            message: error
        })
    }

};

export { createProduct };