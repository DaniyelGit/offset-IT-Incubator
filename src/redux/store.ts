import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./reducers/counterReducer";
import {loadState, saveState} from "../localStorage/localStorage";
import throttle from 'lodash.throttle';


const rootStore = combineReducers({
   counter: counterReducer,
});

export type RootStateType = ReturnType<typeof rootStore>;

const persistedState = loadState();
export const store = legacy_createStore(rootStore, persistedState);

store.subscribe(throttle(() => {
   saveState({
      counter: store.getState().counter
   });
}, 1000));

// @ts-ignore
window.store = store;