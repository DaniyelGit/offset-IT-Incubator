import React from 'react';
import s from './Scoreboard.module.css';



type ScoreboardPropsType = {
   counterValue: number
}

export const Scoreboard = (props: ScoreboardPropsType) => {
   const {
      counterValue,
   } = props;


   return (
      <div className={s.scoreboard}>
         <span className={''}>
            {counterValue}
         </span>
      </div>
   );
};