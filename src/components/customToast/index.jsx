import React, { useEffect, useState, useCallback } from "react";
import { Toast } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { dropError } from "../../actions/errorAction";
import "./styles.scss";

let timer = null;

export const CustomToast = () => {
  const error = useSelector(state => state.error);
  const dispatch = useDispatch();

  const [containerClassName, setContainerClassName] = useState(
    "toast-container"
  );

  const [isShowed, setIsShowed] = useState(false);

  const clearError = useCallback(() => {
    setContainerClassName("toast-container");
    setTimeout(() => {
      if (!error) return;
      dispatch(dropError());
      setIsShowed(false);
    }, 1000);
  }, [dispatch, setContainerClassName, error]);

  const closeToast = useCallback(() => {
    clearError();
    clearTimeout(timer);
    timer = null;
  }, [clearError]);

  const closeToastDelay = useCallback(() => {
    timer = setTimeout(() => {
      setContainerClassName("toast-container");
      closeToast();
    }, 3000);
  }, [setContainerClassName, closeToast]);

  const mouseEnterHandler = () => {
    clearTimeout(timer);
  };

  const mouseLeaveHandler = () => {
    if (!timer) return;
    closeToastDelay();
  };

  useEffect(() => {
    if (error) {
      setContainerClassName("toast-container shown");
      closeToastDelay();
      setIsShowed(true);
    }
  }, [error, setContainerClassName, closeToastDelay]);

  return (
    <div
      className={containerClassName}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <Toast
        show={isShowed}
        className="border border-danger"
        onClose={closeToast}
        animation={false}
      >
        <Toast.Header className="">
          <img src="" className="rounded mr-2" alt="" />
          <strong className="mr-auto text-danger">Error</strong>
        </Toast.Header>
        <Toast.Body>
          {error && `${error.statusText}: ${error.message}`}
        </Toast.Body>
      </Toast>
    </div>
  );
};
