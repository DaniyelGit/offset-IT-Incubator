import React, {ButtonHTMLAttributes, MouseEvent, ReactNode} from 'react';
import s from './Button.module.css';

export enum variantButton {
   DISABLED = 'disabled',
   DEFAULT = 'default',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   onClickCallback?: () => void
   variant?: ReactNode
}

export const Button = (props: ButtonProps) => {
   const {
      onClickCallback,
      onClick,
      disabled,
      variant = variantButton.DEFAULT,
      ...restProps
   } = props

   const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
      onClick?.(e);

      onClickCallback?.();
   };

   const finalClassName = `${s.button} ${disabled
      ? s.disabled
      : variant === variantButton.DEFAULT
         ? s.default
         : ''}`

   return (
      <button className={finalClassName}
              onClick={onClickHandler}
              disabled={disabled}
              {...restProps}
      />
   );
};