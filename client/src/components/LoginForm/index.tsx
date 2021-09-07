import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Switch } from '@material-ui/core';
import s from './index.module.scss';

type FormData = {
  firstName: string;
  lastName?: string;
  role: string;
  position?: string;
  image?: string;
};

const LoginForm: FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = handleSubmit((data: FormData) => console.log(data));

  return (
    <>
      <form className={s.form} onSubmit={onSubmit}>

        <h2>Connect to lobby</h2>
        <label htmlFor="firstName">First Name</label>
        <input
          className={s.inputField}
          {...register('firstName', {
            required: true,
            maxLength: {
              value: 30,
              message: 'first name must be less than 30 characters',
            },
          })}
        />
        <div className={s.error}>{errors.firstName?.message}</div>

        <label htmlFor="lastName">Last Name</label>
        <input
          className={s.inputField}
          {...register('lastName', {
            maxLength: {
              value: 30,
              message: 'first name must be less than 30 characters',
            },
          })}
        />
        <div className={s.error}>{errors.lastName?.message}</div>

        <label htmlFor="role">Connect as observer</label>
        <Switch color="primary" {...register('role', { required: true })} />
        <div className={s.error}>{errors.role?.message}</div>

        <label htmlFor="position">Your job position</label>
        <input className={s.inputField} {...register('position')} />

        <label htmlFor="image">Image:</label>
        <input type="file" {...register('image')} />

        <input className={s.submit} type="submit" />

      </form>
    </>
  );
};

export default LoginForm;
