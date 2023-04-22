const express = require("express");
const router = express.Router();
const db = require("../database");

const Invoice = require("../models/InvoiceModel");
const Medicine = require("../models/MedicineModel");
const Customer = require("../models/CustomerModel");

// Get all invoices
router.get("/", async (req, res) => {
  try {
    const invoices = await Invoice.findAll({
      include: [
        { model: Medicine, attributes: ["productName", "price"] },
        { model: Customer, attributes: ["name", "email"] },
      ],
      attributes: ["id", "invoiceDate", "totalAmount"],
    });
    res.json(invoices);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific invoice by id
router.get("/:id", async (req, res) => {
  try {
    const invoice = await Invoice.findByPk(req.params.id, {
      include: [
        { model: Medicine, attributes: ["productName", "price"] },
        { model: Customer, attributes: ["name", "email"] },
      ],
    });
    if (!invoice) {
      return res.status(404).json({ message: "Invoice not found" });
    }
    res.json(invoice);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new invoice
router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const invoice = await Invoice.create(req.body);
    res.status(201).json(invoice);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update an existing invoice by id
router.put("/:id", async (req, res) => {
  try {
    const { customerId, medicineId, invoiceDate, totalAmount } = req.body;
    const invoice = await findById(req.params.id);
    if (!invoice) {
      return res.status(404).json({ message: "Invoice not found" });
    }
    await invoice.update({
      customerId,
      medicineId,
      invoiceDate,
      totalAmount,
    });
    res.json(invoice);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete an existing invoice by id
// router.delete("/:id", async (req, res) => {
//   try {
//     const invoice = await Invoice.findById(req.params.id);
//     if (!invoice) {
//       return res.status(404).json({ message: "Invoice not found" });
//     }
//     await invoice.destroy();
//     res.json({ message: "Invoice deleted successfully" });
//   } catch (error) {
//     res.status(400).json({ message: err.message });
//   }
// });

module.exports = router;
