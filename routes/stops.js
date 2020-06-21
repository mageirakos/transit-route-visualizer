const express = require('express')

const router = express.Router()

const Stop = require('../models/Stops')

router.get('/:stopId', async(req, res) => {
    try {
        const stop = await Stop.findById(req.params.stopId);
        res.json(stop);
    } catch (err) {
        res.json({ error: err });
    }
});

// /stops-within/100/center/37.822039,23.802574/rout/:someId
router.get('/stops-within/:distance/center/:latlng/route/:route_onestop_id', async(req, res) => {
    try {
        const { distance, latlng, route_onestop_id } = req.params;
        const [lat, lng] = latlng.split(',');
        // distance / radious of earth in km to get in radians and distance / 1000 because input in meters
        const radius = distance / (1000 * 6378.1);
        // query
        if (route_onestop_id === "all") {
            const stops_within = await Stop.find({
                $and: [{
                    'geometry.coordinates': {
                        $geoWithin: {
                            $centerSphere: [
                                [lng, lat], radius
                            ]
                        },
                    }
                }, { 'properties.served_by_vehicle_types': { $in: ['bus'] } }]
            });
            res.status(200).json({
                status: 'success',
                results: stops_within.length,
                type: "FeatureCollection",
                features: stops_within
            });
        } else {
            const stops_within = await Stop.find({
                $and: [{
                    'geometry.coordinates': {
                        $geoWithin: {
                            $centerSphere: [
                                [lng, lat], radius
                            ]
                        },
                    }
                }, { 'properties.served_by_vehicle_types': { $in: ['bus'] } }, { 'properties.routes_serving_stop.route_onestop_id': route_onestop_id }]
            });
            res.status(200).json({
                status: 'success',
                results: stops_within.length,
                type: "FeatureCollection",
                features: stops_within
            });
        }
    } catch (err) {
        res.json({ error: err });
    }
})



module.exports = router