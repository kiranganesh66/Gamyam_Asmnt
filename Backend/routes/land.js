const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
    const { page } = req.query;
    try {
        const response = await axios.get('https://prod-be.1acre.in/lands/', {
            params: {
                division: 24,
                page_size: 10,
                page,
                ordering: '-updated_at',
            },
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data from external API:', error);
        res.status(500).send('Error fetching land data');
    }
});

module.exports = router;
