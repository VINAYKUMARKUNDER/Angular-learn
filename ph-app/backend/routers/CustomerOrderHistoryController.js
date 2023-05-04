const express = require("express");
const router = express.Router();

const db = require("../database");

const Order = require('../models/CustomerOrderHistoryModule')
const Customer = require('../models/CustomerModel')
const Medicine = require('../models/MedicineModel')


// get all history data
router.get('/', async (req,res)=>{
    try {
        const data = await Order.findAll();
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(err="servere error...")
    }
})



// get by customer id all History data...
router.get('/:customerId', async (req,res)=>{
    try {

        const medicineData = await db.query(`select orderId,medicine.* from customer_order_history left join medicine  
        ON customer_order_history.medicineId=medicine.id AND customer_order_history.customerID=${req.params.customerId}`, (err, result)=>{

        })
        return res.status(200).json(medicineData);
    } catch (error) {
        return res.status(500).json(err="server error...!!")
    }
});



// add a entry in Customer order history.
router.post('/', async (req, res)=>{
    // console.log(req.body)
    try {
        const data= Order.create(req.body);
        return res.status(201).json(data);
    } catch (error) {
        return res.json(500).json(err="internal server error...")
    }
});




module.exports = router;





