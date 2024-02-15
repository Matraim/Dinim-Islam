import React from 'react';
import { oku } from '../data/oku';
import styled from 'styled-components';
import { Card, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Img from '../assets/images/Abdurakhmanibnaufimg.png';
import { bilishkerek } from '../data/bilishkerek';

const Oku = () => {
  return (
    <StyleContainer>
      <Content>
        {oku.map((figure, index) => (
          <StyledCard key={index}>
            <Link to={figure.path}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <CardImage src={Img} alt="" />
              </div>
              <CardTitle>{figure.name}</CardTitle>
            </Link>
            <StyleCardSmallText>{figure.text}</StyleCardSmallText>
            <StyleHeaderTextStatus>{figure.status}</StyleHeaderTextStatus>
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
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <CardImage src={Img} alt="" />
              </div>
              <CardTitle>{figure.name}</CardTitle>
            </Link>
            <StyleCardSmallText>{figure.text}</StyleCardSmallText>
            <StyleHeaderTextStatus>{figure.status}</StyleHeaderTextStatus>
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
`;

const StyledCard = styled(Card)`
  flex: 1 1 calc(33.333% - 20px);
`;

const StyleCardSmallText = styled.div`
  text-align: center;
  padding: 0.1rem;
`;

const StyleContainer = styled(Container)(() => ({
  margin: 'auto',
  paddingBottom: '2rem',
}));

const CardImage = styled('img')(() => ({
  backgroundSize: 'contain',
  width: '5rem',
}));

const CardTitle = styled.div`
  text-align: center;
  padding: 0.5rem;
`;

const StyleHeaderTextStatus = styled.div`
  text-align: center;
  padding: 0rem;
`;

export default Oku;
