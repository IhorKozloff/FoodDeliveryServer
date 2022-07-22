const express = require('express');
const cors = require('cors');



const {getAllProducts, acceptOrder} = require('./controllers');


const app = express();

app.use(express.json());
app.use(cors({
    origin: true,
    credentials: true,
}));
app.use(express.static("img"));

app.get('/products', getAllProducts);
app.post('/accept-order', acceptOrder);

app.use((err, req, res, next) => {
    const { status = 500, message = "Server error" } = err;
    res.status(status).json({ message })
});
module.exports = app;