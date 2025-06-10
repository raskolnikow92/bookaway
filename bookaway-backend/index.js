require('dotenv').config();
const express = require('express');
const { connectToDB } = require('./db/Connection');
const genreRoutes = require('./routes/genreRoutes');
const bookRoutes = require('./routes/bookRoutes');
const cors = require('cors');

const app = express();
const PORT = 3001;
app.use(cors());

app.use(express.json());
connectToDB();

app.get('/', (req, res)=>{
    res.send('Hallo vom Backend!')
})

app.use('/api/genre', genreRoutes);
app.use('/api/book', bookRoutes);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend läuft auf Port: ${PORT}`);
});