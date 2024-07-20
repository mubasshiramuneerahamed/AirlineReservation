import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BookedFlights from './BookedFlights';
import Schedule from './Components/Schedule';
import Download from './Components/Download';
import Cancel from './Components/Cancel';




const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <BookedFlights />
      },
      {
        path: 'schedule',
        element: <Schedule />
      },
      {
        path: 'cancel',
        element: <Cancel />
      },
      {
        path: 'download',
        element: <Download/>
      }
     
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
     
  </React.StrictMode>
);

reportWebVitals();
