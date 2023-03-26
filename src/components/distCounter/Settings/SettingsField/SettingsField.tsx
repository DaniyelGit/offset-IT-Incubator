import React from 'react';
import s from './SettingsField.module.css';
import {Input} from "../../Input/Input";

type SettingsFieldPropsType = {
   startValue: number
   maxValue: number
   checkError: boolean
   changeStartValue: (value: number) => void
   changeMaxValue: (value: number) => void
}

export const SettingsField = (props: SettingsFieldPropsType) => {
   const {
      startValue,
      maxValue,
      checkError,
      changeMaxValue,
      changeStartValue,
   } = props;

   return (
      <div className={s.settingsField}>
         <div>
            <span className={s.text}>max value:</span>
            <Input value={maxValue}
                   onChangeValue={changeMaxValue}
                   error={checkError}/>
         </div>
         <div>
            <span className={s.text}>start value:</span>
            <Input value={startValue}
                   onChangeValue={changeStartValue}
                   error={checkError}/>
         </div>
      </div>
   );
};