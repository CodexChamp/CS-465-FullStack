const express = require("express"); // Express app
const router = express.Router();    // Router logic
const jwt = require('jsonwebtoken');

function authenticateJWT(req, res, next) {
    console.log('In Middleware');

    const authHeader = req.headers['authorization'];
    console.log('Auth Header: ' + authHeader);

    if (authHeader == null) 
    {
        console.log('Auth Header Required but NOT PRESENT!');
        return res.sendStatus(401);
    }

    let headers = authHeader.split(' ');
    if(headers.length < 1)
    {
        console.log('Not enough tokens in Auth Header: ' + headers.length);
        return res.sendStatus(501);
    }
        
        const token = authHeader.split(' ')[1];
        console.log('Token: ' +token);

        if(token == null)
        {
            console.log('Null Bearer Token');
            return res.sendStatus(401);
        }

        //console.log(process.env.JWT_SECRET);
        //console.log(jwt.decode(token));
        const verified = jwt.verify(token, process.env.JWT_SECRET, (err, verified) => {
            if(err)
            {
                return res.sendStatus(401).json('Token Validation Error!');

            }
            req.auth = verified;
        });
    next();
}

// This is where we import the controllers we will route
const tripsController = require('../controller/trips');

const authController = require('../controller/authentication');


router
    .route('/register')
    .post(authController.register);

router
    .route('/login')
    .post(authController.login);


// define route for our trips endpoint
router
    .route("/trips")
    .get(tripsController.tripsList) // GET Method routes tripList
    .post(authenticateJWT, tripsController.tripsAddTrip); //POST Method Adds a trip 


router
    .route("/trips/:tripCode")
    .get(tripsController.tripsFindByCode) // GET Method routes tripList
    .put(authenticateJWT, tripsController.tripsUpdateTrip); //POST Method Adds a trip
    
module.exports = router;