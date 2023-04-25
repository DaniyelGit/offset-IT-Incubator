import {RootStateType} from "../redux/store";

export const loadState = () => {
   try {
      const serializedState = localStorage.getItem('stateCounter');
      if (serializedState === null) {
         return undefined;
      }
      return JSON.parse(serializedState);
   }
   catch (error) {
      console.log(error)
   }
}

export const saveState = (state: RootStateType) => {
   try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('stateCounter', serializedState);
   }
   catch(error) {
      console.log(error);
   }
}


/*export const saveDataState = <T>(key: string, data: T) => {
   localStorage.setItem(key, JSON.stringify({
      ...data,
   }));
};*/
/*
export const getDataState = <T>(key: string, defaultState: T) => {
   const dataFromLS = localStorage.getItem(key);
   if (dataFromLS) {
      const dataParse = JSON.parse(dataFromLS)
      return ({...defaultState,
         counterValue: dataParse.startValue,
         ...dataParse,
      });
   }
}*/
