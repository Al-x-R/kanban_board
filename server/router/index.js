const router = require('express').Router();

router.get('/', (req, res) => {
  return res.send('server side here');
});

module.exports = router;