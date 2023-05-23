import React, { useState } from "react"
import { Navigate,Outlet } from "react-router-dom"

export default function Auth(auth){
  sessionStorage.setItem("isAuth" ,(auth.isAuth));
  sessionStorage.setItem("role" ,(auth.role));
}

 export function Admin({children}){
  const isAuth = sessionStorage.getItem("isAuth");
  const role = sessionStorage.getItem("role");
  console.log(role);
    if(isAuth && role==="Admin")
    return (
      <>{children}</>
    )
    else return  <Navigate to={"/"}/>;
  }

 export function User({children}){
  const isAuth = sessionStorage.getItem("isAuth");
  const role = sessionStorage.getItem("role");
  console.log(role);
    if(isAuth && role==="User")
    return (
      <>{children}</>
    )
    else return <Navigate to={"/"}/>
    }