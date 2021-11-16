const mongoose = require('mongoose')
const { Schema } = mongoose

const FormSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    batch: {
      type: String,
      required: true,
    },
    fees: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: 'users',
  }
)

const Form = mongoose.model('users', FormSchema)
module.exports = Form
