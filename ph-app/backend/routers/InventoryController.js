const express = require("express");
const router = express.Router();
const db = require("../database");

const Inventory = require("../models/InventoryModel");

// GET all Inventory
router.get("/", async (req, res) => {
  try {
    const Inventorys = await Inventory.findAll();
    if (!Inventorys) return res.status(400).json({ msg: "server error..." });
    else return res.status(200).json(Inventorys);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// GET one inventory by id
router.get("/:id", async (req, res) => {
  try {
    const Inventorys = await Inventory.findByPk(req.params.id);
    if (!Inventorys)
      return res.status(400).json({ msg: "Invemtory is not find with id..." });
    else return res.status(200).json(Inventorys);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// CREATE a Inventory
router.post("/", async (req, res) => {
  try {
    const createInventory = await Inventory.create(req.body);
    if (!createInventory) return res.status(400).json("not created...");
    else return res.status(201).json(createInventory);
  } catch (error) {
    return res.status(500).json(error);
  }
});

//UPDATE Inventory by id
router.put("/:id", async (req, res) => {
  try {
    const UpdateInventory = await Inventory.update(
      {
        quantity: req.body.quantity,
        unitPrice: req.body.unitPrice,
        medicineId: req.body.medicineId,
        dateAdded: req.body.dateAdded,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    if(UpdateInventory[0]==0)return res.status(401).json('not updated..')
    else return res.status(200).json('updateed...')
  } catch (error) {
    return res.status(500).json(error)
  }
});



module.exports = router;
