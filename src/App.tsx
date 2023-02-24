import React from 'react';
import './App.css';
import Telegram from "./components/Telegram/Telegram";


export type StateMessageType = {
   id: string,
   message: string
}

function App() {

   // ----- Counter -------
   const maxValue = 5;
   const [counterValue, setCounterValue] = React.useState<number>(0);

   // ----- Telegram ------

   const limit = 5;
   const [stateMessage, setStateMessage] = React.useState<Array<StateMessageType>>([]);
   const [textValue, setTextValue] = React.useState<string>('');
   const [counter, setCounter] = React.useState<number>(0);
   const [error, setError] = React.useState<boolean>(false);

   const addMessage = () => {
      if (stateMessage.length < limit) {
         const newMessage = {
            id: String(new Date().getTime()),
            message: textValue
         };
         setStateMessage([newMessage, ...stateMessage])
         setCounter(counter + 1);
         setTextValue('');
      }
      else {
         setError(true);
      }
   };

   const clearState = () => {
      setStateMessage([]);
      setCounter(0);
      setError(false);
   }



  return (
    <div className="App-wrapper">
      {/*<Counter
         counterValue={counterValue}
         setCounterValue={setCounterValue}
         maxValue={maxValue}
      />*/}

       <Telegram
          limit={limit}
          stateMessage={stateMessage}
          setStateMessage={setStateMessage}
          textValue={textValue}
          setTextValue={setTextValue}
          counter={counter}
          setCounter={setCounter}
          error={error}
          addMessage={addMessage}
          clearState={clearState}
          setError={setError}
       />

    </div>
  );
}

export default App;
