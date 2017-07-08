var express = require('express');
var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;
var router = express.Router();
var User = require('../../models/userSchema');


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
        callbackURL: 'https://upper-moose-86468.herokuapp.com/auth/twitter/callback/'
    },
    // This takes the info sent back from twitter
    // If user does not exist in DB, it creates a new user
    
    function(accessToken, refreshToken, profile, done) {

        User.findOne({ id: profile.id }, function(err, user) {
            if(err) {
                console.log(err);  // handle errors!
            }
            if (!err && user !== null) {
                done(null, user);
            } else {
                user = new User({
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
