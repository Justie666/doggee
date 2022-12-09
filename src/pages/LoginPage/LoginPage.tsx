import React, { ChangeEvent, FC, useState } from 'react';
import styles from './LoginPage.module.scss';
import { Link } from 'react-router-dom';
import Input from '../../common/field/inputs/input/Input';
import Button from '../../common/field/buttons/button/Button';

const validateIsEmpty = (value: string) => {
  if (!value) return 'field required';
  return null;
};

const validateUsername = (value: string) => {
  return validateIsEmpty(value);
};

const validatePassword = (value: string) => {
  return validateIsEmpty(value);
};

const loginFormValidateScheme = {
  username: validateUsername,
  password: validatePassword,
};

const validateLoginForm = (
  name: keyof typeof loginFormValidateScheme,
  value: string,
) => {
  return loginFormValidateScheme[name](value);
};

interface FormErrors {
  username: string | null;
  password: string | null;
}

const LoginPage: FC = () => {
  const [formValues, setFormValues] = useState({ username: '', password: '' });
  const [formErrors, setFormErrors] = useState<FormErrors>({
    username: null,
    password: null,
  });

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>DOGGEE</div>
        <div className={styles.form}>
          <div>
            <Input
              isError={!!formErrors.username}
              helperText={formErrors.username}
              value={formValues.username}
              placeholder='Username'
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                const username = event.target.value;
                setFormValues({ ...formValues, username });
                const error = validateLoginForm('username', username);
                setFormErrors({ ...formErrors, username: error });
              }}
            />
          </div>
          <div>
            <Input
              isError={!!formErrors.password}
              helperText={formErrors.password}
              value={formValues.password}
              placeholder='Password'
              type='password'
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                const password = event.target.value;
                setFormValues({ ...formValues, password });
                const error = validateLoginForm('password', password);
                setFormErrors({ ...formErrors, password: error });
              }}
            />
          </div>
          <Button>Sign in</Button>
        </div>
        <div className={styles.sign_up}>
          <Link to={'/'}>Create new account</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
