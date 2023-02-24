import React, {ChangeEvent} from 'react';
import {StateMessageType} from "../../App";
import {Title} from "./Title/Title";
import {Input} from "./Input/Input";
import SuperButton from "./Button/SuperButton";


type TelegramPropsType = {
   limit: number
   stateMessage: StateMessageType[]
   setStateMessage: (state: StateMessageType[]) => void
   textValue: string
   setTextValue: (textValue: string) => void
   counter: number
   setCounter: (counterValue: number) => void
   error: boolean
   addMessage: () => void
   clearState: () => void
   setError: (errorValue: boolean) => void
}



const Telegram = (props: TelegramPropsType) => {

   const {
      limit,
      stateMessage,
      setStateMessage,
      textValue,
      setTextValue,
      counter,
      setCounter,
      error,
      clearState,
      addMessage,
      setError,
   } = props;


   const mappedState = stateMessage.map((m) => {
      return (
         <li key={m.id}>{m.message}</li>
      );
   })

   return (
      <div>
         <Title error={error} counter={counter}/>
         <Input
            value={textValue}
            onChange={(e) => {
               setTextValue(e.currentTarget.value)
            }}
            onEnter={(e) => {
               e.key === 'Enter' && addMessage();
            }}
         />

         <SuperButton disabled={!(stateMessage.length !== limit)} onClickCallback={addMessage}>Добавить</SuperButton>
         <SuperButton onClickCallback={clearState}>очистить</SuperButton>

         <div>
            <SuperButton onClick={(e) => {
               const copyState = [...stateMessage];
               copyState.pop();
               setStateMessage(copyState);
               stateMessage.length !== 0 && setCounter(counter  - 1);
               setError(false);
            }}
            >
               удалить последнее сообщение
            </SuperButton>
         </div>

         <ul>
            {
               mappedState
            }
         </ul>
      </div>
   );
};

export default Telegram;