type InitialStateType = typeof initialState;

const initialState = {
   counterValue: 0,
   startValue: 0,
   maxValue: 0,
   clueText: null,
}

export const counterReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
   switch (action.type) {
      case 'xxx': {
         return state;
      }
      default: {
         return state;
      }
   }
};


export const changeStartMaxValue = () => {

}