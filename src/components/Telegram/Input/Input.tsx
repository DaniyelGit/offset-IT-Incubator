import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from 'react';

type DefaultInputType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type InputPropsType = DefaultInputType & {
   onChangeText?: (textValue: string) => void
   onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void
}

export const Input = (props: InputPropsType) => {

   const {
      onChange,
      className,
      onKeyPress,
      onEnter,
      onChangeText,
      ...restProps
   } = props;

   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);

      onChangeText?.(e.currentTarget.value);
   };

   const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      onKeyPress?.(e);

      onEnter &&
      e.key === 'Enter' &&
      onEnter(e);
   }


   return (
      <input type="text" {...restProps} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>
   );
};
