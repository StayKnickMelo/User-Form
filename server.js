const express = require('express');

const connectDB = require('./config/db');

const app = express();

const path = require('path');

// Connect DB
connectDB();

// Init Middleware
app.use(express.json({extended: false}));




// Define Routes
app.use('/api/userform', require('./userform'));


// Serve static assets in production
if(process.env.NODE_ENV === 'production'){
  app.use(express.static('form/build'));

  app.get('*', (req,res)=> res.sendFile(path.resolve(__dirname, 'form', 'build', 'index.html')));
} 


const PORT = process.env.PORT || 6000;


app.listen(PORT, ()=> console.log(`Server Stated on port ${PORT} `));