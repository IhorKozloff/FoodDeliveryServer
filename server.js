const app = require('./app');

const {PORT = 3002} = process.env;

app.listen(PORT)