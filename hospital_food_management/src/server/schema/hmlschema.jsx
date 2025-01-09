const mongoose = require('mongoose');



const hospitalmanagerloginschema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model('HospitalManagerLogin ', hospitalmanagerloginschema);

module.exports = User;