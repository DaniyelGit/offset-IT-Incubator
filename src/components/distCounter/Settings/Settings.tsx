import React from 'react';
import s from './Settings.module.css';
import {SettingsField} from "./SettingsField/SettingsField";
import {Button} from "../Button/Button";
import {StateType} from "../../../App";

type SettingPropsType = {
   state: StateType
   changeStartMaxValue: (key: string, value: number) => void
   setValue: (startValue: number) => void
}

export const Settings = (props: SettingPropsType) => {
   const {
      state,
      changeStartMaxValue,
      setValue,
   } = props;

   const {startValue, maxValue} = state;

   const checkError = startValue >= maxValue
      || startValue < 0
      || maxValue < 1;

   return (
      <div className={s.settings}>
         <SettingsField
            startValue={startValue}
            maxValue={maxValue}
            changeStartMaxValue={changeStartMaxValue}
            checkError={checkError}
         />

         <div className={s.btnWrapper}>
            <Button
               xType={checkError ? 'disabled' : 'default'}
               disabled={checkError}
               onClickCallback={() => {
                  setValue(startValue);
               }}
            >
               set
            </Button>
         </div>
      </div>
   );
};