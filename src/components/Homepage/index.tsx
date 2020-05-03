import React from "react";
import ReactRotatingText from "react-rotating-text";
import classNames from "classnames/bind";
import { Billionaire } from "../../store/items/types";
import styles from "./Homepage.scss";

const cx = classNames.bind(styles);

interface HomepageProps {
  currentBillionaire: Billionaire;
}

export const Homepage: React.FC<HomepageProps> = ({ currentBillionaire }) => {
  const typewriter = (
    <ReactRotatingText
      items={currentBillionaire.introduction}
      deletingInterval={20}
    />
  );
  return (
    <main className={cx("homepage")}>
      <section>
        <h1 className={cx("name")}>{currentBillionaire.name.toUpperCase()}</h1>
        <p className={cx("introduction")}>{typewriter}</p>
      </section>
    </main>
  );
};
