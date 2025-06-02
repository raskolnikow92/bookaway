const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3001;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("✅ Mit MongoDB verbunden");
}).catch(err => {
  console.error("❌ Mongo-Verbindungsfehler:", err);
});

app.get('/', (req, res)=>{
    res.send('Hallo vom Backend!')
})

app.listen(PORT, () => {
    console.log(`Backend läuft auf Port: ${PORT}`);
})