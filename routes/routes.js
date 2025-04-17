const router = require('express').Router();
const multer = require('multer');
const { addExpo, addUser, addExhi, addCompony } = require('../controller/createController');
const { fetchExpos, fetchExhi, fetchUser, fetchCompany } = require('../controller/fetchController');
const { addBooth } = require('../controller/updateController');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/addExpos',upload.single('image'), addExpo);
router.post('/addBooth/:expo_id', addBooth);
router.post('/addUser',upload.single('image'), addUser);
router.post('/addExhi', upload.single('image'),addExhi);
router.post('/addCompany', addCompony);
router.get('/getExpos', fetchExpos);
router.get('/getExhi', fetchExhi);
router.get('/getUser', fetchUser);
router.get('/getCompany', fetchCompany);

module.exports = router;