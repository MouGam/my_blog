const express = require('express');
const pool = require('../db');

const router = express.Router();


router.post('/makeCategory', (req, res, next)=>{
    try{
        console.log(req.body.name);


        res.json({message:'ok'});
    }
    catch(err){
        next(err);
    }
});

module.exports = router;