var mongoose = require('mongoose');

var express = require('express');
var router = express.Router();
module.exports = router;

var schemaOptions = {
    collection: "users"
};

var User = new mongoose.Schema({

    id           : String,
    token        : String,
    displayName  : String,
    username     : String

}, schemaOptions);

module.exports = mongoose.model('User', User);
