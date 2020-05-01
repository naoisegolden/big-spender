import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ItemReducerModel } from "../../store/items/types";
import * as actions from "../../store/items/actions";
import styles from "./App.scss";

export const App: React.FC = () => {
  const items = useSelector((state: ItemReducerModel) => state.items);
  const allReducer = useSelector((state: ItemReducerModel) => state);
  const dispatch = useDispatch();
  const initBillionaires = useCallback((): void => {
    dispatch(actions.initBillionaires());
  }, []);

  useEffect(() => {
    initBillionaires();
  }, [initBillionaires]);

  console.log(allReducer);

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
