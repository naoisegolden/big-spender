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

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

interface AddItem {
  type: typeof ADD_ITEM;
  payload: Item;
}

interface RemoveItem {
  type: typeof REMOVE_ITEM;
  payload: Item;
}

export type ItemActionTypes = AddItem | RemoveItem;
