import React from 'react';
import './App.css';
import {Settings} from "./components/Counter/Settings/Settings";
import {Counter} from "./components/Counter/Counter/Counter";


function App() {

   return (
      <div className="App-wrapper">
         <Settings/>
         <Counter/>
      </div>
   );
}

export default App;


