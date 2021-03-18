import axios from 'axios'
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

export const listBundles = (keyword = '', pageNumber = '') => async (
  dispatch,
) => {
  try {
    dispatch({ type: BUNDLE_LIST_REQUEST })

    const { data } = await axios.get(
      `/api/bundles?keyword=${keyword}&pageNumber=${pageNumber}`,
    )
    console.log('Data fetched from backend: ', data)
    dispatch({
      type: BUNDLE_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: BUNDLE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listBundleDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: BUNDLE_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/bundles/${id}`)

    dispatch({
      type: BUNDLE_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: BUNDLE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listTopBundles = () => async (dispatch) => {
  try {
    dispatch({ type: BUNDLE_TOP_REQUEST })

    const { data } = await axios.get(`/api/bundles/top`)

    dispatch({
      type: BUNDLE_TOP_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: BUNDLE_TOP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
