import React from 'react';
import s from './Settings.module.css';
import {SettingsField} from "./SettingsField/SettingsField";
import {Button} from "../Button/Button";

type SettingPropsType = {
   startValue: number
   maxValue: number,
   setStartValue: (value: number) => void
   setMaxValue: (value: number) => void
   setCounterValue: (counterValue: number) => void
}

export const Settings = (props: SettingPropsType) => {
   const {
      startValue,
      maxValue,
      setStartValue,
      setMaxValue,
      setCounterValue,
   } = props;



   return (
      <div className={s.settings}>
         <SettingsField
            startValue={startValue}
            maxValue={maxValue}
            setStartValue={setStartValue}
            setMaxValue={setMaxValue}
         />

         <div className={s.btnWrapper}>
            <Button
               onClickCallback={() => {
                  setCounterValue(startValue)
               }}
            >
               set
            </Button>
         </div>
      </div>
   );
};