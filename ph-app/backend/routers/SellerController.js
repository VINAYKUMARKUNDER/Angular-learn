const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const db = require('../database')

const Seller = require('../models/SellerModel');

// GET all sellers
router.get('/', async (req, res) => {
  try {
    const sellers = await Seller.findAll();
    res.json(sellers);
  } catch (error) {
    res.status(500).send(error);
  }
});

// GET a seller by ID
router.get('/:id', async (req, res) => {
  try {

    const seller= await  db.query(`select * from sellers where id = ${req.params.id}`)
    // const seller = await Seller.findById(req.params.id);
    if (JSON.stringify(seller) === '{}') {
      return res.status(404).json(error="Seller is not found with seller id");
    }
    else res.send(seller);
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
});

// POST a new seller
router.post('/',[
  body('name').not().isEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Email is not valid'),
], async (req, res) => {
  const errors = validationResult(req);
  try {
    const seller =await new Seller.create(req.body);
    res.status(201).json(seller);
  } catch (error) {
    return res.status(500).json({ errors: errors.array() });
  }
});

// PUT (update) a seller by ID
router.put('/:id', async (req, res) => {
  try {
    const seller = await Seller.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!seller) {
      return res.status(404).send('Seller not found');
    }
    res.send(seller);
  } catch (error) {
    res.status(500).send(error);
  }
});

// DELETE a seller by ID
router.delete('/:id', async (req, res) => {
  try {
    const seller = await Seller.findByIdAndDelete(req.params.id);
    if (!seller) {
      return res.status(404).send('Seller not found');
    }
    res.send(seller);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
