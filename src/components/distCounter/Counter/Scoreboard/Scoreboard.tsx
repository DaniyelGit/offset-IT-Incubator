import React from 'react';
import s from './Scoreboard.module.css';
import {Simulate} from "react-dom/test-utils";


type ScoreboardPropsType = {
   counterValue: number
   maxValue: number

}

export const Scoreboard = (props: ScoreboardPropsType) => {
   const {
      counterValue,
      maxValue,
   } = props;


   return (
      <div className={s.scoreboard}>
         <span className={counterValue !== maxValue ? '' : s.maxValue}>
            {counterValue}
         </span>
      </div>
   );
};