const express = require("express");
const router = express.Router();

const db = require("../database");

const Customer = require("../models/CustomerModel");

// Get all customers
router.get("/", async (req, res) => {
  try {
    const customers = await Customer.findAll();
    return res.status(200).json(customers);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json("Server Error");
  }
});

// Get customer by id
router.get("/:id", async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id);
    console.log(customer);
    if (!customer) {
      return res.status(404).json({ msg: "Customer not found" });
    }
    res.status(200).json(customer);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error");
  }
});

// Create new customer
router.post("/", async (req, res) => {
  try {
    const customer = await Customer.create(req.body);

    res.status(201).json(customer);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error");
  }
});

// Update customer
router.put("/:id", async (req, res) => {
  try {
    const customer = await Customer.update(
      {
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address,
        password:req.body.password
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    console.log(customer);
    if (customer[0] == 0) {
      return res.status(404).json({ msg: "customer not found..." });
    } else return res.json({ msg: "updated..." });
  } catch (error) {
    return res.status(500).json(error + " something wrong");
  }
});

// Delete customer
router.delete("/:id", async (req, res) => {
  try {
    let customer = await Customer.findByPk(req.params.id);
    console.log(customer)
    if (!customer) {
      return res.status(404).json({ msg: "Customer not found..." });
    }
    await customer.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Customer deleted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error");
  }
});



module.exports = router;
