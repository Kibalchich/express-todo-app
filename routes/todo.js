const { router } = require('express');

const router = router();

router.get('/', function (req, res) {
  res.send('Get todo items');
});

router.post('/', function (req, res) {
  res.send('Post todo item');
});

module.exports = router;
