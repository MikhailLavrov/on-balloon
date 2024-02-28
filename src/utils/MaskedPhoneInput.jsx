import React, { useState } from 'react';
import InputMask from 'react-input-mask';

export const MaskedPhoneInput = ({name}) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value.replace(/\D/g, ''));
  };

  return (
      <InputMask
        name={name}
        type='text'
        mask='+7 (999) 999-99-99'
        value={inputValue}
        onChange={handleChange}
        required
        placeholder='+7 (___) ___-__-__'
      />
  );
};
