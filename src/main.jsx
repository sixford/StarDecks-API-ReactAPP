// user can click into film to display more details - i.e. director, producer, opening-crawl, realease date, order choronologically
//  user will always see the starwars logo in top left where they can click to get back onto home page   

import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './components/templates/Root.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Page Components
import Films from './components/pages/Films.jsx'
import Home from './components/Home.jsx'
import FilmSingle from './components/pages/FilmSingle.jsx'

// styles
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'




const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'films',
        element: <Films />
      },
      {
        path: 'films/:filmId',
        element: <FilmSingle />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
