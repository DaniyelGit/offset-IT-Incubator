export type InitialStateType = {
   counterValue: number,
   startValue: number,
   maxValue: number,
   clueText: null | 'enter values and press set',
};

const initialState = {
   counterValue: 0,
   startValue: 0,
   maxValue: 0,
   clueText: null,
}

export const counterReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
   switch (action.type) {
      case 'CHANGE_START_MAX_VALUE': {
         return {
            ...state,
            [action.payload.name]: action.payload.value,
            counterValue: -1,
            clueText: 'enter values and press set',
         };
      }
      default: {
         return state;
      }
   }
};


export const changeStartMaxValue = (nameInput: string, value: number) => {
   return {
      type: 'CHANGE_START_MAX_VALUE',
      payload: {
         name: nameInput,
         value,
      }
   } as const
};


type ChangeStartMaxValueType = ReturnType<typeof changeStartMaxValue>;
export type ActionsType = ChangeStartMaxValueType;