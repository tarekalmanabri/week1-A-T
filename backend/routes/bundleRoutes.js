import express from 'express'
const router = express.Router()
import {
  getBundles,
  getBundleById,
  getTopBundles,
} from '../controllers/bundleController.js'

router.route('/').get(getBundles)
router.get('/top', getTopBundles)
router.route('/:id').get(getBundleById)

export default router
