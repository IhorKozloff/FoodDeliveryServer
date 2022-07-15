const fs = require("fs/promises");
const path = require("path");


const foodBasePath = path.join(__dirname, "../bases/", "foodBase.json")

const getAllProducts = async (req, res) => {
  
    const result = await fs.readFile(foodBasePath);
    res.json(JSON.parse(result));
}
module.exports = getAllProducts;