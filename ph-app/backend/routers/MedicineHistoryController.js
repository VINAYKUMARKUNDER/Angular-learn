
const express = require("express");
const router = express.Router();
const multer = require('multer');
const app = express();
// app.use(cors());
const MedicineHistory = require("../models/MedicineHistoryModule");

const db = require("../database");

// Create a new medicineHistory
router.post("/", async (req, res) => {
    console.log(req.body)
    try {
      const medicine = await MedicineHistory.create(req.body);
      res.status(201).json(medicine);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error });
    }
  });



  module.exports = router;