const express = require('express');
const { connectToDB } = require('../db/Connection');
const { ObjectId } = require('mongodb');
const router = express.Router();

router.get('/:bookid', async (req, res)=>{
    try{
        const bookId = req.params.bookid;
        console.log(bookId);
        const db = await connectToDB();
        const collection = db.collection('books');
        const data = await collection.findOne({_id: new ObjectId(bookId)});
        console.log(data)
        return res.json(data);
    }catch(err){
        console.log(err);
        return res.status(500).send(err);
    }

})

module.exports = router;