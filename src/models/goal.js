const mongoose = require("mongoose");

//define schema
const goalSchema = new mongoose.Schema({
    title: String,
    description: String
});

//create model
const Goal = mongoose.model('Goal', goalSchema);

//export model
module.exports = Goal;