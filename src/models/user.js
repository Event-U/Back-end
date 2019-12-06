const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  typeUser: [{
    type: String,
    required: true
  }],
  services: {
    type: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'service'
    }]
  },
  isActiveNotification: {
    type: Boolean,
    required: true,
    default: false
  },
  bussinesName: {
    type: String,
    minlength: 3,
    maxlength: 200,
    required: true,
  },
  rfc: {
    type: String,
    minlength: 12,
    maxlength: 13,
    // pattern: /^.+@.+\..+$/,
    require: true
  },
  email: {
    type: String,
    minlength: 3,
    maxlength: 180,
    pattern: /^.+@.+\..+$/,
    require: true
  },
  password: {
    type: String,
    minlength: 10,
    maxlength: 200,
    required: true
  },
  phone: {
    type: Number,
    minlength: 10,
    maxlength: 15
  },
  addresses: {
    type: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'address'
    }]
  }
})

module.exports = mongoose.model('User', userSchema)   