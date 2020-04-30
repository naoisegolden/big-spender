import React from "react";
import { useSelector } from "react-redux";
import { ItemReducerModel } from "../../store/items/types";
// import * as actions from "../../store/items/actions";
import styles from "./App.scss";

export const App: React.FC = () => {
  const items = useSelector((state: ItemReducerModel) => state.items);
  // const totalMoney = useSelector((state: ItemReducerModel) => state.totalMoney);
  // const dispatch = useDispatch();

  // const onUpdateItem = (item: Item, quantity: number): void => {
  //   dispatch(actions.updateItem(item, quantity));
  // };

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
