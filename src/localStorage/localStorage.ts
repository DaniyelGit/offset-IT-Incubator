export const saveDataState = <T>(key: string, data: T) => {
   localStorage.setItem('counterValues', JSON.stringify({
      ...data,
   }));
};

export const getDataState = <T>(key: string, defaultState: T) => {
   const dataFromLS = localStorage.getItem('counterValues');
   if (dataFromLS) {
      const dataParse = JSON.parse(dataFromLS)
      return ({...defaultState,
         counterValue: dataParse.startValue,
         ...dataParse,
      });
   }
}