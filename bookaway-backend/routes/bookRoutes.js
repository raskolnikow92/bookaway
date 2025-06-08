const express = require('express');
const { connectToDB } = require('../db/Connection');
const router = express.Router();

router.get('/book/:bookid', async (req, res)=>{
    try{
        const bookId = req.params.bookid;
        const db = await connectToDB();
        const collection = db.collection('books');
    }catch(err){

    }

})