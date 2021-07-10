const express = require('express');
const goal = require('../models/goal');
const router = new express.Router();

router.get('/goals', async (req, res) => {
    try {
        const goals = await Goal.find({});
        res.status(200).send(notes);
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router;