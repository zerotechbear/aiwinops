import React from "react";

import classes from '../../../styles/UI/Error/Error.module.css';

const Error = (props) => {
  return (
    <React.Fragment>
      <div className={classes.backdrop} onClick={props.onClose} />
      <div className={classes.error__panel}>
        <h2>An Error Occurred!</h2>
        <p>{props.children}</p>
        <div className={classes.error__panel__okay}>
          <button type="button" onClick={props.onClose}>
            Okay
          </button>
        </div>
      </div>
    </React.Fragment>
  )
};

export default Error;