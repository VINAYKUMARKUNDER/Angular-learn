const express = require("express");
const router = express.Router();
const multer = require('multer');
const app = express();
// app.use(cors());
const Medicine = require("../models/MedicineModel");

const db = require("../database");

// Get all medicines
router.get("/", async (req, res) => {
  try {
    const medicine = await Medicine.findAll();
    res.json(medicine);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
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


// get all exprie medicine alert before 1 month..
router.get("/al/alert/", async (req,res)=>{
 const data= await db.query(`SELECT * FROM medicine WHERE expdate > NOW() AND expdate <= DATE_ADD(NOW(), INTERVAL 1 MONTH)`, (err,result)=>{
      // return res.json(result)
  })


//  const data= await Medicine.(`SELECT * FROM medicine WHERE expdate > NOW() AND expdate <= DATE_ADD(NOW(), INTERVAL 1 MONTH`)

  console.log(data)
  res.status(200).json(data[0]);
})


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


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  }
});
const upload = multer({ storage });


router.post('/upload/', upload.single('image'), (req, res) => {
  console.log(req.file)
  res.json(req.file);
});



// return a product..
router.put('/re/return', async (req, res)=>{
  try {
    let product = req.body;
    console.log(product)
    const updatedUnitData= await db.query(`UPDATE medicine SET unit = unit + ${product.unit} WHERE id = ${product.id}`, (err, result)=>{});
    const updatedLeafData= await db.query(`UPDATE medicine SET totalLeafInOneBox = totalLeafInOneBox + ${product.totalLeafInOneBox} WHERE id = ${product.id}`, (err, result)=>{});
    const deletedData= await db.query(`DELETE FROM customer_order_history WHERE medicineId=${product.id}`, (err, result)=>{});

      return res.status(200).json('data return successfully...');
    
  } catch (error) {
    return res.status(500).json('Internal server error...');
  }
 
})

module.exports = router;
