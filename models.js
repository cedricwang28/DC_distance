let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let GeoSchema = new Schema({
    type:{
        type:String,
        default:"Point"
    },
    coordinates:{
        type:[Number],
        index:"2dsphere"
    }
});

let DcSchema = new Schema({
    name:{
        type:String,
        required:[true,'name is required']
    },
    geometry: GeoSchema
});

let DcPoint = mongoose.model('DcPoint',DcSchema);

module.exports = DcPoint;