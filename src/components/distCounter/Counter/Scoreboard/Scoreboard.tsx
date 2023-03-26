import React from 'react';
import s from './Scoreboard.module.css';


type ScoreboardPropsType = {
   counterValue: number
   maxValue: number
   startValue: number
   clueText: string
   errorText?: string
}

export const Scoreboard = (props: ScoreboardPropsType) => {
   const {
      clueText,
      maxValue,
      startValue,
      counterValue,
      errorText,
   } = props;


   const styleForMaksValue = s.counterValue
      + (maxValue === counterValue ? ' ' + s.maxValue : '');

   const resultJSX = startValue >= maxValue
   || startValue < 0
   || maxValue < 0
      ? <span className={s.errorText}>{errorText}</span>
      : clueText === ''
         ? <span className={styleForMaksValue}>{counterValue}</span>
         : <span className={s.clueText}>{clueText}</span>

   return (
      <div className={s.scoreboard}>
         {resultJSX}
      </div>
   );
};