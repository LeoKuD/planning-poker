import React, { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import style from './index.module.scss';

type CreateEditIssueProps = {
    edit?: boolean,
    title?: string,
    id?: number,
    priority?: string,
}

enum FormControls {
    title = 'title',
    id = 'id',
    priority = 'priority',
}

type FormData = {
    [FormControls.title]: string;
    [FormControls.id]: number;
    [FormControls.priority]: string;
}

type PriorityItems = {
    id: number,
    type: string,
}

const priorityItems:PriorityItems[] = [{
  id: 0,
  type: 'low',
}, {
  id: 1,
  type: 'medium',
}, {
  id: 2,
  type: 'high',
}];

const CreateEditIssue: FC<CreateEditIssueProps> = ({
  edit = false, title, id, priority,
}) => {
  const {
    register, handleSubmit, setValue, formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data: FormData) => console.log(data));

  const closeFormHandler = (): void => {
    console.log('close form');
  };

  useEffect(() => {
    if (edit) {
      setValue(FormControls.title, title);
      setValue(FormControls.id, id);
      setValue(FormControls.priority, priority);
    }
  }, [edit, title, id, priority, setValue]);

  return (
    <form onSubmit={onSubmit} className={style.form}>
      <h1>
        {edit ? 'Edit Issue form' : 'Create Issue form'}
      </h1>

      <label htmlFor={FormControls.title}>Title:</label>
      <input
        className={style.form__input}
        type="text"
        {...register(FormControls.title, {
          required: true,
          maxLength: {
            value: 15,
            message: 'Title must be less than 15 characters',
          },
        })}
      />
      <p className={style.error}>
        {errors.title?.type === 'required' && 'Title is required'}
        {errors.title?.message}
      </p>

      <label htmlFor={FormControls.id}>Id:</label>
      <input
        className={style.form__input}
        type="number"
        min="0"
        {...register(FormControls.id, { required: true, disabled: edit })}
      />
      <p className={style.error}>
        {errors.id?.type === 'required' && 'Id is required'}
        {errors.id?.message}
      </p>

      <label htmlFor={FormControls.priority}>Priority:</label>
      <select
        className={style.form__input}
        {...register(FormControls.priority, { required: true })}
      >
        {priorityItems.map((el) => (<option key={el.id}>{el.type}</option>))}
      </select>

      <div className={style.controls}>
        <button type="button" onClick={closeFormHandler}>Cancel</button>
        <input className={style.controls__submit} type="submit" value="Confirm" />
      </div>

    </form>
  );
};

export default CreateEditIssue;
