import React from "react";

import classes from '../../../styles/UI/Modal/Error.module.css';
import Backdrop from './Backdrop';
const Error = (props) => {

  return (
    <React.Fragment>
      <Backdrop onCloseModal={props.onCloseModal} />
      <div className={classes.main}>
        <h2>An Error Occurred</h2>
        <p>{props.children}</p>
        <div className={classes.btn}>
          <button type='button' onClick={props.onCloseModal}>
            Okay
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Error;