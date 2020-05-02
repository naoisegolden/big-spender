import React from "react";
import classNames from "classnames/bind";
import { Billionaire } from "../../store/items/types";
import styles from "./Homepage.scss";

const cx = classNames.bind(styles);

interface HomepageProps {
  currentBillionaire: Billionaire;
}

export const Homepage: React.FC<HomepageProps> = ({ currentBillionaire }) => {
  return (
    <main className={cx("homepage")}>
      <section>
        <h1 className={cx("name")}>{currentBillionaire.name.toUpperCase()}</h1>
        <p className={cx("introduction")}>{currentBillionaire.introduction}</p>
      </section>
    </main>
  );
};
