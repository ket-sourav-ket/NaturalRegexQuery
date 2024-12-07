import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App , {loader as rootLoader}from './App';

import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Login, QuickSearch, TextBox, Uploader } from './components';
import { loginAction, loader as userLoader , registerAction , demoAction, BasicLogin} from './components/login/Login';
import { searchLoader } from './components/textBox/TextBox';
import { uploadAction } from './components/uploader/Uploader';
import { quickAction } from './components/quickSearch/QuickSearch';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    loader: rootLoader,
    children : [
      {
        path: "search/:docId/:queryString",
        element: < TextBox/>,
        loader: searchLoader
      },
    ],

  },
  {
    path: "login",
    element: <Login />,
    action: loginAction,
    loader: userLoader,

  },
  {
    path: "register",
    element: <Login />,
    action: registerAction,
    loader: userLoader,
  },
  {
    path: "upload",
    element: <Uploader />,
    action: uploadAction,
    
  },
  {
    path: 'quickSearch',
    element : <QuickSearch />,
    action : quickAction,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
