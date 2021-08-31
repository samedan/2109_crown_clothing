import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
    // used to pass type=submit if the case
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
