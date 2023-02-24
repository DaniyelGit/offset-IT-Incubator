import React, {ButtonHTMLAttributes, DetailedHTMLProps, MouseEvent} from 'react';
import s from './SuperButton.module.css';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type SuperButtonPropsType = DefaultButtonPropsType & {
   onClickCallback?: () => void
}

const SuperButton = (props: SuperButtonPropsType) => {
   const {
      onClickCallback,
      disabled,
      onClick,
      ...restProps
   } = props;

   const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
      onClick?.(e);

      onClickCallback?.();
   }

   const finalClass = s.button + ' ' + (disabled ? s.disabled : '');

   return (
      <button className={finalClass} onClick={onClickHandler} {...restProps}/>
   );
};

export default SuperButton;