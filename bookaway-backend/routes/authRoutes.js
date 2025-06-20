const express = require('express');
const { connectToDB } = require('../db/Connection');
const { ObjectId } = require('mongodb');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/register', async(req, res)=>{
    try{
        const {username, email, password} = req.body;
        const db = await connectToDB();
        const userCollection = db.collection('users');
        const potentialUser = await userCollection.findOne({username});
        if(potentialUser){
            return res.status(400).json({error: 'Email already exists'});
        }
        const salt = await bcryptjs.genSalt(10);
        const hash = await bcryptjs.hash(password, salt);
        const user = {username, email, password: hash};
        userCollection.insertOne(user);
        res.status(200).json()
    }
})