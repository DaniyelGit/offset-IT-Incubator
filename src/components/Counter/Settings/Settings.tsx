import React from 'react';
import s from './Settings.module.css';
import {SettingsField} from "./SettingsField/SettingsField";
import {Button} from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../../redux/store";
import {changeStartMaxValue, InitialStateType} from "../../../redux/reducers/counterReducer";



type SettingPropsType = {
   setValue: (startValue: number) => void
}

export const Settings = (props: SettingPropsType) => {
   const {
      setValue,
   } = props;

   const {startValue, maxValue} = useSelector<RootStateType, InitialStateType>(state => state.counter);
   const dispatch = useDispatch();

   const checkError = startValue >= maxValue
      || startValue < 0
      || maxValue < 1;

   const setValueHandler = () => {
      setValue(startValue);
   }

   const changeStartMaxValueHandler = (key: string, value: number) => {
      dispatch(changeStartMaxValue(key, value))
   }

   return (
      <div className={s.settings}>
         <SettingsField
            startValue={startValue}
            maxValue={maxValue}
            changeStartMaxValue={changeStartMaxValueHandler}
            checkError={checkError}
         />

         <div className={s.btnWrapper}>
            <Button
               variant={checkError ? 'disabled' : 'default'}
               disabled={checkError}
               onClickCallback={setValueHandler}
            >
               set
            </Button>
         </div>
      </div>
   );
};