const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3001;


app.get('/', (req, res)=>{
    res.send('Hallo vom Backend!')
})



app.listen(PORT, () => {
    console.log(`Backend läuft auf Port: ${PORT}`);
})