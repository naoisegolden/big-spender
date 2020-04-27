import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { itemReducer } from "./items/reducer";

// export type RootState = ReturnType<typeof itemReducer>;

const store = createStore(itemReducer, composeWithDevTools());

export default store;
