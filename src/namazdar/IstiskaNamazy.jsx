import { Container, styled } from '@mui/material';
import React from 'react';

const IstiskaNamazy = () => {
  return (
    <StyleContainer>
      <StyleBannerText>
        <h2>Жамгыр Намазы</h2>
      </StyleBannerText>
      <h3>
        Кургакчылык учурларда элдин ачык асман алдында топтолуп тооба кылып
        Алладан кечирим тилеп, Ага алакан жая дуба кылышы, жамгыр жаадырышын
        суранышы сүннөт. Бул дубадан мурун эки ирекет намаз окуу мустахап.
      </h3>
    </StyleContainer>
  );
};

export default IstiskaNamazy;

const StyleContainer = styled(Container)(() => ({
  textAlign: 'center',
}));
const StyleBannerText = styled('div')(() => ({
  textAlign: 'center',
  paddingBottom: '1rem',
}));
