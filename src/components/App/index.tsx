import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ItemReducerModel } from "../../store/items/types";
import * as actions from "../../store/items/actions";
import { Homepage } from "../Homepage/index";
// import styles from "./App.scss";

export const App: React.FC = () => {
  const items = useSelector((state: ItemReducerModel) => state.items);
  // const totalMoney = useSelector((state: ItemReducerModel) => state.totalMoney);
  // const billionaires = useSelector(
  //   (state: ItemReducerModel) => state.billionaires
  // );
  // const currentBillionaire = useSelector(
  //   (state: ItemReducerModel) => state.currentBillionaire
  // );

  // actions
  const dispatch = useDispatch();
  const initBillionaires = useCallback((): void => {
    dispatch(actions.initBillionaires());
  }, []);
  // const updateBillionaire = (billionaire: Billionaire): void => {
  //   dispatch(actions.updateBillionaire(billionaire));
  // };

  useEffect(() => {
    initBillionaires();
  }, [initBillionaires]);

  return <Homepage items={items} />;
};
