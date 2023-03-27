import React from 'react';
import s from './SettingsField.module.css';
import {fieldNames, Input} from "../../Input/Input";

type SettingsFieldPropsType = {
   startValue: number
   maxValue: number
   checkError: boolean
   changeStartMaxValue: (key: string, value: number) => void
}

export const SettingsField = (props: SettingsFieldPropsType) => {
   const {
      startValue,
      maxValue,
      checkError,
      changeStartMaxValue,
   } = props;

   const changeStartMaxHandler = (name: fieldNames, value: number) => {
      changeStartMaxValue(name, value)
   }

   return (
      <div className={s.settingsField}>
         <div>
            <span className={s.text}>max value:</span>
            <Input value={maxValue}
                   name={fieldNames.MAX}
                   onChangeValue={changeStartMaxHandler}
                   error={checkError}/>
         </div>
         <div>
            <span className={s.text}>start value:</span>
            <Input value={startValue}
                   name={fieldNames.START}
                   onChangeValue={changeStartMaxHandler}
                   error={checkError}/>
         </div>
      </div>
   );
};