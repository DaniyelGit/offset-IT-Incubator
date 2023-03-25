import React from 'react';
import s from './Counter.module.css';
import {Scoreboard} from "./Scoreboard/Scoreboard";
import {Button} from "../Button/Button";

type CounterPropsType = {
   counterValue: number
   maxValue: number
   startValue: number
   setCounterValue: (valueCounter: number) => void
}

export const Counter = (props: CounterPropsType) => {
   const {
      counterValue,
      setCounterValue,
      maxValue,
      startValue,
   } = props;

   return (
      <div className={s.counter}>
         <Scoreboard
            counterValue={counterValue}
            maxValue={maxValue}
         />
         <div className={s.btnWrapper}>
            <Button
               disabled={counterValue === maxValue}
               onClickCallback={() => {
                  counterValue < maxValue && setCounterValue(counterValue + 1)
               }}
            >
               inc
            </Button>
            <Button
               disabled={counterValue === 0}
               onClickCallback={() => {
                  setCounterValue(startValue);
               }}
            >
               reset
            </Button>
         </div>
      </div>
   );
};