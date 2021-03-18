import asyncHandler from 'express-async-handler'
import Farmer from '../models/farmerModel.js'
import FoodItem from '../models/foodItemModel.js'
import Bundle from '../models/bundleModel.js'

// to include nested tables to the api response
// (see .populate in controllers)
// otherwise there will be IDs in response instead of data
// https://mongoosejs.com/docs/populate.html#population
const nestedDocs = {
  path: 'foodItems',
  populate: {
    path: 'farmer',
  },
}

// @desc    Fetch all bundles
// @route   GET /api/bundles
// @access  Public
export const getBundles = asyncHandler(async (req, res) => {
  const pageSize = 3
  const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}

  const count = await Bundle.countDocuments({ ...keyword })
  const bundles = await Bundle.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))
    .populate(nestedDocs)

  res.json({ bundles, page, pages: Math.ceil(count / pageSize) })
})

// @desc    Fetch single bundle
// @route   GET /api/bundles/:id
// @access  Public
export const getBundleById = asyncHandler(async (req, res) => {
  const bundle = await Bundle.findById(req.params.id)
    .populate(nestedDocs)

  if (bundle) {
    res.json(bundle)
  } else {
    res.status(404)
    throw new Error('Bundle not found')
  }
})
