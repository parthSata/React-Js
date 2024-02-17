import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './Store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AuthLayout, Login } from '../src/Component/index.js'
import AddPost from './Component/pages/AddPost.jsx'
import SignUp from './Component/pages/SignUp'
import EditPost from "./Component/pages/EditPost";
import Post from "./Component/pages/Post";
import AllPost from "./Component/pages/AllPost";
import Home from './Component/pages/Home.jsx'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: (
            <AuthLayout authentication={false}>
              <Login />
            </AuthLayout>
          ),
        },
        {
          path: "/signup",
          element: (
            <AuthLayout authentication={false}>
              <SignUp />
            </AuthLayout>
          ),
        },
        {
          path: "/all-posts",
          element: (
            <AuthLayout authentication>
              {" "}
              <AllPost />
            </AuthLayout>
          ),
        },
        {
          path: "/add-post",
          element: (
            <AuthLayout authentication>
              {" "}
              <AddPost />
            </AuthLayout>
          ),
        },
        {
          path: "/edit-post/:slug",
          element: (
            <AuthLayout authentication>
              {" "}
              <EditPost />
            </AuthLayout>
          ),
        },
        {
          path: "/post/:slug",
          element: <Post />,
        },
      ],
    },
  ]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
