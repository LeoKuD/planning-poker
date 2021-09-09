import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Switch } from '@material-ui/core';
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

const LoginForm: FC<LoginFormProps> = ({ userImage, closeForm }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = handleSubmit((data: FormData) => console.log(data));

  return (
    <>
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
        <div className={style.error}>{errors.firstName?.message}</div>

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
        <div className={style.error}>{errors.lastName?.message}</div>

        <label htmlFor={FormControls.observer}>Connect as observer</label>
        <Switch color="primary" {...register(FormControls.observer)} />
        <div className={style.error}>{errors.observer?.message}</div>

        <label htmlFor={FormControls.position}>Your job position</label>
        <input className={style.inputField} {...register(FormControls.position)} />

        <label htmlFor={FormControls.image}>Image:</label>
        <input type="file" {...register(FormControls.image)} />

        <input className={style.submit} type="submit" value="Confirm" />
      </form>

      <img src={userImage} alt="userImage" />
      <button type="button" onClick={() => { closeForm(); }}>Cancel</button>
    </>
  );
};

export default LoginForm;
