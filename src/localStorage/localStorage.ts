export const saveDataState = <T>(key: string, data: T) => {
   localStorage.setItem(key, JSON.stringify({
      ...data,
   }));
};

export const getDataState = <T>(key: string, defaultState: T) => {
   const dataFromLS = localStorage.getItem(key);
   if (dataFromLS) {
      const dataParse = JSON.parse(dataFromLS)
      return ({...defaultState,
         counterValue: dataParse.startValue,
         ...dataParse,
      });
   }
}