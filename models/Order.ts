import mongoose from 'mongoose'

const OrderSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  item: {
    type: String,
    required: true
  },
  mail: {
    type: String,
  },
  phone: {
    type: String
  },
  address: {
    type: String
  },
  quantity: {
    type: Number,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  }
})

const Order = mongoose.model("Order", OrderSchema);

export default Order
