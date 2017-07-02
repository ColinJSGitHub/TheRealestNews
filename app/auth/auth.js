var express = require('express');
var passport = require('passport');
var router = express.Router();
require('./twitterAuth');
require('./facebookAuth');


// router.route('/')
//     .get(function (req, res) {
//     	res.render(authComp);
        
//     });

// define the about route
// router.post('/auth/facebook', function (req, res) {
//     console.log('foo');
//   res.send('About birds')
// })

router.get('/twitter/callback',
    passport.authenticate('twitter', { failureRedirect: '/auth' }),
        function(req, res) {



        console.log('/twitter/callback' +  " has been hit!!");
        // Successful authentication, redirect home.
        res.redirect('/main');
    });


router.get('/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/auth' }),
  function(req, res) {

    console.log("I am being hit yo");
    // Successful authentication, redirect home.
    res.redirect('/main');
  });


router.route('/twitter')
    .post(passport.authenticate('twitter', {
        successRedirect: '/main',
        failureRedirect: '/auth'
        // successFlash: 'Welcome!',
        // failureFlash: true
    }));

router.route('/facebook')
    .post(passport.authenticate('facebook', {
            successRedirect: '/main',
            failureRedirect: '/auth'
            // successFlash: 'Welcome!',
            // failureFlash: true
        

    }));
        

module.exports = router;
