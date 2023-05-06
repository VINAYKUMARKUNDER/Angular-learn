const express = require("express");
const router = express.Router();

const db = require("../database");
const Tool = require('../models/ToolModule')

// get all tools
router.get('/', async (req, res)=>{
    try {
        const allTool = await  Tool.findAll();
       return res.status(200).json(allTool);
    } catch (error) {
        return res.status(500).json('Internal server error...')
    }
      
});


// created new tool
router.post('/', async (req, res)=>{
    try {
        const createdData= await Tool.create(req.body);
        return res.status(201).json(createdData);
    } catch (error) {
        return res.status(500).json('Internal server error...');
    }
});



module.exports=router;