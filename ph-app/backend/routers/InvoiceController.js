const express = require("express");
const router = express.Router();
const db = require('../database')

const Invoice = require("../models/InvoiceModel");
const Medicine = require("../models/MedicineModel");
const Customer = require("../models/CustomerModel");

// Get all invoices
router.get("/", async (req, res) => {
  try {
    const invoices = await db.query(`SELECT Invoice.*, customer.*, medicine.*
    FROM invoices AS Invoice LEFT OUTER JOIN medicine AS medicine ON 
    Invoice.medicine_Id = medicine.id LEFT 
    OUTER JOIN customers AS customer ON Invoice.customer_id = customer.id` ,(err, res)=>{
      return res;
    });

    console.log(invoices)
    return res.json(invoices[0]);
  } catch (err) {
   return  res.status(500).json({ message: err.message });
  }
});

// Get a specific invoice by id
router.get("/:id", async (req, res) => {
  try {
    const invoice = await db.query(`SELECT Invoice.*, customer.*, medicine.*
    FROM invoices AS Invoice LEFT OUTER JOIN medicine AS medicine ON 
    Invoice.medicine_Id = medicine.id LEFT 
    OUTER JOIN customers AS customer ON Invoice.customer_id = customer.id where Invoice.id= ${req.params.id}` ,(err, res)=>{
      return res;
    });
    if (invoice[0].length==0) {
      return res.status(404).json({ message: "Invoice not found" });
    }
    return res.json(invoice[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new invoice
router.post("/", async (req, res) => {
  try {
    const { customer_id, medicine_id, invoice_date, total_amount } = req.body;
    const invoice = await Invoice.create({
      customer_id,
      medicine_id,
      invoice_date,
      total_amount,
    });
    res.status(201).json(invoice);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update an existing invoice by id
router.patch("/:id", async (req, res) => {
  try {
    const { customer_id, medicine_id, invoice_date, total_amount } = req.body;
    const invoice = await findById(req.params.id);
    if (!invoice) {
      return res.status(404).json({ message: "Invoice not found" });
    }
    await invoice.update({
      customer_id,
      medicine_id,
      invoice_date,
      total_amount,
    });
    res.json(invoice);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete an existing invoice by id
router.delete("/:id", async (req, res) => {
  try {
    const invoice = await Invoice.findById(req.params.id);
    if (!invoice) {
      return res.status(404).json({ message: "Invoice not found" });
    }
    await invoice.destroy();
    res.json({ message: "Invoice deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: err.message });
  }
});

let findById =(id)=>{
    db.query(`Select * from invoices where id= ${id}`, (err, result)=>{
      if(err)return err;
      else return result;
    })
}

module.exports=router;
