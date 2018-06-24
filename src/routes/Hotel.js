const Express = require("express");
const router = new Express.Router();

const HotelController = require('../controllers/HotelController');

router.get('/hotels', HotelController.index);

module.exports = router;
