import React from 'react';
import s from './Counter.module.css';
import {Scoreboard} from "./Scoreboard/Scoreboard";
import {Button, variantButton} from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../../redux/store";
import {incrCurrentValue, InitialStateType, resetCounter} from "../../../redux/reducers/counterReducer";



type CounterPropsType = {

}

export const Counter = (props: CounterPropsType) => {
   const {
      counterValue,
      startValue,
      maxValue,
      clueText
   } = useSelector<RootStateType, InitialStateType>(state => state.counter);

   const dispatch = useDispatch();

   const incrCurrentValueHandler = () => {
      dispatch(incrCurrentValue());
   };

   const resetCounterValueHandler = () => {
      dispatch(resetCounter());
   }


   const checkErrorInc = startValue >= maxValue
      || startValue < 0
      || maxValue < 1
      || counterValue === maxValue || counterValue === -1;

   const checkErrorReset = counterValue === startValue || counterValue === -1;

   return (
      <div className={s.counter}>
         <Scoreboard
            startValue={startValue}
            maxValue={maxValue}
            clueText={clueText}
            counterValue={counterValue}
            errorText='Incorrect value!'
         />
         <div className={s.btnWrapper}>
            <Button
               variant={checkErrorInc ? variantButton.DISABLED : variantButton.DEFAULT}
               disabled={checkErrorInc}
               onClickCallback={incrCurrentValueHandler}
            >
               inc
            </Button>
            <Button
               variant={checkErrorReset ? variantButton.DISABLED : variantButton.DEFAULT}
               disabled={checkErrorReset}
               onClickCallback={resetCounterValueHandler}
            >
               reset
            </Button>
         </div>
      </div>
   );
};