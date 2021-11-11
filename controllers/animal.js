var animal = require('../models/animal');

// List of all animal 
exports.animal_list = function (req, res) {
    res.send('NOT IMPLEMENTED: animal list');
};

// for a specific animal. 
exports.animal_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: animal detail: ' + req.params.id);
};

// Handle animal create on POST. 
exports.animal_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: animal create POST');
};

// Handle animal delete form on DELETE. 
exports.animal_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: animal delete DELETE ' + req.params.id);
};

// Handle animal update form on PUT. 
exports.animal_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: animal update PUT' + req.params.id);
};