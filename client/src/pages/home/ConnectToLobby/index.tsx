import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Switch } from '@material-ui/core';
import tempIcon from 'assets/images/header-logo.svg';
import { useHistory } from 'react-router';
import style from './index.module.scss';

enum FormControls {
  firstName = 'firstName',
  lastName = 'lastName',
  observer = 'observer',
  position = 'position',
  image = 'image',
}

type FormData = {
  [FormControls.firstName]: string;
  [FormControls.lastName]?: string;
  [FormControls.observer]: string;
  [FormControls.position]?: string;
  [FormControls.image]?: string;
}

type LoginFormProps = {
  userImage?: string,
  closeForm: () => void,
}

const LoginForm: FC<LoginFormProps> = ({ userImage = tempIcon, closeForm }) => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = handleSubmit((data: FormData) => {
    console.log(data);
    reset();
    history.push('/lobby');
  });

  const closeFormHandler = (): void => {
    reset();
    closeForm();
  };

  return (
    <form className={style.form} onSubmit={onSubmit}>
      <h2>Connect to lobby</h2>

      <label htmlFor={FormControls.firstName}>First Name</label>
      <input
        className={style.inputField}
        {...register(FormControls.firstName, {
          required: true,
          maxLength: {
            value: 30,
            message: 'first name must be less than 30 characters',
          },
        })}
      />
      <p className={style.error}>
        {errors.firstName?.type === 'required' && 'First name is required'}
        {errors.firstName?.message}
      </p>

      <label htmlFor={FormControls.lastName}>Last Name</label>
      <input
        className={style.inputField}
        {...register(FormControls.lastName, {
          maxLength: {
            value: 30,
            message: 'first name must be less than 30 characters',
          },
        })}
      />
      <p className={style.error}>{errors.lastName?.message}</p>

      <label htmlFor={FormControls.observer}>Connect as observer</label>
      <Switch color="primary" {...register(FormControls.observer)} />

      <label htmlFor={FormControls.position}>Your job position</label>
      <input className={style.inputField} {...register(FormControls.position)} />

      <label htmlFor={FormControls.image}>Image:</label>
      <input type="file" {...register(FormControls.image)} />
      <img className={style.controls__image} src={userImage} alt="userImage" />

      <div className={style.controls}>
        <button type="button" onClick={closeFormHandler}>Cancel</button>
        <input className={style.controls__submit} type="submit" value="Confirm" />
      </div>
    </form>
  );
};

export default LoginForm;
