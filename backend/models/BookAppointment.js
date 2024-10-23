const mongoose = require('mongoose')

const BookAppointment = mongoose.model('BookAppointment', {
  userName: {
    type: mongoose.Schema.Types.String,
    ref: 'User',
  },
  email: {
    type: mongoose.Schema.Types.String,
    ref: 'User',
  },
  doctorName: {
    type: String,
  },
  phone: {
    type: Number,
    default: '',
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  time: {
    type: String,
    default: '',
  },
  message: {
    type: String,
    default: '',
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
})

module.exports = BookAppointment
