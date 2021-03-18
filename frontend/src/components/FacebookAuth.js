import React from 'react'
import FacebookLogin from 'react-facebook-login'
import { useDispatch } from 'react-redux'
import { authFacebook } from '../actions/userActions'

const FacebookAuth = () => {
  const dispatch = useDispatch()

  const responseFacebook = (response) => {
    dispatch(authFacebook(response.accessToken, response.userID))
  }

  return (
    <div>
      <FacebookLogin
        appId={process.env.REACT_APP_FACEBOOK_CLIENT_ID}
        autoLoad={false}
        textButton="Continue with Facebook"
        // fields='name,email,picture'
        // onClick={componentClicked}
        callback={responseFacebook}
      />
    </div>
  )
}

export default FacebookAuth
