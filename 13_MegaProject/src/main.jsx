import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './Store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AuthLayout, Login } from '../src/Component/index.js'
import Home from '../../08_ReactRouter/src/Component/Home/Home.jsx'
import SignUp from './Component/SignUp.jsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',  
          element: <Home/>
        },
        {
          path: '/login',
          element:
            <AuthLayout>
              <Login />
            </AuthLayout>
        }, 
        {
          path: '/signup',
          element:
            <AuthLayout>
              <SignUp />
            </AuthLayout>
        }
      ]
    }
  ]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
