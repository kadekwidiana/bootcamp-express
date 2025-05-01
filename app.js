const express = require('express');
const bodyParser = require('body-parser');
const bootcampRouter = require('./src/routes/bootcamp-router');
const errorHandler = require('./src/middleware/error');
const app = express();
const PORT = process.env.PORT || 5000;

// set body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// set routing
app.use('/api/bootcamp', bootcampRouter);

// set error middleware
app.use(errorHandler);

// buat server nya
app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));