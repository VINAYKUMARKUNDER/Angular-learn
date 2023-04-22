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
    res.status(500).json(error);
  }
});

// GET a seller by ID
router.get('/:id', async (req, res) => {
  try {

    // const seller= await  db.query(`select * from sellers where id = ${req.params.id}`)
    const seller = await Seller.findByPk(req.params.id);
    if (!seller) {
      return res.status(404).json(error="Seller is not found with seller id");
    }
    else res.json(seller);
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
});

// POST a new seller
router.post('/', async (req, res) => {
  try {
      // console.log(req.body)

    const seller =await Seller.create(req.body);
    console.log(seller)
    res.status(201).json(seller);
  } catch (error) {
    return res.status(500).json({ errors:error});
  }
});

// PUT (update) a seller by ID
router.put('/:id', async (req, res) => {
  try {
    // console.log(req.body)
    const seller = await Seller.update( req.body);
    console.log(seller)
    if (!seller) {
      return res.status(404).json('Seller not found');
    }
    res.json(seller);
  } catch (error) {
    res.status(500).json(error);
  }
});

// DELETE a seller by ID
router.delete('/:id', async (req, res) => {
  try {

   await db.query(`DELETE FROM sellers where id =${req.params.id}`,(err, resp)=>{
      console.log(resp)
    })
  //   const seller = await Seller.delete(req.params.id)
  //   if (!seller) {
  //     return res.status(404).json('Seller not found');
  //   }
  //   res.json(seller);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
