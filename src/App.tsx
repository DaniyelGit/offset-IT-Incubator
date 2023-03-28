import React, {useEffect} from 'react';
import './App.css';
import {Counter} from "./components/distCounter/Counter/Counter";
import {Settings} from "./components/distCounter/Settings/Settings";
import {getDataState, saveDataState} from "./localStorage/localStorage";


export type StateType = {
   counterValue: number
   startValue: number
   maxValue: number
   clueText: null | 'enter values and press set'
}

function App() {
   // ----- Counter -------
   const [state, setState] = React.useState<StateType>({
      counterValue: 0,
      startValue: 0,
      maxValue: 0,
      clueText: null,
   })

   const {startValue, maxValue} = state;


   useEffect(() => {
      setState(getDataState('counterValues', state));
   }, [])

   useEffect(() => {
      saveDataState('counterValues', {maxValue, startValue});
   }, [maxValue, startValue]);


   const changeStartMaxValue = (key: string, value: number): void => {
      setState(prevState => {
         return {
            ...prevState,
            [key]: value,
            counterValue: -1,
            clueText: 'enter values and press set',
         }
      })
   }

   const resetCurrentValue = (value: number) => {
      setState({...state, counterValue: value})
   }

   const incrCurrentValue = () => {
      setState({
         ...state, counterValue: state.counterValue + 1
      });
   }

   const setValue = (startValue: number) => {
      setState({
         ...state,
         counterValue: startValue,
         clueText: null,
      });
   };

   return (
      <div className="App-wrapper">
         <Settings
            state={state}
            changeStartMaxValue={changeStartMaxValue}
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
