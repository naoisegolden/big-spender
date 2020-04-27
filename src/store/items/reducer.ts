import {
  ItemReducerModel,
  ItemActionTypes,
  ADD_ITEM,
  REMOVE_ITEM,
} from "./types";

const initialState: ItemReducerModel = {
  totalMoney: 100000000000,
  items: [
    { name: "House", cost: 0, amount: 5000000, src: "placeholder" },
    {
      name: "Airplane",
      cost: 0,
      amount: 10000000,
      src: "placeholder",
    },
  ],
};

export const itemReducer = (
  state = initialState,
  action: ItemActionTypes
): ItemReducerModel => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...initialState,
      };
    case REMOVE_ITEM:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
