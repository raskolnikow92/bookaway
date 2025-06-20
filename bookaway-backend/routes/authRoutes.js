const express = require('express');
const dotenv = require('dotenv');
const { connectToDB } = require('../db/Connection');
const { ObjectId } = require('mongodb');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

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
        const insertedUser = await userCollection.insertOne({...user, createdAt: new Date()});
        const payload = {
            user: {
                id: insertedUser.insertedId,
            },
        }
        const authToken = jwt.sign(payload, JWT_SECRET);
        res.status(200).json({authToken, email});
    }catch(err){
        return res.status(500).send('Internal server error');
    }
})

router.post('/login', async(req, res)=>{
    try{
        const { email, password} = req.body;
        if(!email){
            return res.status(400).json({error: 'No email'});
        }
        const db = connectToDB();
        const userCollection = db.collection('users');
        const potentialUser = await userCollection.findOne({email});
        if(!potentialUser){
            return res.status(400).json({error: 'User not found'});
        }
        const result = await bcryptjs.compare(password, potentialUser.password);
        if(!result){
            return res.status(400).json({error: 'Wrong password'});
        }
        const payload = {
            user: {
                id: potentialUser._id.toString(),
            }
        }
        const authToken = jwt.sign(payload, JWT_SECRET);
        return res.json({authToken, email});
    }catch(err){
        return res.status(400).json({error: 'Login not successful'})
    }
})