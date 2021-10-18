
var express = require('express');
var router = express.Router();


router.get("/",function(req,res,next){
    res.send([
        { id: '1', name: 'Mango' },
        { id: '2', name: 'Grapes' },
        { id: '3', name: 'Jackfruit' },
        { id: '4', name: 'Pine apple' },
        { id: '5', name: 'Banana' },
        { id: '6', name: 'Orange' },
        { id: '7', name: 'Apple' },
        { id: '8', name: 'Litchi' },
        { id: '9', name: 'Watermelon' },
        { id: '10', name: 'Dates' },
       ]);
})

module.exports = router;