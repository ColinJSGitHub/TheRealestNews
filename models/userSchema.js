//user schema
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String
  },
  height: {
    type: String
  }
});

var Article = mongoose.model("User", UserSchema);
module.exports = User;