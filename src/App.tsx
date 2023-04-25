import React, {useEffect} from 'react';
import './App.css';
import {getDataState, saveDataState} from "./localStorage/localStorage";
import {Settings} from "./components/Counter/Settings/Settings";
import {Counter} from "./components/Counter/Counter/Counter";
import {useSelector} from "react-redux";
import {RootStateType} from "./redux/store";
import {InitialStateType} from "./redux/reducers/counterReducer";


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
   });

   const {startValue, maxValue} = state;

   useEffect(() => {
      setState(getDataState('counterValues', state));
   }, [])

   useEffect(() => {
      saveDataState('counterValues', {maxValue, startValue});
   }, [maxValue, startValue]);



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


