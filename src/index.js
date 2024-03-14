import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import LogProvider from './components/context';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <LogProvider>
      <RouterProvider router={router} />
    // {/* </LogProvider> */}
);
