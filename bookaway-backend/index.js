require('dotenv').config();
const express = require('express');
const { connectToDB } = require('./db/connection');
const app = express();
const PORT = 3001;

app.use(express.json());
connectToDB();

app.get('/', (req, res)=>{
    res.send('Hallo vom Backend!')
})



app.listen(PORT, () => {
    console.log(`Backend läuft auf Port: ${PORT}`);
})