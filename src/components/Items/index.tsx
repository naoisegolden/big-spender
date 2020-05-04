import React from "react";
import classNames from "classnames/bind";
import { Item } from "../../store/items/types";
import styles from "./Items.scss";
import { formatNumber } from "../../utility/formatNumber";

const cx = classNames.bind(styles);

interface ItemsProps {
  items: Item[];
}

export const Items: React.FC<ItemsProps> = ({ items }) => {
  const card = items.map((item) => {
    return (
      <div key={item.cost} className={cx("card")}>
        <img alt={item.name} src={item.src} />
        <div className={cx("itemInfo")}>
          <span className={cx("itemCost")}>${formatNumber(item.cost)}</span>
          <p className={cx("itemName")}>{item.name}</p>
        </div>
      </div>
    );
  });

  return (
    <div className={cx("container")}>
      <div className={cx("items")}>{card}</div>
    </div>
  );
};
