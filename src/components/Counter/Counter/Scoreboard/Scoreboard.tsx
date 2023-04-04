import React from 'react';
import s from './Scoreboard.module.css';


type ScoreboardPropsType = {
   counterValue: number
   maxValue: number
   startValue: number
   clueText: null | string
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

   const styleForMaksValue = `${s.counterValue} 
   ${maxValue === counterValue ? s.maxValue : ''}`

   const getJSX = ():JSX.Element => {
      if (startValue >= maxValue
         || startValue < 0
         || maxValue < 0) {
         return <span className={s.errorText}>{errorText}</span>;
      }
      if (clueText === null) {
         return <span className={styleForMaksValue}>{counterValue}</span>;
      }
      return <span className={s.clueText}>{clueText}</span>
   }

   return (
      <div className={s.scoreboard}>
         {getJSX()}
      </div>
   );
};