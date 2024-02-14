import { Container, styled } from '@mui/material';
import React from 'react';

const IstiskaNamazy = () => {
  return (
    <StyleContainer>
      Кургакчылык учурларда элдин ачык асман алдында топтолуп тооба кылып
      Алладан кечирим тилеп, Ага алакан жая дуба кылышы, жамгыр жаадырышын
      суранышы сүннөт. Бул дубадан мурун эки ирекет намаз окуу мустахап.
    </StyleContainer>
  );
};

export default IstiskaNamazy;

const StyleContainer = styled(Container)(() => ({
  textAlign: 'center',
}));
