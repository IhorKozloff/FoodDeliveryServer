const express = require('express');
const cors = require('cors');



const {getAllProducts, acceptOrder} = require('./controllers');
require('dotenv').config();

const app = express();
app.use(cors({
    origin: ["http://localhost:3000/FoodDeliveryFrontendPart"],
}));
app.use(express.json());


app.use(express.static("img"));

app.get('/products', getAllProducts);
app.post('/accept-order', acceptOrder);

app.use((err, req, res, next) => {
    const { status = 500, message = "Server error" } = err;
    res.status(status).json({ message })
});
module.exports = app;