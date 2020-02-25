var express = require('express');
var router = express.Router();

router.get('/', function(req,res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/layout', (req,res) => {
  res.render('layout', {title: 'layout'})
}
)

module.exports = router;
