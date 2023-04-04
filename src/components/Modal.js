import React from "react";
import classes from "./Modal.module.css";

function Modal(props) {
  return (
    <div className={classes.backdrop}>
      {/* <div className={classes.backdrop} onClick={props.onClose}> */}
      <dialog open className={classes.modal}>
        {props.children}
      </dialog>
    </div>
  );
} // we use Modal as a wrapper for other react components so content inside this wrapper is only visible if we give props.children property, here we tell that where our content should be placed

// open is required in default dialog element to make sure it is visible

export default Modal;
