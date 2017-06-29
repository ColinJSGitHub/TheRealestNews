var express = require('express');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var router = express.Router();


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
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  },
    // This takes the info sent back from twitter
    // If user does not exist in DB, it creates a new user
    
    function(accessToken, refreshToken, profile, done) {

        console.log(accessToken);
        console.log(refreshToken);
        console.log(profile);
        console.log(done);

        console.log("successfully auth'd a FACEBOOK user!");

        done(null, profile);



    }
));