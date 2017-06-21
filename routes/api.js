var express = require('express');
var router = express.Router();
var Ninja = require('../models/ninja');

//get a list of nijas from the database
router.get('/ninjas' , function(req, res, next){
    Ninja.geoNear(
        {
            type: 'Point',
            coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]
        },
        {
            maxDistance: 100000,
            spherical: true
        }
    ).then(function(ninja){
        res.send(ninja);
    });
});

//add a new ninja to the db
router.post('/ninjas' , function(req, res, next){
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);
    }).catch(next);
});

//update a ninja in the db
router.put('/ninjas/:id' , function(req, res, next){
    Ninja.findByIdAndUpdate({_id:req.params.id}, req.body).then(function(ninja){
        res.send(ninja);
    });
});

//delete a ninja from the db
router.delete('/ninjas/:id' , function(req, res, next){
    Ninja.findByIdAndRemove({_id:req.params.id}).then(function(ninja){
        res.send(ninja);
    });
});

module.exports = router;