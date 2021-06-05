const mongoose = require('mongoose');

const User1Schema = new mongoose.Schema({
  leave : {
    type: Date,
  },
  purpose : {
    type : String,
  }
});


const User1 = mongoose.model('User1', User1Schema);

module.exports = User1;
