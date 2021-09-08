import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../components/Greetings';

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
