import React, {ChangeEvent, InputHTMLAttributes, ReactNode} from 'react';
import s from './Input.module.css';


export enum fieldNames {
   DEFAULT = 'default',
   START = 'startValue',
   MAX = 'maxValue'
}

interface NewInputPropsType extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
   onChangeValue?: (name: fieldNames, value: number) => void
   error?: ReactNode
   name?: fieldNames
}

export const Input = (props: NewInputPropsType) => {
   const {
      onChange,
      onChangeValue,
      error,
      name = fieldNames.DEFAULT,
      ...restProps
   } = props;

   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChangeValue?.(name, +e.currentTarget.value);

      onChange?.(e);
   };

   const finalClassName = `${s.input} ${error ? s.errorInput : ''}`

   return (
      <input type="number"
             className={finalClassName}
             onChange={onChangeHandler}
             name={name}
             {...restProps}
      />
   );
};