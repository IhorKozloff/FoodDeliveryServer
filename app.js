const express = require('express');
const cors = require('cors');



const {getAllProducts, acceptOrder, getAllOrders} = require('./controllers');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());


app.use(express.static("img"));

app.get('/products', getAllProducts);
app.get('/orders', getAllOrders);
app.post('/accept-order', acceptOrder);

app.use((err, req, res, next) => {
    const { status = 500, message = "Server error" } = err;
    res.status(status).json({ message })
});
module.exports = app;