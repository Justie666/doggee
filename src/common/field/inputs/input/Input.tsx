import React, { FC, HTMLProps } from 'react';
import styles from './Input.module.scss';

interface InputProps extends HTMLProps<HTMLInputElement> {
  isError?: boolean;
  helperText: string | null;
}

const Input: FC<InputProps> = ({ isError = false, helperText, ...props }) => {
  return (
    <>
      <input
        {...props}
        className={`${styles.input} & ${isError ? styles.error : ''}`}
      />
      {isError && helperText && (
        <div className={styles.helper_text}>{helperText}</div>
      )}
    </>
  );
};

export default Input;
