import React, {useEffect} from 'react';
import './App.css';
import {Counter} from "./components/distCounter/Counter/Counter";
import {Settings} from "./components/distCounter/Settings/Settings";


function App() {

   // ----- Counter -------
   const [counterValue, setCounterValue] = React.useState<number>(0);
   const [startValue, setStartValue] =React.useState<number>(0);
   const [maxValue, setMaxValue] = React.useState<number>(0);
   const [error, setError] = React.useState<boolean>(false);

   /*(startValue === maxValue
      || startValue < 0
      || maxValue < 0
      || startValue > maxValue)*/

   return (
      <div className="App-wrapper">
         <Settings
            startValue={startValue}
            maxValue={maxValue}
            setStartValue={setStartValue}
            setMaxValue={setMaxValue}
            setCounterValue={setCounterValue}
         />
         <Counter
            counterValue={counterValue}
            setCounterValue={setCounterValue}
            maxValue={maxValue}
            startValue={startValue}
         />
      </div>
   );
}

export default App;
