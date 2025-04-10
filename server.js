const express = require('express');
const db_connection = require('./database');

const app = express();
const port = 8001;

db_connection();
app.listen(port, () => {
console.log(`Server is running at http://localhost:${port}`);
});