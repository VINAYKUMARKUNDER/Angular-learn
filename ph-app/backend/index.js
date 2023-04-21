const express = require('express')
const app = express();
const productRouter = require('./routers/product.js')

app.use('api/product', productRouter)

app.listen(2000);

