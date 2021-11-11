var animal = require('../models/animal');

// List of all animal 
exports.animal_list = async function(req, res) { 
    try{ 
        theanimal = await animal.find(); 
        res.send(theanimal); 
    } 
    catch(err){ 
        
        res.send(`{"error": ${err}}`); 
        res.status(500); 
    }   
};

// VIEWS 
// Handle a show all view 
exports.animal_view_all_Page = async function(req, res) { 
    try{ 
        theanimal = await animal.find(); 
        res.render('animal', { title: 'animal Search Results', results: theanimal }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// for a specific animal. 
exports.animal_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: animal detail: ' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.animal_view_all_Page = async function (req, res) {
    try {
        theanimal = await animal.find();
        res.render('animal', { title: 'animal Search Results', results: theanimal });
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};

// Handle animal delete form on DELETE. 
exports.animal_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: animal delete DELETE ' + req.params.id);
};

// Handle animal update form on PUT. 
exports.animal_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: animal update PUT' + req.params.id);
};