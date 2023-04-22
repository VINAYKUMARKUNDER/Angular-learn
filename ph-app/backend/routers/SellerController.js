const express = require('express');
const router = express.Router();

const Seller = require('../models/SellerModel');

// GET all sellers
router.get('/', async (req, res) => {
  try {
    const sellers = await Seller.find();
    res.send(sellers);
  } catch (error) {
    res.status(500).send(error);
  }
});

// GET a seller by ID
router.get('/:id', async (req, res) => {
  try {
    const seller = await Seller.findById(req.params.id);
    if (!seller) {
      return res.status(404).send('Seller not found');
    }
    res.send(seller);
  } catch (error) {
    res.status(500).send(error);
  }
});

// POST a new seller
router.post('/', async (req, res) => {
  try {
    const seller =await new Seller.create(req.body);
    res.status(201).json(seller);
  } catch (error) {
    res.status(500).send(error);
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
