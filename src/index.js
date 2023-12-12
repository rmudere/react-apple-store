import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App , { loader as rootLoader } from './App';
import {loader as productLoader} from "./routes/product";
import ErrorPage from "./error-page";
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Product from "./routes/product";
import Homepage from "./Components/Homepage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        loader: rootLoader,
        children:[
            {
            path:"",
            element: <Homepage/>,
            loader: rootLoader,
        },
            {
                path: "product/:productId",
                element: <Product />,
                loader: productLoader,
            },
        ]
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
