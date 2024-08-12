const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./config/db');
const bannerRoutes = require('./routes/bannerRoutes');


const app = express();
app.use(cors());
app.use(express.json());

app.use('/banner', bannerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
