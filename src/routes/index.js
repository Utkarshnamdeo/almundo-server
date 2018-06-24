const hotelRoutes = require('./Hotel');


module.exports =  {
    init: (app) => {
        app.use(hotelRoutes);

        // CORS
        process.env.CORS_ENABLED ? app.use(cors) : null;

        // Catch all the mismatch routes
		app.get('/*', notFound);
		app.post('/*', notFound);
    }
}


function cors (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept, client-security-token, Origin, Content-Length, X-Requested-With');
    if ('OPTIONS' == req.method) {
        return res.send(200);
    } else {
        next();
    }
}

function notFound(req, res) {
    return res.status(404).json({
        error: true,
        message: 'This api does not exist'
    });
}