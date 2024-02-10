import { Container, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const BismillahKuchu = () => {
  return (
    <Container>
      <StyledBannerText>
        <h2>Бисмиллах созунун устомдугу</h2>
      </StyledBannerText>
      <StyledTypography>
        <b>
          ''Бисмиллах''созунун устомдугу Ибрахим Гулшани хазреттери бир куну
          шакирттери менен баарлашып олтурган эле. Шакирттеринин бири мындай деп
          сурады: -Устазым! Аллах та'аланын Ырайымдуулугу менен кабырдагы
          олгондордун азапта же жыргалчылыкта экендигин билууго болобу? Дуба
          кылуу аркылуу булардын азабын токтотууга болобу? Ибрахим Гулшани
          хазреттери мындай деп жооп берди: -Аллах та'аланын суйгон кулдарынын
          бири бир кабырга караганында кабырдагы адамдын азап ичинде болгонун
          корот. Арадан бир аз убакыт отуп, дагы бир караганында азаптын
          токтогонун байкайт. Тан калып ойго тушуп кетет. Ошол кезде бир добуш
          угулат. ''Бир кабырда жаткан адамдын кичинекей баласы бар эле. Апасы
          ал баланы илим уйронууго жиберет. Бала''Бисмилаахир рохмаанир
          рохиим''созун уйронгондо, ошол создун урматына атасынын азабы токтоду.
        </b>
      </StyledTypography>
    </Container>
  );
};

export default BismillahKuchu;

const StyledBannerText = styled('div')({
  fontSize: '2rem',
  textAlign: 'center',
  padding: '1rem',
});

const StyledTypography = styled(Typography)({
  lineHeight: '3',
  letterSpacing: '1',
  textAlign: 'center',
});
