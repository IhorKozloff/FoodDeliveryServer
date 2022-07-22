const app = require('./app');



app.listen(process.env.HOST, () => {
    console.log(`Server running. Use our API on port: ${process.env.HOST}`)
})