import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import historicalFigures from '../data/historicalFigure';

const History = () => {
  return (
    <div>
      <StyleHeaderText>
        <h2>Great Personalities</h2>
        <br />
        <h2>
          Muhammad Sallallahu Alaihi Wassallam{' '}
          <Sallallahualeihivvassallam>ﷺ</Sallallahualeihivvassallam>
        </h2>
        <br />
        <h4>
          Biographies of the 10 great companions who received the glad tidings
          of Paradise
        </h4>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quos
          beatae, voluptatibus nobis neque recusandae molestias reprehenderit
          aut vero ullam laboriosam ab cum architecto cupiditate cumque fugiat
          quod voluptate accusamus! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Corporis adipisci ipsa qui error, optio ut
          accusantium perferendis reiciendis ipsum aperiam dolor voluptate
          necessitatibus veritatis voluptas vel unde non nesciunt aliquid?
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
