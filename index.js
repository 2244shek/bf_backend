const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(cors());
app.use(bodyParser.json());

// Routes
const bfhlRoutes = require('./routes/bfhl');
app.use('/bfhl', bfhlRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
