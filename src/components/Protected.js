// eslint-disable-next-line no-unused-vars
import React from "react";

// import { Navigate } from "react-router-dom";

const Protected = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return (
        <h2>Please Log In to see blogs</h2>
    )
  }
  return children;
};

export default Protected;
