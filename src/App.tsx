import React, {useEffect} from 'react';
import './App.css';
import {Counter} from "./components/distCounter/Counter/Counter";
import {Settings} from "./components/distCounter/Settings/Settings";


export type StateType = {
   counterValue: number
   startValue: number
   maxValue: number
}

function App() {
   // ----- Counter -------
   const [state, setState] = React.useState<StateType>({
      counterValue: 0,
      startValue: 0,
      maxValue: 0,
   })

   const changeStartValue = (value: number) => {
      setState({...state, startValue: value});
   };
   const changeMaxValue = (value: number) => {
      setState({...state, maxValue: value});
   };
   const incrCurrentValue = () => {
      setState({
         ...state, counterValue: state.counterValue + 1});
   }
   const resetCurrentValue = (value: number) => {
      setState({...state, counterValue: value})
   }
   const setValue = (startValue: number) => {
      setState({...state, counterValue: startValue});
   };

   return (
      <div className="App-wrapper">
         <Settings
            state={state}
            changeStartValue={changeStartValue}
            changeMaxValue={changeMaxValue}
            setValue={setValue}
         />
         <Counter
            state={state}
            incrCurrentValue={incrCurrentValue}
            resetCurrentValue={resetCurrentValue}
         />
      </div>
   );
}

export default App;
