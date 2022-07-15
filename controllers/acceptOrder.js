const fs = require("fs/promises");
const path = require("path");
const uniqid = require('uniqid');
const Joi = require('joi'); 
const createError = require('../helpers/createError');



const orderBasePath = path.join(__dirname, "../bases/", "ordersBase.json")


const acceptOrder = async (req, res, next) => {
    


try {
    const { error } = orderAddSchema.validate(req.body);
    if (error) {
        throw createError(400, error.message)
    }


    const orderId = uniqid();
    const identificatedOrder = {...req.body, orderId }

    const result = await fs.readFile(orderBasePath);
    const orders = JSON.parse(result);
    orders.push(identificatedOrder);

    await fs.writeFile(orderBasePath, JSON.stringify(orders));

    res.send({message: `Order is accepted`, number: orderId})
} catch (err) {
    next(err)
}

    
}

const orderAddSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    adress: Joi.string().required(),
    totalPrice: Joi.number().required(),
    userOrder: Joi.array().required(),

});

module.exports = acceptOrder;

