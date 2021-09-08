import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import style from './index.module.scss';
import logo from '../../assets/main-page-logo.svg';

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
          <h1>Start your planning</h1>
          <label htmlFor="start">Create Session:</label>
          <button type="button" onClick={startNewGame}>Start new game</button>
        </div>

        <div className={style.connect}>
          <h1>OR:</h1>
          <label htmlFor="url">Connect to lobby by URL:</label>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              {...register('url', {
                required: true,
                pattern: {
                  value: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm,
                  message: 'invalid email address',
                },
              })}
            />
            <input className={style.submit} type="submit" value="Connect" />
            <div className={style.error}>{errors.url?.message}</div>
          </form>
        </div>

      </div>
    </div>
  );
};

const Home: React.FC<HTMLElement> = () => {
  const [welcomeMsg, setWelcomeMsg] = useState<string>('');

  useEffect(() => {
    (async () => {
      const res = await axios.get('/api/start');
      setWelcomeMsg(res.data.msg);
    })();
  }, []);

  const startNewGame = (): void => {
    console.log('start new game');
  };

  const connect = (url: string): void => {
    console.log(url);
  };

  return (
    <>
      <h2>{welcomeMsg}</h2>
      <Layout startNewGame={startNewGame} connect={connect} />
    </>
  );
};

export default Home;
