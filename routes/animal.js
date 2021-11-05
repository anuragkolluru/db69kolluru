var express = require('express');
var router = express.Router();

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
