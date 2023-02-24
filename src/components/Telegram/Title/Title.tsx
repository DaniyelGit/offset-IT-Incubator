import React from 'react';
import s from './Title.module.css';

type TitlePropsType = {
   error: boolean
   counter: number
}

export const Title = (props: TitlePropsType) => {

   const {
      error,
      counter,
   } = props;

   return (
      <>
         {
            error
               ? <div className={s.errorText}>{`Превышен лимит сообщений !!!!`}</div>
               : <div>{`Лимит сообщений - ${counter}`}</div>
         }
      </>
   );
};