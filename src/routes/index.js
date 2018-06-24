const cors = require('cors');
const hotelRoutes = require('./Hotel');

module.exports = {
    init: (app) => {
        app.use(hotelRoutes);

        // CORS
        app.use(cors);

        // Catch all the mismatch routes
        app.get('/*', notFound);
        app.post('/*', notFound);
    }
}

function notFound(req, res) {
    return res.status(404).json({
        error: true,
        message: 'This api does not exist'
    });
}