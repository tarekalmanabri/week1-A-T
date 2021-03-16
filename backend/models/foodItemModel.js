import mongoose from 'mongoose'

// Foodstuff products
const foodItemSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      default: 'New Food Item',
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    producer: {
      name: {
        type: String,
        required: true,
        default: 'Local Producer',
      },
      city: {
        type: String,
        required: true,
        default: 'Amsterdam',
      },
      address: {
        type: String,
        required: false,
      },
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)
const FoodItem = mongoose.model('FoodItem', foodItemSchema)
export default FoodItem
