const router = require('express').Router();
const { addExpo } = require('../controller/createController');
const { fetchExpos } = require('../controller/fetchController');
const { addBooth } = require('../controller/updateController');

router.post('/addExpos', addExpo);
router.post('/addBooth/:expo_id', addBooth);
router.get('/getExpos', fetchExpos);

module.exports = router;