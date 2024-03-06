import React, { useState, useEffect } from 'react';
import { randomText } from '../data/naziaat.js';
import { styled } from '@mui/material';

const Naziat = () => {
  const [reminder, setReminder] = useState('');

  useEffect(() => {
    const setRandomReminder = () => {
      const randomIndex = Math.floor(Math.random() * randomText.length);
      setReminder(randomText[randomIndex].text);
    };

    setRandomReminder();

    const interval = setInterval(() => {
      setRandomReminder();
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  return (
    <StyleContainer>
      <StyleRandomText>{reminder}</StyleRandomText>
    </StyleContainer>
  );
};

export default Naziat;

const StyleContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  paddingBottom: '3rem',
}));

const StyleRandomText = styled('p')(() => ({
  fontSize: '2rem',
  textAlign: 'center',
  backgroundColor: '#2d2d2d',
  color: '#fff',
  padding: '3rem',
  borderRadius: '0.5rem',
  fontFamily: 'monospace',
}));
