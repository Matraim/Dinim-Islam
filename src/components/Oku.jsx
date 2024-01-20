import React from 'react';
import { oku } from '../data/oku';
import styled from 'styled-components';
import { Card } from '@mui/material';
import { Link } from 'react-router-dom';

const Oku = () => {
  return (
    <div>
      <CardContainer>
        {oku.map((figure, index) => (
          <Card key={index}>
            <Link to={figure.path}>
              <CardImage src={figure.image} alt={figure.name} />
              <CardTitle>{figure.name}</CardTitle>
            </Link>
            <StyleCardSmallText>{figure.text}</StyleCardSmallText>
            <StyleHeaderTextStatus>{figure.status}</StyleHeaderTextStatus>
          </Card>
        ))}
      </CardContainer>
    </div>
  );
};

export default Oku;

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

const StyleHeaderTextStatus = styled.div`
  text-align: center;
  padding: 0rem;
`;
