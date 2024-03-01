import React from 'react';
import { oku } from '../data/oku';
import { bilishkerek } from '../data/bilishkerek';
import styled from 'styled-components';
import { Card, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import BackForwardButtons from './BackForwardButtons';

const Oku = () => {
  return (
    <StyleContainer>
      <BackForwardButtons />
      <Content>
        {oku.map((figure, index) => (
          <StyledCard key={index}>
            <Link to={figure.path}>
              <CardImageAndText>
                <CardImage src={figure.image} alt={figure.name} />
                <CardContent>
                  <CardTitle>{figure.name}</CardTitle>
                  <StyleCardSmallText>{figure.text}</StyleCardSmallText>
                  <StyleHeaderTextStatus>{figure.status}</StyleHeaderTextStatus>
                </CardContent>
              </CardImageAndText>
            </Link>
          </StyledCard>
        ))}
      </Content>
      <div>
        <h1 style={{ textAlign: 'center', padding: '2rem' }}>Билиш керек</h1>
      </div>
      <Content>
        {bilishkerek.map((figure, index) => (
          <StyledCard key={index}>
            <Link to={figure.path}>
              <CardImageAndText>
                <CardImage src={figure.image} alt={figure.name} />
                <CardContent>
                  <CardTitle>{figure.name}</CardTitle>
                  <StyleCardSmallText>{figure.text}</StyleCardSmallText>
                  <StyleHeaderTextStatus>{figure.status}</StyleHeaderTextStatus>
                </CardContent>
              </CardImageAndText>
            </Link>
          </StyledCard>
        ))}
      </Content>
    </StyleContainer>
  );
};

const Content = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  overflow-x: auto;
  padding-bottom: 20px;
  max-width: calc(100% + 20px);
`;

const StyledCard = styled(Card)`
  flex: 1 1 calc(25% - 25px);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const StyleContainer = styled(Container)(() => ({
  margin: 'auto',
  paddingBottom: '2rem',
}));

const CardImageAndText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const CardContent = styled.div`
  padding: 0.5rem;
`;

const CardImage = styled('img')(() => ({
  width: '100%',
  height: 'auto',
  borderRadius: '10px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
}));

const CardTitle = styled.div`
  padding: 0.5rem;
`;

const StyleCardSmallText = styled.div`
  padding: 0.1rem;
`;

const StyleHeaderTextStatus = styled.div`
  padding: 0rem;
`;

export default Oku;
