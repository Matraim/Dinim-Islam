import { Container, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Uzunomur = () => {
  return (
    <Container>
      <StyledBannerText>
        <h2>Алар там да салабы?</h2>
      </StyledBannerText>
      <StyledTypography>
        Нух алейхиссаламдын заманында адамдар узун өмүрлүү болушкан экен. 800 –
        1000 жылга чейин жашашчу экен. Бир аялдын баласы кайтыш болот. Аял аябай
        ыйлайт. Кошуна аялдардын бири ага деген экен: - Эмне мынчалык ыйлайсың,
        Аллаху тааланын тагдыры ушундай экен да. - Албетте ушундай, мен ага
        ыйлаган жокмун. - Анда эмнеге ыйлап жатасың? - Балам көп күн көрө албай
        калды деп, энелик мээримимен улам ыйлап жатам. - Балаң канча жашта эле?
        - 275 жашта эле. - Макул, бирок, сен буга ыйлап турасың да, акыр заманда
        келе турган үммөт эмне кылсын, өмүрлөрү 50-60 жыл гана болот. - Чын эле
        айтып жатасыңбы? - Албетте. - Ооо Кудай! Алар там да салабы? - Албетте,
        бир канчасын салат экен. Мен алардын ордунда болсом чатырымдын бир
        казыгын болсо да алмаштырмак эмесмин.
      </StyledTypography>
    </Container>
  );
};

export default Uzunomur;

const StyledBannerText = styled('div')({
  fontSize: '2rem',
  textAlign: 'center',
  padding: '1rem',
});

const StyledTypography = styled(Typography)({
  lineHeight: '1.6',
  textAlign: 'center',
});
