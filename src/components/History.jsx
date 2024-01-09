import React from 'react';
import styled from 'styled-components';

const History = () => {
  return (
    <div>
      <StyleHeaderText>
        <h2>Улуу Инсандар</h2>
        <br />
        <h2>
          Мухаммад Саллаллаху алейхи вассаллам{' '}
          <Sallallahualeihivvassallam>ﷺ</Sallallahualeihivvassallam>
        </h2>
        <br />
        <h4>
          Бейиш менен сүйүнчүлөнгөн Пайгамбарыбыздын 10 улуу сахабасынын өмүр
          баяны
        </h4>
      </StyleHeaderText>
      <ul>
        <li>Абу Бакр Ас Cыддык</li>
        <li>Умар Ибин Аль Хаттаб</li>
        <li>Усман Ибн Аффан</li>
        <li>Али Ибн Абу Талиб</li>
        <li>Абдуррахман ибн Ауф</li>
        <li>Абу Убайда ибн аль-Джаррах</li>
        <li>Саад ибн Абу Ваккас</li>
        <li>Саид ибн Зайд</li>
        <li>Тальха ибн Убайдуллах</li>
        <li>Зубайр ибн Аввам</li>
      </ul>
    </div>
  );
};

export default History;

const StyleHeaderText = styled.h1`
  text-align: center;
`;

const Sallallahualeihivvassallam = styled.span`
  color: green;
`;
