/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";
import classNames from "classnames/bind";
import styles from "./Backdrop.scss";

const cx = classNames.bind(styles);

interface BackdropProps {
  toggleModal(): void;
}

export const Backdrop: React.FC<BackdropProps> = ({ toggleModal }) => (
  <div
    data-cy="backdrop"
    tabIndex={0}
    role="button"
    onKeyUp={toggleModal}
    className={cx("backdrop")}
    onClick={toggleModal}
  />
);
