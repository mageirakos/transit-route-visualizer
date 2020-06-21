const mongoose = require('mongoose')

const MultiLineStringSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['MultiLineString'],
        required: true,
        default: 'MultiLineString'
    },
    coordinates: {
        // purposefully left not [[[Number]]]
        type: [],
        required: true
    }
});

const RouteSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    geometry: {
        type: MultiLineStringSchema,
        required: true
    },
    properties: {
        onestop_id: String,
        created_at: String,
        updated_at: String,
        tags: {
            route_color: String,
            route_long_name: String,
            route_text_color: String
        },
        created_or_updated_in_changeset_id: Number,
        name: String,
        vehicle_type: String,
        color: String,
        stops_served_by_route: [{
            stop_onestop_id: String,
            stop_name: String
        }],
        operated_by_onestop_id: String,
        operated_by_name: String,
        whellchair_accessible: String,
        bikes_allowed: String,
        route_stop_patterns_by_onestop_id: {
            type: [String]
        },
        type: {
            type: String,
            default: "Feature"
        },
        id: String
    }
}, { collection: 'routes' });

module.exports = mongoose.model('Routes', RouteSchema)