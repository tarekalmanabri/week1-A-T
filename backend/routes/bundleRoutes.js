import express from 'express'
const router = express.Router()
import {
  getBundles,
  getBundleById,
} from '../controllers/bundleController.js'

router.route('/')
  .get(getBundles)
router.route('/:id')
  .get(getBundleById)

export default router