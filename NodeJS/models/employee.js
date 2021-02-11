const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {
    name : {type : String},
    designation : {type : String},
    location : {type : String},
    salary : {type: Number}
}, "emp");

module.exports = { Employee };
