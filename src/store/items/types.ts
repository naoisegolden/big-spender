export interface Item {
  name: string;
  cost: number;
  amount: number;
  src: string;
}

export interface ItemReducerModel {
  totalMoney: number;
  items: Item[];
}

// ActionTypes
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

interface AddItem {
  type: typeof ADD_ITEM;
  payload: {
    item: Item;
    quantity: number;
  };
}

interface RemoveItem {
  type: typeof REMOVE_ITEM;
  payload: {
    item: Item;
    quantity: number;
  };
}

export type ItemActionTypes = AddItem | RemoveItem;
