import React, {ButtonHTMLAttributes, DetailedHTMLProps, MouseEvent, ReactNode} from 'react';
import s from './Button.module.css';

type DefaultButtonType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type ButtonPropsType = DefaultButtonType & {
   onClickCallback?: () => void
   xType?: string
}

export const Button = (props: ButtonPropsType) => {
   const {
      onClickCallback,
      onClick,
      disabled,
      xType,
      ...restProps
   } = props

   const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
      onClick?.(e);

      onClickCallback?.();
   };

   const finalClassName = s.button
      + (disabled
      ? ' ' + s.disabled
         : xType === 'default'
         ? ' ' + s.default: '');


   return (
      <button className={finalClassName} onClick={onClickHandler} disabled={disabled} {...restProps}/>
   );
};