import React from "react";
import classNames from "classnames/bind";
import styles from "./Modal.scss";

const cx = classNames.bind(styles);

interface ModalProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
  showModal: boolean;
}

export const Modal: React.FC<ModalProps> = ({ children, showModal }) => {
  console.log(children);
  return (
    <div
      className={cx("modal")}
      style={{
        transform: showModal ? "translateY(0)" : "translateY(-100vh)",
        opacity: showModal ? "1" : "0",
      }}
    >
      Modal is visible
    </div>
  );
};
