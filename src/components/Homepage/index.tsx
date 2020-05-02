import React from "react";
import classNames from "classnames/bind";
import { Item } from "../../store/items/types";
import styles from "./Homepage.scss";

const cx = classNames.bind(styles);

interface HomepageProps {
  items: Item[];
}

export const Homepage: React.FC<HomepageProps> = ({ items }) => {
  console.log(items);
  return <div className={cx("homepage")}>Homepage</div>;
};
