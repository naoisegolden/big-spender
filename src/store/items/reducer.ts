import {
  ItemReducerModel,
  ItemActionTypes,
  ADD_ITEM,
  REMOVE_ITEM,
} from "./types";

const initialState: ItemReducerModel = {
  totalMoney: 100000000000,
  items: [
    { name: "Beach house", cost: 0, amount: 5000000, src: "placeholder" },
    { name: "Airplane", cost: 0, amount: 10000000, src: "placeholder" },
  ],
};

const addItemUpdateReducer = (
  state: ItemReducerModel,
  action: ItemActionTypes
): ItemReducerModel => {
  return state;
};

const removeItemUpdateReducer = (
  state: ItemReducerModel,
  action: ItemActionTypes
): ItemReducerModel => {
  return state;
};

export const itemReducer = (
  state = initialState,
  action: ItemActionTypes
): ItemReducerModel => {
  switch (action.type) {
    case ADD_ITEM:
      return addItemUpdateReducer(state, action);
    case REMOVE_ITEM:
      return removeItemUpdateReducer(state, action);
    default:
      return state;
  }
};
