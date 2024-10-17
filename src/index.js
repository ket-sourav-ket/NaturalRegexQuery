import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Login } from './components';
import { loginAction, loader as userLoader , registerAction } from './components/login/Login';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
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
