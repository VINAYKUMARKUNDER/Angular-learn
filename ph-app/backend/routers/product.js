const express = require('express')
const app = express.Router();
const database = require('../database')

app.get('/',(req, resp)=>{
    database.query('select * from user',(err, res)=>{
        if(err)resp.send('error');
        else resp.send(res);
    })
})

module.exports= app;