import React, { ChangeEvent, FormEvent } from 'react';
import s from '../style/Forms.module.css';
import { useState } from 'react';

interface User {
  name: string;
  amount: string;
}

const Forms = () => {
  const [inputValue, setInputValue] = useState<User>({
    name: '',
    amount: '',
  });

  const { name, amount } = inputValue;

  const handleInputChange = ({
    target,
  }: ChangeEvent<HTMLInputElement>): void => {
    setInputValue({
      ...inputValue,
      [target.name]: target.value,
    });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <form action="" className={s.containerForms} onSubmit={handleSubmit}>
      <div className={s.containerInputs}>
        <label htmlFor=""></label>
        <input
          name="name"
          className={s.inputAll}
          type="text"
          placeholder="Nombre..."
          onChange={handleInputChange}
          value={name}
        />
      </div>
      <div className={s.containerInputs}>
        <label htmlFor=""></label>
        <input
          name="amount"
          className={s.inputAll}
          type="number"
          placeholder="Monto..."
          onChange={handleInputChange}
          value={amount}
        />
      </div>
      <div className="">
        <button> Agregar </button>
      </div>
    </form>
  );
};

export default Forms;
