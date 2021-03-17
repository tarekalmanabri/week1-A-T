// import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';

import { farmersDataSet, foodItemsDataSet, bundlesDataSet } from './data/bundles.js';
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

    const farmers = await Farmer.insertMany(farmersDataSet);

    // assuming that the lengths of farmers and fooditems are equal
    const foodItems = await FoodItem.insertMany(foodItemsDataSet.map((product, index) => ({
      ...product,
      farmer: farmers[index],
    })));

    await Bundle.insertMany(bundlesDataSet.map((bundle) => ({
      ...bundle,
      foodItems,
    })));

    const bundles = await Bundle.find();
    console.log(bundles);
    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

importData();
