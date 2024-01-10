import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
      <Button
        color="primary"
        onClick={handleGoBack}
        startIcon={<ArrowBackIcon />}
        style={{
          position: 'fixed',
          top: '5rem',

          zIndex: 1000,
        }}
      ></Button>

      {location.action === 'PUSH' && (
        <Button
          variant="outlined"
          color="primary"
          onClick={handleGoForward}
          startIcon={<ArrowForwardIcon />}
          style={{
            position: 'fixed',
            top: '5rem',
            left: '96px',
            zIndex: 1000,
          }}
        >
          Вперёд
        </Button>
      )}
    </div>
  );
};

export default BackForwardButtons;
