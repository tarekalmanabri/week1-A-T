import React from 'react'
import { GoogleLogin } from 'react-google-login'
import { useDispatch } from 'react-redux'
import { authGoogle } from '../actions/userActions'

const GoogleAuth = () => {
  const dispatch = useDispatch()

  const responseSuccessGoogle = (response) => {
    dispatch(authGoogle(response.tokenId))
  }

  const responseFailGoogle = (error) => {
    console.log(error)
  }

  return (
    <div>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText='Continue with Google'
        onSuccess={responseSuccessGoogle}
        onFailure={responseFailGoogle}
        cookiePolicy={'single_host_origin'}
      />
      ,
    </div>
  )
}

export default GoogleAuth
