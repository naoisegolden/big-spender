import {
  Item,
  ItemActionTypes,
  UPDATE_ITEM,
  UPDATE_BILLIONAIRE,
  Billionaire,
  INIT_BILLIONAIRES,
} from "./types";

export const updateItem = (item: Item, quantity: number): ItemActionTypes => {
  return {
    type: UPDATE_ITEM,
    payload: {
      item,
      quantity,
    },
  };
};

export const updateBillionaire = (
  billionaire: Billionaire
): ItemActionTypes => {
  return {
    type: UPDATE_BILLIONAIRE,
    billionaire,
  };
};

export const initBillionaires = (): ItemActionTypes => {
  // make async request to fetch the billionaires from API and then add it to the return object
  return {
    type: INIT_BILLIONAIRES,
  };
};
