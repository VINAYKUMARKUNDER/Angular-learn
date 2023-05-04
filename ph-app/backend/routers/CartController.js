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
        const data = await db.query(`SELECT * FROM cart WHERE customerId = ${req.params.customerId}`,(err, result)=>{

        });
        return res.status(200).json(data);
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





