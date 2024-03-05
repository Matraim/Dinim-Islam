import React, { useState, useEffect } from 'react';
import { Typography, makeStyles } from '@mui/material';
import { randomText } from '../data/naziaat';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
}));

const Naziat = () => {
  const classes = useStyles();
  const [selectedText, setSelectedText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * randomText.length);
      setSelectedText(randomText[randomIndex].text);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.root}>
      <Typography variant="body1">{selectedText}</Typography>
    </div>
  );
};

export default Naziat;
