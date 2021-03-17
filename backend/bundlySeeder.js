// import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';

import Farmer from './models/farmerModel.js';
import FoodItem from './models/foodItemModel.js';
import Bundle from './models/bundleModel.js';
import connectDB from './config/db.js';

dotenv.config();
colors.enable();
connectDB();

const importData = async () => {
  try {
    await Farmer.deleteMany();
    await FoodItem.deleteMany();
    await Bundle.deleteMany();

    const farmers = await Farmer.insertMany([
      {
        name: 'John Smith',
        city: 'Eindhoven',
        address: 'Churchillaan 10',
        image: 'farm-1.jpg',
        description: 'Great farm in some asshole of the world',
      },
      {
        name: 'Martijn Jansen',
        city: 'Nuenen',
        address: 'Europalaan 25',
        image: 'farm-2.jpg',
        description: 'great farm in the ...',
      },
    ]);

    const foodItems = await FoodItem.insertMany([
      {
        name: 'Apples',
        price: 1.0,
        image: 'image-1.jpg',
        description: 'tasty apples',
        farmer: farmers[0],
      },
      {
        name: 'Strawberry',
        price: 1.2,
        image: 'image-2.jpg',
        description: 'Tasty berries',
        farmer: farmers[1],
      },
    ]);

    await Bundle.insertMany([
      {
        name: 'Fruits',
        foodItems,
        image: 'bundle-image-1.jpg',
        description: 'Tasty Fruits',
        category: 'Vegetarian',
        rating: 4.6,
        numReviews: 99,
        price: 13.1,
        countInStock: 145,
      },
      {
        name: 'Veggies',
        foodItems,
        image: 'bundle-image-2.jpg',
        description: 'Tasty Veggies',
        category: 'Vegan',
        rating: 4.3,
        numReviews: 123,
        price: 11.9,
        countInStock: 111,
      },
    ]);
    const bundles = await Bundle.find().populate('foodItems');
    console.log(bundles);
    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

importData();
