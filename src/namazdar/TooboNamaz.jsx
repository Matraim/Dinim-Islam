import React from 'react';
import video from '../assets/video/WhatsApp Video 2024-02-14 at 13.24.47.mp4';
import { Container, Typography, styled } from '@mui/material';

const TooboNamaz = () => {
  return (
    <Container>
      <StyleTypography variant="h4" gutterBottom>
        Тообо НАМАЗЫ КАНДАЙ ОКУЛАТ
      </StyleTypography>
      <StyleVideo controls>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </StyleVideo>
    </Container>
  );
};

export default TooboNamaz;

const StyleTypography = styled(Typography)(() => ({
  textAlign: 'center',
}));

const StyleVideo = styled('video')(() => ({
  display: 'flex',
  alignItems: 'center',
  paddingBottom: '1rem',
  justifyContent: 'center',
}));
