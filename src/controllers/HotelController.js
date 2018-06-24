const Hotel = require('../models/Hotel');
const Paginator = require('../services/Paginator');

class HotelController {
    async index(req, res) {

        let { page, limit, name, stars } = req.query;

        page = (Number(page) - 1) || 0;
        limit = Number(limit) || 10;

        const finder = {};

        if(name) {
            finder.name = new RegExp(name, 'ig');
        }

        if(stars) {
            finder.stars = Number(stars);
        }

        const hotels = await Hotel.find(finder).skip(page * limit).limit(limit);
        const totalHotels = await Hotel.count(finder);

        return res.json({
            hotels,
            paginate: Paginator({page, limit, current: hotels.length, count: totalHotels })
        });
    }
}

module.exports = new HotelController();