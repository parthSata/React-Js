import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// const ReactElement = {
//   type: "a",
//   props:{
//       href : "http://google.com",
//       target: "_blank",
//   },
//   children : 'Click Me to Visit Google'
// }

const ReactElement = React.createElement(
  'a',
  { href: 'http://google.com', target: "_blank" },
  'Click Me to Visit Google'

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
