import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';
import s from './Input.module.css';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type InputPropsType = Omit<DefaultInputPropsType, 'type'> & {
   onChangeValue?: (value: number) => void
}

export const Input = (props: InputPropsType) => {
   const {
      className,
      onChangeValue,
      onChange,
      ...restProps
   } = props;


   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChangeValue?.(+e.currentTarget.value);

      onChange?.(e);
   }


   const finalClassName = s.input
      + (className ? ' ' + className : '');

   return (
      <input type="number" className={finalClassName} onChange={onChangeHandler} {...restProps}/>
   );
};