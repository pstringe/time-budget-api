const express = require('express');
const Goal = require('../models/goal');
const router = new express.Router();

router.get('/goals', async (req, res) => {
    try {
        const goals = await Goal.find({});
        res.status(200).send(goals);
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router;