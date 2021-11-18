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


exports.animal_create_post = async function(req, res) {
    let document = new animal();
    document.ctype = req.body.ctype;
    document.cnum = req.body.cnum;
    document.location = req.body.location;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};



// for a specific animal. 
exports.animal_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await animal.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 



// Handle animal update form on PUT. 
exports.animal_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await animal.findById(req.params.id); 
        console.log(toUpdate,'Param');
        // Do updates of properties 
        if(req.body.ctype)  toUpdate.ctype = req.body.ctype; 
        if(req.body.cnum) toUpdate.cnum = req.body.cnum; 
        if(req.body.location) toUpdate.location = req.body.location; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 


exports.animal_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await animal.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 


exports.animal_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await animal.findById( req.query.id) 
        res.render('animaldetail',  
{ title: 'Animal Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 


exports.animal_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('animalcreate', { title: 'animal Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a animal. 
// query provides the id 
exports.animal_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await animal.findById(req.query.id) 
        res.render('animalupdate', { title: 'animal Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 
// Handle a delete one view with id from query 
exports.animal_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await animal.findById(req.query.id) 
        res.render('animaldelete', { title: 'animal Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 