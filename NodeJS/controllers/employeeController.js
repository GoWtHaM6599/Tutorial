const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Employee } = require('../models/employee');

router.get('/', (req, res) => {
    Employee.find((err, docs) => {
        if(!err){ res.send(docs); }
        else { console.log(' Error in retrieving employees : ' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        res.status(400).send(`No record with given id : ${req.params.id}`);
    
    Employee.findById(req.params.id, (err, doc) => {
        if(!err) {
            res.send(doc);
        }
        else {
            console.log('Error in Retriving employee : '+JSON.stringify(err, undefined, 2));
        }
    });
});

router.post('/', (req, res) => {
    var emp = new Employee({
        name : req.body.name,
        designation : req.body.designation,
        location : req.body.location,
        salary : req.body.salary
    });
    emp.save((err, doc) => {
        if(!err){ res.send(doc); }
        else { console.log(' Error in Employee save : ' + JSON.stringify(err, undefined, 2)); }
    })
})
module.exports = router;
