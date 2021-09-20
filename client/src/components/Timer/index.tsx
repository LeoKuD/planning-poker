import React, { FC, useEffect, useState } from 'react';
import { ITimer } from 'types/index';
import styles from './index.module.scss';

const Timer: FC<ITimer> = ({
  min = 0,
  sec = 30,
  mode = false,
  isRunningRound = true,
}: ITimer) => {
  const [[minutes, seconds], setTime] = useState([min, sec]);
  const [isRunning, setIsRunning] = useState(isRunningRound);
  const [masterMode, setMasterMode] = useState<boolean>(mode);

  const tick: any = () => {
    if (minutes === 0 && seconds === 0) {
      setIsRunning(false);
      console.log(isRunning);
    } else if (seconds === 0) {
      setTime([minutes - 1, 59]);
    } else {
      setTime([minutes, seconds - 1]);
    }
  };

  useEffect(() => {
    if (isRunning) {
      setTimeout(() => {
        tick();
      }, 1000);
    }
  });

  const handlerChangeMinutes: React.FormEventHandler<HTMLInputElement> = (
    e: any,
  ) => {
    setTime([e.currentTarget.value, seconds]);
  };
  const handlerChangeSeconds: React.FormEventHandler<HTMLInputElement> = (
    e: any,
  ) => {
    setTime([minutes, e.currentTarget.value]);
  };
  return (
    <article className={styles.timer}>
      <div className={styles.timer_part}>
        <div className={styles.counter}>
          <p>minutes</p>
          {masterMode ? (
            <input type="text" onChange={handlerChangeMinutes} value={minutes} />
          ) : (
            <h1>{minutes}</h1>
          )}
        </div>
        <div className={styles.counter}>
          <p>seconds</p>
          {masterMode ? (
            <input type="text" value={seconds} onChange={handlerChangeSeconds} />
          ) : (
            <h1>{seconds}</h1>
          )}
        </div>
      </div>
    </article>
  );
};

export default Timer;
