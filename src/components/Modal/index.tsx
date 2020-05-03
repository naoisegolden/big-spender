import React from "react";
import classNames from "classnames/bind";

import styles from "./Modal.scss";
import { DisplayBillionaires } from "../DisplayBillionaires";
import { Billionaire } from "../../store/items/types";

const cx = classNames.bind(styles);

interface ModalProps {
  showModal: boolean;
  billionaires: Billionaire[];
  updateBillionaire(billionaire: Billionaire): void;
}

export const Modal: React.FC<ModalProps> = ({
  showModal,
  billionaires,
  updateBillionaire,
}) => {
  return (
    <div
      className={cx("modal")}
      style={{
        transform: showModal ? "translateY(0)" : "translateY(-100vh)",
        opacity: showModal ? "1" : "0",
      }}
    >
      <DisplayBillionaires
        billionaires={billionaires}
        updateBillionaire={updateBillionaire}
      />
    </div>
  );
};
