const express = require('express');
const fs = require('fs');
const path = require('path');
const pool = require('../database/db');

const router = express.Router();


router.post('/makeCategory', (req, res, next)=>{
    try{

        //1. posts 디렉토리에 해당 카테고리 폴더 만들고
        const newDirPath = path.resolve( 'posts', req.body.name);
        console.log(newDirPath);
        fs.mkdirSync(newDirPath, { recursive: false });
        //2. 해당 카테고리 posts 스키마에 table로 만들기
        
        //3. 제대로 되면 message:ok json보내기
        res.json({message:'ok'});
    }
    catch(err){
        next(err);
    }
});

module.exports = router;