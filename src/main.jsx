import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(

  
  <Auth0Provider
  domain="dev-hnlvj0h7ml58eim1.us.auth0.com"
  clientId="D9LIgXhe3q5oS5qsAjv3Gb0WL0Nn8Pe8"
  authorizationParams={{
    redirect_uri:  window.location.origin
  }}>
  <App />

);
