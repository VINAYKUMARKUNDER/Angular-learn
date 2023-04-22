const express = require('express')
const app = express();
const productRouter = require('./routers/product.js')

app.use('/api/v1', productRouter)

app.listen(3000,()=>{
    console.log('port is running...')
});

