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
  try {
    const medicine = await Medicine.create(req.body);
    res.status(201).json(medicine);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// Update a medicine
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { name, description, price } = req.body;
  try {
    const medicine = await Medicine.findByPk(id);
    if (medicine) {
      medicine.name = name;
      medicine.description = description;
      medicine.price = price;
      await medicine.save();
      res.json(medicine);
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
