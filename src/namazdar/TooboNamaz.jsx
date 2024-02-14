import React from 'react';
import video from '../assets/video/WhatsApp Video 2024-02-14 at 13.24.47.mp4';
import { Typography } from '@mui/material';

const TooboNamaz = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Тообо НАМАЗЫ КАНДАЙ ОКУЛАТ
      </Typography>
      <video controls>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default TooboNamaz;
