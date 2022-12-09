import React, { FC, HTMLProps } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({ children, ...params }) => {
  return <button className={styles.button}>{children}</button>;
};

export default Button;
