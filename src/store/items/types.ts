export interface Item {
  name: string;
  quantity: number;
  cost: number;
  src: string;
}

export interface Billionaire {
  name: string;
  totalMoney: number;
  introduction: string[];
  imageSrc: string;
  wealthSource: string;
}

export interface ItemReducerModel {
  totalMoney: number;
  items: Item[];
  billionaires: Billionaire[];
  currentBillionaire: Billionaire;
}

// ActionTypes
export const UPDATE_ITEM = "UPDATE_ITEM";
export const INIT_BILLIONAIRES = "INIT_BILLIONAIRES";
export const SET_BILLIONAIRES = "SET_BILLIONAIRES";
export const UPDATE_BILLIONAIRE = "UPDATE_BILLIONAIRE";

export interface InitBillionaires {
  type: typeof INIT_BILLIONAIRES;
}

export interface UpdateBillionaire {
  type: typeof UPDATE_BILLIONAIRE;
  billionaire: Billionaire;
}

export interface SetBillionaires {
  type: typeof SET_BILLIONAIRES;
  billionaires: Billionaire[];
}

export interface UpdateItem {
  type: typeof UPDATE_ITEM;
  payload: {
    item: Item;
    quantity: number;
  };
}

export type ItemActionTypes =
  | InitBillionaires
  | SetBillionaires
  | UpdateBillionaire
  | UpdateItem;
