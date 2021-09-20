import React from 'react';
import { useForm } from 'react-hook-form';
import logo from 'assets/images/main-page-logo.svg';
import style from './index.module.scss';

type LayoutProps = {
    startNewGame: () => void,
    connect: (url: string) => void,
  }

type FormData = {
    url: string
  }

const Layout: React.FC<LayoutProps> = ({ startNewGame, connect }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = handleSubmit((data: FormData) => connect(data.url));

  return (
    <div className={style.layout}>

      <img src={logo} alt="logo" className={style.logo} />

      <div className={style.content}>
        <div className={style.startGame}>
          <h2>Start your planning</h2>
          <label htmlFor="start">Create Session:</label>
          <button type="button" onClick={startNewGame}>Start new game</button>
        </div>

        <div className={style.connect}>
          <h2>OR:</h2>
          <label htmlFor="url">Connect to lobby by URL:</label>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              {...register('url', {
                required: true,
                pattern: {
                  value: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm,
                  message: 'Invalid URL!',
                },
              })}
            />
            <input className={style.submit} type="submit" value="Connect" />
            <p className={style.error}>
              {errors.url?.type === 'required' && 'URL is required!'}
              {errors.url?.message}
            </p>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Layout;
