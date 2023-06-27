const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
require('dotenv').config();
const app = express();
const db = require('./config/key').MongoURI; // Requiring MongoDB URI from configuration file

// const MONGODB_URI = 'mongodb://127.0.0.1/ecommerce';

// Connect to MongoDB
// mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((error) => {
//     console.error('Failed to connect to MongoDB', error);
//   });


mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }) // Connecting to MongoDB
    .then(() => console.log("Successfully connected to MongoDB")) // On successful connection, log the success message
    .catch(err => console.log(err)); // On error, log the error message


// Middleware
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use(express.static('public'));

// Routes
app.use('/', productRoutes);
const PORT = process.env.PORT || 1432;

// Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://127.0.0.1:${port}`);
// });
app.listen(PORT, console.log(`Server running on PORT ${PORT}`)); // Starting the server and logging the success message
