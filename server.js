const express = require('express');

const app = express();

require('./db/db');

app.get('/', (req,res) =>  res.send('Hello, Jeremy'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));



