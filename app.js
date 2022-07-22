const express = require('express');
const cors = require('cors');



const {getAllProducts, acceptOrder} = require('./controllers');


const app = express();
app.use(express.static("img"));
app.use(express.json());

const corsOptions = {
    origin: '*'
}
// app.use();


app.get('/products', cors(corsOptions), getAllProducts);
app.post('/accept-order', cors(corsOptions), acceptOrder);

app.use((err, req, res, next) => {
    const { status = 500, message = "Server error" } = err;
    res.status(status).json({ message })
});
module.exports = app;