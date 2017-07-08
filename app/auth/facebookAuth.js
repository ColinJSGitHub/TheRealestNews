var express = require('express');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var router = express.Router();
var FBUser = require('../../models/facebookUserSchema');


// // This will be  to save a session --> not needed now
passport.serializeUser (function (user, cb) {
    cb(null, user);
    console.log('serialized a facebook user');

});

passport.deserializeUser (function (obj, cb) {
    cb(null, obj);
    console.log('deserialized the facebook user');
});


// Configuration of the passport strategy
passport.use(new FacebookStrategy({
    clientID: '569234186798622',
    clientSecret: '96fb9653327d8e5e3fc4396f8921c8af',
    callbackURL: "https://upper-moose-86468.herokuapp.com/auth/twitter/callback/"
  },
    // This takes the info sent back from twitter
    // If user does not exist in DB, it creates a new user
    
    function(accessToken, refreshToken, profile, done) {

        FBUser.findOne({ id: profile.id }, function(err, user) {
            if(err) {
                console.log(err);  // handle errors!
            }
            if (!err && user !== null) {
                done(null, user);
            } else {
                user = new FBUser({
                    id: profile.id,
                    token: accessToken,
                    displayName: profile.displayName,
                    username: profile.username
                });
                user.save(function(err) {
                    if(err) {
                        console.log(err);  // handle errors!
                    } else {
                        console.log("saving user ...");
                        done(null, user);
                    }
                    
                });
            }
        });

        console.log("successfully saved a user!");



    }
));


module.exports = router;


