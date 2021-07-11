const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/time-budget', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to database');
}).catch(error => {
    console.log('Unable to connect to database');
})