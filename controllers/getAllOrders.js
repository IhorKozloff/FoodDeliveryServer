const fs = require("fs/promises");
const path = require("path");


const ordersBasePath = path.join(__dirname, "../bases/", "ordersBase.json")

const getAllOrders = async (req, res) => {
  
    const result = await fs.readFile(ordersBasePath);
    res.json(JSON.parse(result));
}
module.exports = getAllOrders;