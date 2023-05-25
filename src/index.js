import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Adminapprovedloan from "./Components/Adminapprovedloan";
import Adminappliedloan from "./Components/Adminappliedloan";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, 
  RouterProvider, 
  Route } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import CustomerApplyLoan from "./Components/CustomerApplyLoan";
import CustomerProfile from "./Components/CustomerProfile"
import CustomerLoanStatus from"./Components/CustomerLoanStatus";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/home",
    element: <Adminappliedloan/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/Adminapprovedloan",
    element: <Adminapprovedloan/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/CustomerProfile",
    element: <CustomerProfile/>,
  },
  {
    path: "/CustomerLoanStatus",
    element: <CustomerLoanStatus/>,
  },
  {
    path: "/CustomerApplyLoan",
    element: <CustomerApplyLoan/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
