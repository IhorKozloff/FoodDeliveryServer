const app = require('./app');

const {HOST = 3002} = process.env;

app.listen(HOST)