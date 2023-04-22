const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const medicineRouter = require('./routers/MedicineController.js')
const SellerRouter = require('./routers/SellerController.js')

app.user(bodyParser.json());
app.use('/api/v1/seller', SellerRouter);
app.use('/api/v1/medicine', medicineRouter);

app.listen(3000,()=>{
    console.log('port is running...')
});

