const express = require('express')
const app = express.Router();

app.get('/',(req, resp)=>{
    resp.send('welcome to first api');
})

module.exports(app);