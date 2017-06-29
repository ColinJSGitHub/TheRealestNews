var express = require('express');
var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;
var router = express.Router();


// // This will be  to save a session --> not needed now
passport.serializeUser (function (user, cb) {
    cb(null, user);
    console.log('serialized a user');

});

passport.deserializeUser (function (obj, cb) {
    cb(null, obj);
    console.log('deserialized the user');
});


// Configuration of the passport strategy
passport.use(new TwitterStrategy({
        consumerKey: 'YWRhrfel79Wwb0UTht8JAWkpf',
        consumerSecret: 'C9C22un6ARpW31BnzJN3cyzEaaa8kgqOS3aiXUTBKEnuAopDIP',
        callbackURL: 'http://localhost:3000/auth/twitter/callback/'
    },
    // This takes the info sent back from twitter
    // If user does not exist in DB, it creates a new user
    
    function(accessToken, refreshToken, profile, done) {

        console.log(accessToken);
        console.log(refreshToken);
        console.log(profile);
        console.log(done);

        console.log("successfully auth'd a user!");

        done(null, profile);



    }
));
