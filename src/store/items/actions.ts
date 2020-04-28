import { Item, ADD_ITEM, REMOVE_ITEM, ItemActionTypes } from "./types";

export const addItem = (item: Item, quantity: number): ItemActionTypes => {
  return {
    type: ADD_ITEM,
    payload: {
      item,
      quantity,
    },
  };
};

export const removeItem = (item: Item, quantity: number): ItemActionTypes => {
  return {
    type: REMOVE_ITEM,
    payload: {
      item,
      quantity,
    },
  };
};
