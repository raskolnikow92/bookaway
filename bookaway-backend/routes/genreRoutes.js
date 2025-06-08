const express = require('express');
const { connectToDB } = require('../db/Connection');
const router = express.Router();


router.get("/:genreName", async (req, res)=> {
    try{
        const genreName = req.params.genreName;
        const db = await connectToDB();
        const collection = db.collection("books");
        const result = await collection.find({ genre: genreName }).toArray();
        return res.send(result);
    }catch(err){
        console.log(err);
        return res.status(500).send(err);
    }
    
})

module.exports = router;