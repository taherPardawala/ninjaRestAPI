var mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create geo location schema
const GeoSchema = new Schema({
    type: {
        type: String,
        default: "point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
});
// create ninja schema and model
const NinjaSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required'],
    },
    rank: {
        type: String
    },
    available:{
        type: Boolean,
        default: false
    },
    geometry: GeoSchema
});

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;

/*
{
    "name": "Test1",
    "rank": "pink belt",
    "available": true,
    "geometry": {
        "type": "Point"
        "coordinates": [-81.1, 24.95]    
    }
}

{
    "name": "Test2",
    "rank": "blue belt",
    "available": true,
    "geometry": {
        "type": "Point",
        "coordinates": [-80.245, 25.391]    
    }
}

{
    "name": "Test3",
    "rank": "brown belt",
    "available": true,
    "geometry": {
        "type": "Point",
        "coordinates": [-80.789, 25.701]    
    }
}

{
    "name": "Test4",
    "rank": "green belt",
    "available": true,
    "geometry": {
        "type": "Point",
        "coordinates": [-82.589, 26.701]    
    }
}

{
    "name": "Test5",
    "rank": "yellow belt",
    "available": true,
    "geometry": {
        "type": "Point",
        "coordinates": [-80, 25.791]    
    }
}

{
    "name": "Test6",
    "rank": "orange belt",
    "available": true,
    "geometry": {
        "type": "Point",
        "coordinates": [-81.1, 24.95]    
    }
}

{
    "name": "Test7",
    "rank": "purple belt",
    "available": true,
    "geometry": {
        "type": "Point",
        "coordinates": [-81.1, 24.95]    
    }
}
*/