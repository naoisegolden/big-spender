import React from "react";
import classNames from "classnames/bind";
import { Billionaire } from "../../store/items/types";
import styles from "./DisplayBillionaires.scss";

const cx = classNames.bind(styles);

interface DisplayBillionairesProps {
  billionaires: Billionaire[];
  updateBillionaire(billionaire: Billionaire): void;
}

export const DisplayBillionaires: React.FC<DisplayBillionairesProps> = ({
  billionaires,
  updateBillionaire,
}) => {
  console.log(updateBillionaire);
  return (
    <div className={cx("billionairesTable")}>
      {billionaires.map((billionaire) => (
        <div key={billionaire.totalMoney} className={cx("row")}>
          <div className={cx("imageNameMoney")}>
            <img alt="billionaire" src={billionaire.imageSrc} />
            <div className={cx("nameMoney")}>
              <span>{billionaire.name}</span>
              <span>
                <strong>{`$${billionaire.totalMoney}`}</strong>
              </span>
            </div>
          </div>
          <div className={cx("wealthSource")}>ZARA</div>
          <div className={cx("buttonContainer")}>
            <button type="button">SELECT</button>
          </div>
        </div>
      ))}
    </div>
  );
};
