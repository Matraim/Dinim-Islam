import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import historicalFigures from '../data/historicalFigure';

const History = () => {
  return (
    <div>
      <StyleHeaderText>
        <h2>Бейиш менен сүйүнчүлөнгөн 10 Сахаба.</h2>
        <br />
        <Sallallahualeihivvassallam>ﷺ</Sallallahualeihivvassallam>
        <h2>
          Алла Таала сахабалардан ыраазы болгондугун, аларды сүйгөндүгүн Куранда
          айтып кеткен: «Алла Таала алардан (сахабалардан) ыраазы, алар да
          (сахабалар) Алла Тааладан ыраазы». <br />
          (Баййина сүрөсү, 98/8-аят)
        </h2>
        <br />
      </StyleHeaderText>

      <CardContainer>
        {historicalFigures.map((figure, index) => (
          <Card key={index}>
            <Link to={figure.path}>
              <CardImage src={figure.image} alt={figure.name} />
              <CardTitle>{figure.name} </CardTitle>
            </Link>
            <StyleHeaderTextStatus>{figure.status}</StyleHeaderTextStatus>
            <StyleCardSmallText>{figure.text}</StyleCardSmallText>
          </Card>
        ))}
      </CardContainer>
      <CardContainerr>
        <h4>
          Пайгамбарыбызды (САВ) тирүү кезинеде көрүп, ага ыйман келтирип,
          сохбеттерине катышкан момун-мусулмандарды сахаба деп айтабыз. Бир адам
          мусулман боло электе пайгамбарыбызды көрүп, пайгамбарыбыз (САВ)
          дүйнөдөн көзү өткөндөн кийин ыйманга келген болсо, же мусулман болуп,
          кийин динден кайткан болсо, сахаба деп эсептелбейт.
        </h4>
      </CardContainerr>
    </div>
  );
};

export default History;

const StyleHeaderText = styled.div`
  text-align: center;
`;

const StyleHeaderTextStatus = styled.div`
  text-align: center;
  padding: 0rem;
`;

const Sallallahualeihivvassallam = styled.span`
  color: green;
`;

const StyleCardSmallText = styled.div`
  text-align: center;
  padding: 0.1rem;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;
const CardContainerr = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding: 2rem;
`;

const Card = styled.div`
  flex: 1 1 calc(20% - 20px);
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;

  @media (min-width: 370px) {
    flex: 1 1 calc(1% - 20px);
  }
  @media (min-width: 370px) {
    flex: 1 1 calc(33% - 20px);
  }
`;

const CardTitle = styled.div`
  text-align: center;
  padding: 0.5rem;
`;
