import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { styled } from '@mui/material';

const BackForwardButtons = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoForward = () => {
    navigate(+1);
  };

  return (
    <div>
      <StyleButton
        color="primary"
        onClick={handleGoBack}
        startIcon={<ArrowBackIcon />}
      ></StyleButton>

      {location.action === 'PUSH' && (
        <StyleButton
          variant="outlined"
          color="primary"
          onClick={handleGoForward}
          startIcon={<ArrowForwardIcon />}
        >
          Вперёд
        </StyleButton>
      )}
    </div>
  );
};

export default BackForwardButtons;

const StyleButton = styled(Button)(() => ({
  position: 'fixed',
  top: '6rem',
  left: '96px',
  zIndex: 1000,
}));
