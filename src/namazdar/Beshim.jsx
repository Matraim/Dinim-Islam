import { Container, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Beshim = () => {
  return (
    <StyleContainer>
      <div>
        <h1>Бешим намазынын окулушу</h1>
        <br />
        <h1>4 Рекет алгачкы сүннөттүн окулушу</h1>
        <br />
        <br />
        <Typography>
          - Ниет кылынат. - Такбир айтылат. - Субханака окулат. -
          Аъузу...-бисмиллах.... - Фатиха сүрөсү окулат. - Бир сүрө (зам сүрө)
          окулат. - Рукуга ийилет. - Саждага барат. Экинчи рекетке турулат. -
          <br />
          Бисмиллах..... - Фатиха сүрөсү окулат. - Бир сүрө (зам сүрө) окулат. -
          Рукуга ийилет. - Саждага барат. - Отурулат. - Аттахияту окулат. Үчүнчү
          Рекетке турулат.
          <br />
          - Бисмиллах..... - Фатиха сүрөсү окулат. - Бир сүрө (зам сүрө) окулат.
          - Рукуга ийилет. - Саждага барат. - Отурулат. (соңку) - Аттахияту
          окулат. - Аллахумма салли,Аллахумма барик дубалары окулат. - Раббана
          атина... дубасын окуйт. - Салам берилет. Салам бергенден кийин
          «Аллахумма антас-салам ва минкас-салам табаракта йа зал жалали вал
          икрам» – дегенден кийин эч нерсе сүйлөбөстөн бешим намазынын парзын
          окуу үчүн ордунан турат.
          <br />
        </Typography>
      </div>
      <br />
      <br />
      <div>
        <div>
          <h1>4 Рекет парздын окулушу</h1>
          <Typography>
            Камат айтылат. - Такбир айтылат. - Субханака окулат. -
            Аъузу...-бисмиллах.... - Фатиха сүрөсү окулат. - Бир сүрө (зам сүрө)
            окулат. - Рукуга ийилет. - Саждага барат. Экинчи рекетке турулат.{' '}
            <br /> Бисмиллах..... - Фатиха сүрөсү окулат. - Бир сүрө (зам сүрө)
            окулат. - Рукуга ийилет. - Саждага барат. - Отурулат. - Аттахияту
            окулат. Үчүнчү Рекетке турулат.
            <br />- Бисмиллах..... - Фатиха сүрөсү окулат. - Рукуга ийилет. -
            Саждага барат. Төртүнчү Рекетке турулат.
            <br />- Бисмиллах..... - Фатиха сүрөсү окулат. - Рукуга ийилет. -
            Саждага барат. - Отурулат. (соңку) - Аттахияту окулат. - Аллахумма
            салли,Аллахумма барик дубалары окулат. - Раббана атина... дубасын
            окуйт. - Салам берилет. «Аллахумма антас-салам ва минкас-салам
            табаракта йа зал жалали вал икрам» – дегенден кийин эч нерсе
            сүйлөбөстөн бешим намазынын соңку сүннөтүн окуу үчүн ордунан турат.
          </Typography>
        </div>
      </div>
      <br />
      <br />
      <div>
        <div>
          <h1>2 Рекет соңку сүннөтүнүн окулушу</h1>
          <Typography>
            - Ниет кылынат. - Такбир айтылат. - Субханака окулат. -
            Аъузу...-бисмиллах.... - Фатиха сүрөсү окулат. - Бир сүрө (зам сүрө)
            окулат. - Рукуга ийилет. - Саждага барат. Экинчи рекетке турулат.
            <br /> <br />- Бисмиллах..... - Фатиха сүрөсү окулат. - Бир сүрө
            (зам сүрө) окулат. - Рукуга ийилет. - Саждага барат. - Отурулат. -
            Аттахияту окулат. - Аллахумма салли, Аллахумма барик дубалары
            окулат. - Раббана атина... дубасын окуйт. - Салам берилет. Салам
            бергенден кийин «Аллахумма антас-салам ва минкас-салам табаракта йа
            зал жалали вал икрам» – деп окулат. Намаздан кийин үч жолу
            «Астагфируллах» дегенден соң «Аятул курси» жана отуз үч таспих
            (субханаллах), отуз үч тахмид (алхамдүлиллах), отуз үч такбир
            (Аллаху акбар) жана бир тахлил (Ла илаха иллаллаху вахдаху ла шарика
            лах. Лахул мүлкү ва лахул хамду ва хува ала кулли шайин кадир)
            окулат. Буларды ар ким өзү уга тургандай үн менен окуйт. Үндү
            чыгарып окуу бидат болуп саналат.
          </Typography>
        </div>
      </div>
    </StyleContainer>
  );
};

export default Beshim;

const StyleContainer = styled(Container)({
  textAlign: 'center',
});
