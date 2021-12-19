/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';
import classes from './MyButton.module.css';

const MyButton = ({ children, ...props }) => (
  <button {...props} className={classes.button}>
    {children}
  </button>
);
export default MyButton;
