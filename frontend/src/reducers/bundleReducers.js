import {
  BUNDLE_LIST_REQUEST,
  BUNDLE_LIST_SUCCESS,
  BUNDLE_LIST_FAIL,
  BUNDLE_DETAILS_REQUEST,
  BUNDLE_DETAILS_SUCCESS,
  BUNDLE_DETAILS_FAIL,
  BUNDLE_TOP_REQUEST,
  BUNDLE_TOP_SUCCESS,
  BUNDLE_TOP_FAIL,
} from '../constants/bundleConstants'

export const bundleListReducer = (state = { bundles: [] }, action) => {
  switch (action.type) {
    case BUNDLE_LIST_REQUEST:
      return { loading: true, bundles: [] }
    case BUNDLE_LIST_SUCCESS:
      return {
        loading: false,
        bundles: action.payload.bundles,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case BUNDLE_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const bundleDetailsReducer = (
  state = { bundle: { reviews: [], foodItems: [] } },
  action,
) => {
  switch (action.type) {
    case BUNDLE_DETAILS_REQUEST:
      return { ...state, loading: true }
    case BUNDLE_DETAILS_SUCCESS:
      return { loading: false, bundle: action.payload }
    case BUNDLE_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const bundleTopRatedReducer = (state = { bundles: [] }, action) => {
  switch (action.type) {
    case BUNDLE_TOP_REQUEST:
      return { loading: true, bundles: [] }
    case BUNDLE_TOP_SUCCESS:
      return { loading: false, bundles: action.payload }
    case BUNDLE_TOP_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
