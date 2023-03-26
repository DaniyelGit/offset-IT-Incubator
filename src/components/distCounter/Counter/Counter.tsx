import React from 'react';
import s from './Counter.module.css';
import {Scoreboard} from "./Scoreboard/Scoreboard";
import {Button} from "../Button/Button";
import {StateType} from "../../../App";

type CounterPropsType = {
   state: StateType
   incrCurrentValue: () => void
   resetCurrentValue: (value: number) => void
}

export const Counter = (props: CounterPropsType) => {
   const {
      state,
      incrCurrentValue,
      resetCurrentValue,
   } = props;

   const {counterValue, startValue, maxValue, clueText} = state;

   const checkErrorInc = startValue >= maxValue
      || startValue < 0
      || maxValue < 1
      || counterValue === maxValue || counterValue === -1;

   const checkErrorReset = counterValue === startValue || counterValue === -1;

   return (
      <div className={s.counter}>
         <Scoreboard
            maxValue={maxValue}
            clueText={clueText}
            counterValue={counterValue}
         />
         <div className={s.btnWrapper}>
            <Button
               xType={checkErrorInc ? 'disabled' : 'default'}
               disabled={checkErrorInc}
               onClickCallback={incrCurrentValue}
            >
               inc
            </Button>
            <Button
               xType={checkErrorReset ? 'disabled' : 'default'}
               disabled={checkErrorReset}
               onClickCallback={() => resetCurrentValue(startValue)}
            >
               reset
            </Button>
         </div>
      </div>
   );
};