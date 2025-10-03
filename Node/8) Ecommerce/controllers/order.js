import OrderModel from "../models/order.js";

const createOrder = async (req, res) => {
  try {
    const { user, orderItems, totalPrice } = req?.body;
    const newOrder = new OrderModel({
      user,
      orderItems,
      totalPrice
    })

    await newOrder.validate();
    const response = await newOrder.save()
    return res.send({
      message: 'Order Created Successfully',
      order: response?._id
    })
  } catch (error) {
    return res.send({
      message: error
    })
  }

};

const deleteOrder = async (req, res) => {
  try {
    const { id } = req?.query;
    await OrderModel.findByIdAndDelete(id);
    return res.send({
      message: "Order Deleted Successfully"
    })
  } catch (error) {
    return res.send({
      message: error
    })
  }
}

const getAllOrder = async (req, res) => {
  try {
    const allOrders = await OrderModel.find({})
      .populate('user')
      .populate('orderItems.product');
    return res.send({
      data: allOrders,
      message: 'Orders Fetched Successfully'
    })
  } catch (error) {
    return res.send({
      message: error
    })
  }

}

export { createOrder, deleteOrder, getAllOrder };