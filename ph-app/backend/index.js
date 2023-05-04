const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const medicineRouter = require('./routers/MedicineController.js');
const SellerRouter = require('./routers/SellerController.js');
const CustomerRouter = require('./routers/CustomerController.js');
const InvoiceRouter = require('./routers/InvoiceController.js');
const InventoryRouter = require('./routers/InventoryController.js');
const CartRouter = require('./routers/CartController.js');
const Customer_Order_History = require('./routers/CustomerOrderHistoryController.js')
const db = require('./database.js');

app.use(cors());

app.use(bodyParser.json());
app.use('/api/v1/seller', SellerRouter);
app.use('/api/v1/medicine', medicineRouter);
app.use('/api/v1/customer', CustomerRouter);
app.use('/api/v1/invoice', InvoiceRouter);
app.use('/api/v1/inventory', InventoryRouter);
app.use('/api/v1/cart', CartRouter);
app.use('/api/v1/order', Customer_Order_History);

app.listen(3000,()=>{
    console.log('port is running...');
});


// db.query('select * from medicine',(err, resq)=>{
//     console.log(err);
//   })
