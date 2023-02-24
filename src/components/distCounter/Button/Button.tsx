import React, {ButtonHTMLAttributes, DetailedHTMLProps, MouseEvent} from 'react';
import s from './Button.module.css';

type DefaultButtonType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type ButtonPropsType = DefaultButtonType & {
   onClickCallback?: () => void
}

export const Button = (props: ButtonPropsType) => {
   const {
      onClickCallback,
      onClick,
      disabled,
      ...restProps
   } = props

   const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
      onClick?.(e);

      onClickCallback?.();
   };

   const finalClassName = s.button
      + (disabled ? ' ' + s.disabled : '')

   return (
      <button className={finalClassName} onClick={onClickHandler} {...restProps}/>
   );
};