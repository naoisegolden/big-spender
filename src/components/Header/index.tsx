import React from "react";
import classNames from "classnames/bind";
import { Billionaire } from "../../store/items/types";
import styles from "./Header.scss";

const cx = classNames.bind(styles);

interface HeaderProps {
  currentBillionaire: Billionaire;
}

export const Header: React.FC<HeaderProps> = ({ currentBillionaire }) => {
  console.log(currentBillionaire);
  return (
    <header className={cx("header")}>
      <img
        alt={currentBillionaire.name}
        src={currentBillionaire.imageSrc}
        height="45px"
        width="45px"
      />
      <p className={cx("madeBy")}>
        <span className={cx("light-yellow")}>by</span> Chris Martin
      </p>
    </header>
  );
};
