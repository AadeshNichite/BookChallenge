const express =require('express');

const connectDB = require('./config/db')

const app = express();

const CORS = require('cors');

//Connect Database
connectDB();

//Init Middleware
app.use(express.json({extended: false}));

app.use(CORS());

app.get('/', (req,res)=>res.send('API is Running'));

//Define Routes

app.use('/api/bookProfile', require('./routes/api/bookProfile'));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {console.log(`Port ${PORT} running on browser...`)});


  