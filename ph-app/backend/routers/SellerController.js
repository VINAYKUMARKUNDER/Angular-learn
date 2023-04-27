const express = require("express");
const router = express.Router();
const db = require("../database");

const Seller = require("../models/SellerModel");

// GET all sellers
router.get("/", async (req, res) => {
  try {
    const sellers = await Seller.findAll();

   return  res.json(sellers);
  } catch (error) {
   return  res.status(500).json(error);
  }
});

// GET a seller by ID
router.get("/:id", async (req, res) => {
  try {
    // const seller= await  db.query(`select * from sellers where id = ${req.params.id}`)
    const seller = await Seller.findByPk(req.params.id);
    if (!seller) {
      return res
        .status(404)
        .json((error = "Seller is not found with seller id"));
    } else res.json(seller);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// POST a new seller
router.post("/", async (req, res) => {
  try {
    
    // const emaildata = await db.query(`select * from Sellers where email = '${req.body.email}'`);
   
    // if(Object.keys(emaildata[0][0]).length>2)return res.status(400).json(email= "email is already added...");
    const seller = await Seller.create(req.body);

    res.status(201).json(seller);
    
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
});

// PUT (update) a seller by ID
router.put("/:id", async (req, res) => {
  try {
    const seller = await Seller.update(
      {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        about: req.body.about,
        gst: req.body.gst,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    console.log(seller);
    if (seller[0] == 0) {
      return res.status(404).json({ msg: "Seller not found..." });
    } else return res.json({ msg: "updated..." });
  } catch (error) {
    return res.status(500).json(error + " something wrong");
  }
});

// DELETE a seller by ID
router.delete("/:id", async (req, res) => {
  try {
    const seller = await Seller.destroy({
      where: {
        id: req.params.id,
      },
    });
    // console.log(seller);
    if (seller == 0) {
      return res.status(404).json("Seller not found");
    } else return res.json({ msg: "delete successfully..." });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
