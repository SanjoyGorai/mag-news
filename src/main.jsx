import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './componants/Home/Home.jsx';
import News from './componants/News/News.jsx';
import ErrorPage from './componants/Error/ErrorPage.jsx';
import Entaintment from './componants/Entaintment/Entaintment.jsx';
import Business from './componants/Business/Business.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/news',
        element: <News />
      },
      {
        path: 'entaintment',
        element: <Entaintment/>
      },
      {
        path: '',
        element: ''
      },
      {
        path: 'business',
        element: <Business/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
