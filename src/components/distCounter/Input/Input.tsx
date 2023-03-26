import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, ReactNode} from 'react';
import s from './Input.module.css';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type InputPropsType = Omit<DefaultInputPropsType, 'type'> & {
   onChangeValue?: (value: number) => void
   error?: ReactNode
}

export const Input = (props: InputPropsType) => {
   const {
      onChange,
      onChangeValue,
      error,
      ...restProps
   } = props;


   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChangeValue?.(+e.currentTarget.value);

      onChange?.(e);
   };


   const finalClassName = s.input
      + (error
         ? ' ' + s.errorInput
         : '');

   return (
      <input type="number"
             className={finalClassName} onChange={onChangeHandler} {...restProps}/>
   );
};