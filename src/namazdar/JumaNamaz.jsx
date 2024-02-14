import React from 'react';
import { Typography, List, ListItem, Container, styled } from '@mui/material';

const JumaNamaz = () => {
  return (
    <Container>
      <StyleListItem>Жума намазы</StyleListItem>
      <StyleListItem>
        Жума күнү 16 рекет намаз окулат. [Булардын эки рекети парз. Бешим
        намазынан дагы кубаттуу парз.] Булар ирети менен мындай:
      </StyleListItem>
      <List>
        <StyleListItem>
          <Typography>
            Алгач Жуманын төрт рекеттик алгачкы сүннөтү окулат. Бул сүннөт бешим
            намазынын алгачкы сүннөтү сыяктуу окулат. Кийин мечит ичинде экинчи
            азан жана хутба окулат. Хутба окулгандан кийин камат окулуп жамаат
            менен Жума намазынын эки рекеттик парзы окулат.
          </Typography>
        </StyleListItem>
        <StyleListItem>
          <Typography>
            Жума намазынын парзы окулгандан кийин төрт рекеттик соңку сүннөтү
            окулат. Бул сүннөт бешим намазынын алгачкы сүннөтү сыяктуу окулат.
          </Typography>
        </StyleListItem>
      </List>
    </Container>
  );
};

export default JumaNamaz;

const StyleListItem = styled(ListItem)(() => ({
  color: 'black',
}));
