const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Instantiate the server
const PORT = process.env.PORT || 3001;
const app = express();

// path to public directory
app.use(express.static('public'));
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// Tell server to begin listening 
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
