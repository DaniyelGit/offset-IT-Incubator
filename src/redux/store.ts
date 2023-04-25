import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./reducers/counterReducer";

const rootStore = combineReducers({
   counter: counterReducer,
});

export type RootStateType = ReturnType<typeof rootStore>;

export const store = legacy_createStore(rootStore);

// @ts-ignore
window.store = store;