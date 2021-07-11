const express = require('express');
const goalRouter = require('./routers/goal');

require('./db/mongoose');
const app = express();

app.use(express.json());

app.use(goalRouter);

app.listen(3000, () => {
   console.log('app is running on port 3000'); 
})