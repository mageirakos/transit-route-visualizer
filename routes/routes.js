const express = require('express')
const router = express.Router()
const Route = require('../models/Route')

router.get('/:onestopId', async(req, res) => {
    try {
        const route = await Route.find({ 'properties.onestop_id': req.params.onestopId })
        res.json(route[0]);
    } catch (err) {
        res.json({ error: err });
    }
});

router.get('/type/:vehicleType', async(req, res) => {
    try {
        const route = await Route.find({ 'properties.vehicle_type': req.params.vehicleType }, { '_id': 0, 'properties.onestop_id': 1, 'properties.tags.route_long_name': 1, 'geometry': 1 });
        res.json(route);
    } catch (err) {
        res.json({ error: err });
    }
});

module.exports = router