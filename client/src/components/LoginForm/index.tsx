import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Switch } from '@material-ui/core';
import style from './index.module.scss';

type FormData = {
  firstName: string;
  lastName?: string;
  observer: string;
  position?: string;
  image?: string;
};

interface LoginFormProps {
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

        <label htmlFor="firstName">First Name</label>
        <input
          className={style.inputField}
          {...register('firstName', {
            required: true,
            maxLength: {
              value: 30,
              message: 'first name must be less than 30 characters',
            },
          })}
        />
        <div className={style.error}>{errors.firstName?.message}</div>

        <label htmlFor="lastName">Last Name</label>
        <input
          className={style.inputField}
          {...register('lastName', {
            maxLength: {
              value: 30,
              message: 'first name must be less than 30 characters',
            },
          })}
        />
        <div className={style.error}>{errors.lastName?.message}</div>

        <label htmlFor="observer">Connect as observer</label>
        <Switch color="primary" {...register('observer')} />
        <div className={style.error}>{errors.observer?.message}</div>

        <label htmlFor="position">Your job position</label>
        <input className={style.inputField} {...register('position')} />

        <label htmlFor="image">Image:</label>
        <input type="file" {...register('image')} />

        <input className={style.submit} type="submit" value="Confirm" />
      </form>

      <img src={userImage} alt="userImage" />
      <button type="button" onClick={() => { closeForm(); }}>Cancel</button>
    </>
  );
};

export default LoginForm;
