const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const medicineRouter = require('./routers/MedicineController.js')
const SellerRouter = require('./routers/SellerController.js')
const CustomerRouter = require('./routers/CustomerController.js')

app.use(bodyParser.json());
app.use('/api/v1/seller', SellerRouter);
app.use('/api/v1/medicine', medicineRouter);
app.use('/api/v1/customer', CustomerRouter);

app.listen(3000,()=>{
    console.log('port is running...')
});

