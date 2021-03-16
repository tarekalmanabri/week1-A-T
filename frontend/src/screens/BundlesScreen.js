import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { listBundles } from '../actions/bundleActions'

const BundlesScreen = () => {
  const params = useParams()
  const { keyword } = params
  const pageNumber = params.pageNumber || 1

  const dispatch = useDispatch()

  const bundleList = useSelector((state) => state.bundleList)
  const { loading, error, bundles, page, pages } = bundleList

  useEffect(() => {
    dispatch(listBundles(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
      {bundles && (
        <ul>
          {bundles.map((bundle) => (
            <li key={bundle._id}>
              <div style={{ backgroundColor: '#b0fbc1' }}>
                <h5>{`Bundle name: ${bundle.name}`}</h5>
                <p>{`Description: ${bundle.description}`}</p>
                <p>{`Image file: ${bundle.image}`}</p>
                <p>{`Price: €${bundle.price}`}</p>
                <p>{`Rating: ${bundle.rating}`}</p>
                <p>{`Total reviews: ${bundle.numReviews}`}</p>
                <p>{`In stock: ${bundle.countInStock}`}</p>
                <h6>May include the following products</h6>
                <ol>
                {bundle.foodItems.map((foodItem) => (
                  <li key={foodItem._id}>
                    <div style={{ backgroundColor: '#f0f7c9'}}>
                      <p>{`Product name: ${foodItem.name}`}</p>
                      <p>{`Description: ${foodItem.description}`}</p>
                      <p>{`Image file: ${foodItem.image}`}</p>
                      <p>{`Price: €${foodItem.price}`}</p>
                      <ul>
                        <li>
                          <div style={{ backgroundColor: '#aff6f7' }}>
                            <p>{`Producer name: ${foodItem.producer.name}`}</p>
                            <p>{`City: ${foodItem.producer.city}`}</p>
                            <p>{`Address: ${foodItem.producer.address}`}</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                ))}
                </ol>
                <p> </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default BundlesScreen
