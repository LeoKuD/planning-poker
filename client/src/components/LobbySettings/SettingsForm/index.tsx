import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Switch } from '@material-ui/core';
import style from './index.module.scss';

enum FormControls {
  scramMasterRole = 'scramMasterRole',
  changingCards = 'changingCards',
  timerNeeded = 'timerNeeded',
  scoreType = 'scoreType',
  shortScoreType = 'shortScoreType',
  roundTime = 'roundTime'
  }

type FormData = {
  [FormControls.scramMasterRole]: boolean;
  [FormControls.changingCards]: boolean;
  [FormControls.timerNeeded]: boolean;
  [FormControls.scoreType]: string;
  [FormControls.shortScoreType]: string;
  [FormControls.roundTime]: number;
}

type SettingsFormProps = {

}

const SettingsForm: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit((data: FormData) => console.log(data));

  const timerNeeded = watch(FormControls.timerNeeded);

  return (
    <div className={style.form}>
      <form className={style.form} onSubmit={onSubmit}>

        <div className={style.inputWrapper}>
          <label htmlFor={FormControls.scramMasterRole}>Scram master as player</label>
          <Switch color="primary" {...register(FormControls.scramMasterRole)} />
        </div>

        <div className={style.inputWrapper}>
          <label htmlFor={FormControls.changingCards}>Changin card in round end</label>
          <Switch color="primary" {...register(FormControls.changingCards)} />
        </div>

        <div className={style.inputWrapper}>
          <label htmlFor={FormControls.timerNeeded}>Is timer needed</label>
          <Switch color="primary" {...register(FormControls.timerNeeded)} />
        </div>

        <div className={style.inputWrapper}>
          <label htmlFor={FormControls.scoreType}>Score type</label>
          <input
            className={style.inputField}
            {...register(FormControls.scoreType, {
              required: true,
              maxLength: {
                value: 15,
                message: 'Score type must be less than 15 characters',
              },
            })}
          />
          <div className={style.error}>{errors.scoreType?.message}</div>
        </div>

        <div className={style.inputWrapper}>
          <label htmlFor={FormControls.shortScoreType}>Score type (Short)</label>
          <input
            className={style.inputField}
            {...register(FormControls.shortScoreType, {
              required: true,
              maxLength: {
                value: 5,
                message: 'Short Score type must be less than 5 characters',
              },
            })}
          />
          <div className={style.error}>{errors.shortScoreType?.message}</div>
        </div>
        {timerNeeded && <div>Timer: 02.00 ( Component )</div>}

        <input className={style.submit} type="submit" value="Temp confirm" />

      </form>
    </div>
  );
};

export default SettingsForm;
