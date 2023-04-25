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
      case 'SET_RANGE': {
         return {
            ...state,
            ...action.payLoad,
            clueText: null,
         }
      }
      case 'INCR_CURRENT_VALUE': {
         return {
            ...state,
            counterValue: state.counterValue + 1,
         }
      }
      case 'RESET_COUNTER': {
         return {
            ...state,
            counterValue: state.startValue,
         }
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
   } as const;
};

export const setRange = (startValue: number) => {
   return {
      type: 'SET_RANGE',
      payLoad: {
         counterValue: startValue
      }
   } as const;
};

export const incrCurrentValue = () => {
   return {
      type: 'INCR_CURRENT_VALUE',
   } as const;
};

export const resetCounter = () => {
   return {
      type: 'RESET_COUNTER',
   } as const;
}


type ChangeStartMaxValueType = ReturnType<typeof changeStartMaxValue>;
type SetRangeType = ReturnType<typeof setRange>;
type IncrCurrentValueType = ReturnType<typeof incrCurrentValue>;
type ResetCounterType = ReturnType<typeof resetCounter>;

export type ActionsType = ChangeStartMaxValueType
   | SetRangeType | IncrCurrentValueType | ResetCounterType;