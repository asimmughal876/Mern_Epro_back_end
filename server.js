const express = require('express');
const db_connection = require('./database');
const cors = require('cors');
const router = require('./routes/routes');

const app = express();
const port = 8001;

app.use(express.json());
app.use(cors());

app.use("/",router);


db_connection();
app.listen(port, () => {
console.log(`Server is running at http://localhost:${port}`);
});