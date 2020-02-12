let express = require('express');
let router = express.Router();
let DcPoint = require('./models.js');

router.get('/point', (req,res)=>{
    
    DcPoint.aggregate([
        {
            $geoNear: {
                near: {type:'Point', coordinates:[parseFloat(req.query.lng), parseFloat(req.query.lat)]},
                distanceField: "dist.calculated",
                maxDistance: 5000,
                spherical: true                
            }
        }
    ]).then(function(Locs){
        res.send(Locs)
    });
    
    
});

router.get('/point/:name', (req,res,next)=>{
    DcPoint.find({name:req.params.name}).then((data)=>{
        res.send(data);
    });
});

router.post('/point', (req,res,next)=>{
    
    DcPoint.create(req.body).then((data)=>{
        res.send(data);
    }).catch(next); 
});




module.exports = router;