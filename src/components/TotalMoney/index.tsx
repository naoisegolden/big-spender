import React from "react";
import classNames from "classnames/bind";
import styles from "./TotalMoney.scss";

const cx = classNames.bind(styles);

interface TotalMoneyProps {
  totalMoney: number;
}

export const TotalMoney: React.FC<TotalMoneyProps> = ({ totalMoney }) => {
  return (
    <div className={cx("totalMoney")}>
      <p>
        <span>$</span>
        {totalMoney}
      </p>
    </div>
  );
};
