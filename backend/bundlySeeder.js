import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'

import FoodItem from './models/foodItemModel.js'
import Bundle from './models/bundleModel.js'

import connectDB from './config/db.js'

dotenv.config()
colors.enable()
connectDB()

const importData = async () => {
  try {
    await FoodItem.deleteMany()
    await Bundle.deleteMany()
    const createdFoodItems = await FoodItem.insertMany([
      {
        name: 'Apples',
        price: 1.0,
        producer: {
          name: 'John Smith',
          city: 'Eindhoven',
          address: 'Churchillaan 10',
        },
        image: 'image-1.jpg',
        description: 'tasty apples',
      },
      {
        name: 'Strawberry',
        price: 1.2,
        producer: {
          name: 'Martijn Jansen',
          city: 'Nuenen',
          address: 'Europalaan 25',
        },
        image: 'image-2.jpg',
        description: 'Tasty berries',
      },
    ])
    const createdBundles = await Bundle.insertMany([
      {
        name: 'Fruits',
        foodItems: createdFoodItems,
        image: 'bundle-image-1.jpg',
        description: 'Tasty Fruits',
        rating: 4.6,
        numReviews: 99,
        price: 13.1,
        countInStock: 145,
      },
      {
        name: 'Veggies',
        foodItems: createdFoodItems,
        image: 'bundle-image-2.jpg',
        description: 'Tasty Veggies',
        rating: 4.3,
        numReviews: 123,
        price: 11.9,
        countInStock: 111,
      },
    ])
    console.log(createdBundles)
    console.log('Data Imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

importData()
