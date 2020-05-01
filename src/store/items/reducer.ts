import {
  ItemReducerModel,
  ItemActionTypes,
  UPDATE_ITEM,
  UPDATE_BILLIONAIRE,
  UpdateItem,
  UpdateBillionaire,
  SET_BILLIONAIRES,
  SetBillionaires,
  Billionaire,
} from "./types";

const initialState: ItemReducerModel = {
  totalMoney: 1000,
  billionaires: [],
  currentBillionaire: {
    name: "",
    totalMoney: 0,
    introduction: "",
    imageSrc: "",
  },
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
  const currentBillionaire: { currentBillionaire: Billionaire } = {
    currentBillionaire: {
      name: action.billionaire.name,
      totalMoney: action.billionaire.totalMoney,
      introduction: action.billionaire.introduction,
      imageSrc: action.billionaire.imageSrc,
    },
  };
  const updateTotalMoney = {
    totalMoney: action.billionaire.totalMoney,
  };
  return {
    ...state,
    ...currentBillionaire,
    ...updateTotalMoney,
  };
};

const onSetBillionaires = (
  state: ItemReducerModel,
  action: SetBillionaires
): ItemReducerModel => {
  const updatedBillionaireState = {
    billionaires: action.billionaires,
  };
  return {
    ...state,
    ...updatedBillionaireState,
  };
};

export const itemReducer = (
  state = initialState,
  action: ItemActionTypes
): ItemReducerModel => {
  switch (action.type) {
    case SET_BILLIONAIRES:
      return onSetBillionaires(state, action);
    case UPDATE_ITEM:
      return onUpdateItem(state, action);
    case UPDATE_BILLIONAIRE:
      return onUpdateBillionaire(state, action);
    default:
      return state;
  }
};
