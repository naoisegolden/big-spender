import React from "react";
import classNames from "classnames/bind";
import { formatNumber } from "../../utility/formatNumber";
import styles from "./TotalMoney.scss";

const cx = classNames.bind(styles);

interface TotalMoneyProps {
  totalMoney: number;
}

export const TotalMoney: React.FC<TotalMoneyProps> = ({ totalMoney }) => {
  return (
    <div data-cy="totalMoney" className={cx("totalMoney")}>
      <p>
        <span>$</span>
        {formatNumber(totalMoney)}
      </p>
    </div>
  );
};
