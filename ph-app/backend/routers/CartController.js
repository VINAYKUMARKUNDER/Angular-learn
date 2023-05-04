const express = require("express");
const router = express.Router();

const db = require("../database");

const cart = require('../models/CartModule')
const Customer = require('../models/CustomerModel')
const Medicine = require('../models/MedicineModel')


// get all cart data
router.get('/', async (req,res)=>{
    try {
        const data = await cart.findAll();
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(err="servere error...")
    }
})



// get by customer id all card data...
router.get('/:customerId', async (req,res)=>{
    try {

        const all=[];
        const data = await db.query(`SELECT * FROM customers WHERE id = ${req.params.customerId}`,(err, result)=>{

        });

        const medicineData = await db.query(`select medicine.* from cart left join medicine  ON cart.medicineId=medicine.id AND cart.customerID=${req.params.customerId}`, (err, result)=>{

        })

        all.push(data[0]);
        all.push(medicineData[0]);
        // console.log(all)

        return res.status(200).json(all);
    } catch (error) {
        return res.status(500).json(err="server error...!!")
    }
});



// add a entry in cart
router.post('/', async (req, res)=>{
    console.log(req.body)
    try {
        const data= cart.create(req.body);
        return res.status(201).json(data);
    } catch (error) {
        return res.json(500).json(err="internal server error...")
    }
});




module.exports = router;





