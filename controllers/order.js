const { orders, addOrder } = require('../models/order')

function getOrders(req, res, next) {
        res.json(orders);
}

function getOrderById(req, res, next) {
    res.json(orders.find(order => order.id == req.params.orderId) ?? {
        message: "No order found"
    });
}

function createNewOrder(req,res,next){
    const body=req.body;
res.json(addOrder(body));
}
module.exports = {
    getOrders,
    getOrderById,
    createNewOrder
}