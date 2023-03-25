import React from 'react';
import s from './SettingsField.module.css';
import {Input} from "../../Input/Input";

type SettingsFieldPropsType = {
   startValue: number
   maxValue: number,
   setStartValue: (value: number) => void
   setMaxValue: (value: number) => void
}

export const SettingsField = (props: SettingsFieldPropsType) => {
   const {
      startValue,
      maxValue,
      setStartValue,
      setMaxValue,
   } = props;

   return (
      <div className={s.settingsField}>
         <div>
            <span className={s.text}>max value:</span>
            <Input
               value={maxValue}
               onChangeValue={setMaxValue}
            />
         </div>
         <div>
            <span className={s.text}>start value:</span>
            <Input
               value={startValue}
               onChangeValue={setStartValue}
            />
         </div>
      </div>
   );
};