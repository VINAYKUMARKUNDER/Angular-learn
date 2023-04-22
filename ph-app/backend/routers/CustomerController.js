const express = require('express');
const router = express.Router();

const db = require('../database')

const Customer = require('../models/CustomerModel');

// Get all customers
router.get('/', async (req, res) => {
  try {
    // const customers = await Customer.findAll();

    db.query('select * from customers', (err, result)=>{
        if(err)res.json(err="Error")
        else {
            console.log(result)
            res.status(200).json(result)
        }
    })
    // res.status(200).json(customers);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Get customer by id
router.get('/:id', async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id);
    if (!customer) {
      return res.status(404).json({ msg: 'Customer not found' });
    }
    res.status(200).json(customer);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Create new customer
router.post('/', async (req, res) => {
  try {
    const customer = await Customer.create(req.body);

    res.status(201).json(customer);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Update customer
router.get('/:id', async (req, res) => {
  try {
    const { name, email, phone, address } = req.body;
    let customer = await Customer.findByPk(req.params.id);
    if (!customer) {
      return res.status(404).json({ msg: 'Customer not found' });
    }
    customer.name = name;
    customer.email = email;
    customer.phone = phone;
    customer.address = address;
    await customer.save();
    res.status(200).json(customer);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Delete customer
router.get('/:id', async (req, res) => {
  try {
    let customer = await Customer.findByPk(req.params.id);
    if (!customer) {
      return res.status(404).json({ msg: 'Customer not found' });
    }
    await customer.destroy();
    res.status(200).json({ msg: 'Customer deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


module.exports=router;