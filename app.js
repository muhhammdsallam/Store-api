require('dotenv').config();
require('express-async-errors');


const express = require('express');
const app = express();
const connectDB = require('./db/connect');


const notFoundMiddleware = require('./middleware/not-Found');
const errorHandlerMiddleware = require('./middleware/error-Handler');


//middleware
app.use(express.json());

//routes
app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">Products</a>');
});
app.use('/api/v1/products', require('./routes/products'));

//products route
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server listening on port ${port}...`);
        })}
        catch (error) {
            console.log(error);
        }
     }

start();
