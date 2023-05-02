import React, { useState, useRef } from 'react';
import { contactData } from '../data/personalData';
import InputMask from 'react-input-mask';

export const MaskedPhoneInput = () => {
  const [card, setCard] = useState('');
  const inputCard = useRef(null);

  const handleChange = (event) => {
    setCard(event.target.value.replace(/\D/g, ''));
  };

  return (
    <>
      <InputMask
        name={contactData.gForms.phoneEntry}
        id='phone'
        type='text'
        mask='+7 (999) 999-99-99'
        value={card}
        onChange={handleChange}
        ref={inputCard}
        required
        placeholder='+7 (___) ___-__-__'
      />
    </>
  );
};