import React from "react";
import { useSelector } from "react-redux";
import { ItemReducerModel } from "../../store/items/types";
import styles from "./App.scss";

export const App: React.FC = () => {
  const items = useSelector((state: ItemReducerModel) => state.items);

  return (
    <>
      {items.map((item) => (
        <div key={item.cost} className={styles.app}>
          Hello {item.name}
        </div>
      ))}
    </>
  );
};
