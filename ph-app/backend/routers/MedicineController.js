const express = require("express");
const router = express.Router();
const Medicine = require("../models/MedicineModel");

const db = require("../database");

// Get all medicines
router.get("/", async (req, res) => {
  try {
    const medicine = await Medicine.findAll();
    res.json(medicine);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// Get a single medicine
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const medicine = await Medicine.findByPk(id);
    if (medicine) {
      res.json(medicine);
    } else {
      res.status(404).json({ message: "Medicine not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// Create a new medicine
router.post("/", async (req, res) => {
  console.log(req.body)
  try {
    const medicine = await Medicine.create(req.body);
    res.status(201).json(medicine);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
});

// Update a medicine
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const medicine = await Medicine.findByPk(id);
    if (medicine) {
    console.log(req.body) 
     const updateedMedicine = await Medicine.update(
      {
      about :req.body.about,
      batchid:req.body.batchid,
      expdate:req.body.expdate,
      mfgcompany:req.body.mfgcompany,
      mfgdate :req.body.mfgdate,
      numberOfItemInOneLeaf :req.body.numberOfItemInOneLeaf,
      price :req.body.price,
      productName:req.body.productName,
      sellerId :req.body.sellerId,
      totalLeafInOneBox :req.body.totalLeafInOneBox,
      type :req.body.type,
      unit :req.body.unit
      },
     {
      where: {
        id: req.params.id,
      },
    }
     
     );
      res.json(updateedMedicine);
    } else {
      res.status(404).json({ message: "Medicine not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// Delete a medicine
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const medicine = await Medicine.findByPk(id);
    if (medicine) {
      await medicine.destroy();
      res.json({ message: "Medicine deleted successfully" });
    } else {
      res.status(404).json({ message: "Medicine not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
