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
    maxlength: 150,
    required: true,
  },
  rfc: {
    type: String,
    minlength: 12,
    maxlength: 13,
    // pattern: /^.+@.+\..+$/,
    require: true
  },
  companyBussines: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'companyBussine'
    }]
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
  createDate: {
    type: Date,
    required: true,
    default: Date.now()    
  },
  UpdateDate: {
    type: Date,
    required: true,
    default: Date.now()
  },
  isActive: {
    type: Boolean,
    required: true,
    default: false
  }

})

module.exports = mongoose.model('User', userSchema)