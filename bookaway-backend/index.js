require('dotenv').config();
const express = require('express');
const { connectToDB } = require('./db/Connection');

const app = express();
const PORT = 3001;

app.use(express.json());
connectToDB();

app.get('/', (req, res)=>{
    res.send('Hallo vom Backend!')
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend läuft auf Port: ${PORT}`);
});