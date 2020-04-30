import {
  ItemReducerModel,
  ItemActionTypes,
  UPDATE_ITEM,
  UPDATE_BILLIONAIRE,
  UpdateItem,
  UpdateBillionaire,
} from "./types";

const initialState: ItemReducerModel = {
  totalMoney: 1000,
  billionaires: [],
  currentBillionaire: { name: "", totalMoney: 0, introduction: "" },
  items: [
    { name: "Beach house", quantity: 0, cost: 50, src: "placeholder" },
    { name: "Airplane", quantity: 0, cost: 100, src: "placeholder" },
  ],
};

const onUpdateItem = (
  state: ItemReducerModel,
  action: UpdateItem
): ItemReducerModel => {
  const newQuantity = action.payload.quantity;
  const indexOfItemToUpdate = state.items.findIndex(
    (item) => item.name === action.payload.item.name
  );
  const itemToUpdate = state.items[indexOfItemToUpdate];
  const updatedItem = { ...itemToUpdate, quantity: newQuantity };
  const itemsCopy = [...state.items];
  itemsCopy.splice(indexOfItemToUpdate, 1, updatedItem);

  const updatedTotalMoney =
    state.totalMoney -
    itemToUpdate.cost * itemToUpdate.quantity +
    itemToUpdate.cost * newQuantity;

  return {
    totalMoney: updatedTotalMoney,
    billionaires: state.billionaires,
    currentBillionaire: state.currentBillionaire,
    items: itemsCopy,
  };
};

const onUpdateBillionaire = (
  state: ItemReducerModel,
  action: UpdateBillionaire
): ItemReducerModel => {
  // eslint-disable-next-line no-console
  console.log(action);
  return state;
};

export const itemReducer = (
  state = initialState,
  action: ItemActionTypes
): ItemReducerModel => {
  switch (action.type) {
    // case INIT_BILLIONAIRES:
    //   return onInitBillionaires(state, action);
    case UPDATE_ITEM:
      return onUpdateItem(state, action);
    case UPDATE_BILLIONAIRE:
      return onUpdateBillionaire(state, action);
    default:
      return state;
  }
};
