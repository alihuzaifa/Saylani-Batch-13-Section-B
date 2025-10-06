import { v2 as cloudinary } from 'cloudinary'
import ProductModel from '../models/product.js';

const createProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    // let imagePath = req?.file?.path;
    // let url;
    // let imageId;
    // if (imagePath) {
    //   const imageUpload = await cloudinary.uploader.upload(imagePath);
    //   url = imageUpload?.secure_url
    //   imageId = imageUpload?.public_id
    // }
    const product = new ProductModel({
      name,
      price,
      description,
      // imageId,
      // image: url
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

const getAllProduct = async (_, res) => {
  try {
    const allProduct = await ProductModel.find({});
    return res.send({
      data: allProduct,
      message: 'Products Fetched Successfully'
    })
  } catch (error) {
    res.send({
      message: error
    })
  }
}

const deleteProduct = async (req, res) => {
  try {
    const { id } = req?.query;
    const findProduct = ProductModel.findOne({ _id: id });
    if (!findProduct) {
      return res.send({
        message: 'Invalid Product Id',
      });
    }
    if (findProduct?.imageId) {
      await cloudinary.uploader.destroy(findProduct.imageId)
    }
    await ProductModel.findByIdAndDelete(id);
    return res.send({
      message: 'Product Deleted Successfully',
    });
  } catch (error) {
    res.send({
      message: error
    })
  }
}

const updateProduct = async (req, res) => {
  try {
    const { name, price, description, id } = req.body;
    let imagePath = req.file?.path;
    let url;
    let imageId;
    const findProduct = ProductModel.findOne({ _id: id });
    if (imagePath) {
      if (findProduct?.imageId) {
        await cloudinary.uploader.destroy(findProduct?.imageId)
      }
      const imageUpload = await cloudinary.uploader.upload(imagePath);
      url = imageUpload?.secure_url
      imageId = imageUpload?.public_id
    }
    const product = {
      name,
      price,
      description,
    }
    if (imageId) {
      product.imageId = imageId;
      product.image = url;
    }
    await ProductModel.findByIdAndUpdate(id, product);
    res.send({
      message: 'Record Updated Successfully'
    })
  } catch (error) {
    res.send({
      message: error
    })
  }

}

export { createProduct, getAllProduct, deleteProduct, updateProduct };