var express = require('express');
var passport = require('passport');
var router = express.Router();
var authComp = require('../components/auth');
require('./twitterAuth');
require('./facebookAuth');


module.exports = router;


router.route('/')
    .get(function (req, res) {
    	res.render(authComp);
        
    });


router.route('/twitter')
    .post(passport.authenticate('twitter', {
        successRedirect: '/',
        failureRedirect: '/auth'
        // successFlash: 'Welcome!',
        // failureFlash: true
    }));

router.route('/facebook')
    .post(passport.authenticate('facebook', {
        successRedirect: '/',
        failureRedirect: '/auth'
        // successFlash: 'Welcome!',
        // failureFlash: true
    }));
        
