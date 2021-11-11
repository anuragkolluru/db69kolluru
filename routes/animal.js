var express = require('express');
const animal_controlers= require('../controllers/animal'); 
var router = express.Router();

/* GET animal */ 
router.get('/', animal_controlers.animal_view_all_Page ); 
module.exports = router; 

class animal {
  constructor(ctype, cnum,location) {
    this.ctype = ctype;
    this.cnum = cnum;
    this.location = location;
  }
}

/* GET line page. */
router.get('/', function(req, res, next) {
  const animal1 = new animal('bear', 4, 'location');
  const animal2 = new animal('chimpu', 5, 'location');
  const animal3 = new animal('panda', 3, 'location');
  res.render('animal', {animal : [animal1, animal2, animal3]});
});

module.exports = router;
