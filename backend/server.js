const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');


dotenv.config();

const indexRoutes = require('./routes/index')

const app = express();

app.use(cors());
app.use(express.json())

const connectDB = require('./config/db');

connectDB()

const keepDbAlive = require('./cron/keepDbAlive');

app.use('/api', indexRoutes)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})