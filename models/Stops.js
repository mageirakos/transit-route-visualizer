const mongoose = require('mongoose')

const PointSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true,
        default: 'Point'
    },
    coordinates: {
        // purposefully left not [[[Number]]]
        type: [Number],
        required: true
    }
});

const StopSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    geometry: {
        type: PointSchema,
        required: true
    },
    properties: {
        onestop_id: String,
        created_at: String,
        updated_at: String,
        tags: {
            stop_desc: String,
            osm_way_id: String
        },
        created_or_updated_in_changeset_id: Number,
        name: String,
        timezone: String,
        osm_way_id: Number,
        served_by_vehicle_types: {
            type: [String]
        },
        parent_stop_onestop_id: mongoose.Schema.Types.Mixed,
        wheelchair_boarding: mongoose.Schema.Types.Mixed,
        geometry_reversegeo: mongoose.Schema.Types.Mixed,
        geometry_centroid: {
            type: PointSchema
        },
        operators_serving_stop: [{
            operator_name: String,
            operator_onestop_id: String
        }],
        routes_serving_stop: [{
            operator_name: String,
            oprator_onestop_id: String,
            route_name: String,
            route_onestop_id: String
        }],
        tile: String,
        type: {
            type: String,
            default: "Feature"
        },
        id: String
    }
}, { collection: 'stops' });

//Index
StopSchema.index({ 'geometry.coordinates': '2Dsphere' });


module.exports = mongoose.model('Stops', StopSchema)