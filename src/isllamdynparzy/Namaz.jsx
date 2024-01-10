import React from 'react';
import { Card, CardContent, Typography, Container } from '@mui/material';
import namazImg from '../assets/images/намаз.jpeg';
import styled from 'styled-components';

const Namaz = () => {
  return (
    <Containeer>
      <Content>
        <Card>
          <Image src={namazImg} alt="namaz" />
        </Card>

        <StyleCard>
          <CardContent>
            <Text variant="h4" gutterBottom>
              НАМАЗ – БЕЙИШТИН АЧКЫЧЫ
            </Text>
            <ul>
              <li>Багымдат</li>
              <li>Бешим</li>
              <li>Аср</li>
              <li>Шам</li>
              <li>Куптан</li>
            </ul>
          </CardContent>
        </StyleCard>

        <Card>
          <Content>
            <Text variant="h5" gutterBottom>
              Кошумча ибадаттар
            </Text>
            <ul>
              <li>Тахажжуд</li>
              <li>Тообо намазы</li>
              <li>Курман айт намазы</li>
              <li>Жума Намазы</li>
              <li>Кажет Намазы</li>
              <li>Нафил Намазы</li>
            </ul>
          </Content>
        </Card>
        <Author>
          <Typography variant="body2" fontStyle="italic" textAlign="center">
            Даярдаган: Нурматов Матраим <br /> Текшерген: Аллахтын суйгон
            пендеси
          </Typography>
        </Author>
      </Content>
    </Containeer>
  );
};

export default Namaz;

const Content = styled.div`
  margin-top: 20px;
  display: grid;
  color: #190909;
  gap: 20px;
  cursor: pointer;
`;

const StyleCard = styled(Card)`
  border-color: 1rem solid black;
`;

const Image = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const Text = styled.div`
  font-size: 3rem;
  line-height: 1.6;
  text-align: center;
  color: #190909;
  background-color: wheat;
  border-radius: 1rem;
`;

const Author = styled.div`
  font-style: inherit;
  text-align: center;
  margin-top: 20px;

  p {
    color: #179ed8;
    font-style: inherit;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

const Containeer = styled(Container)`
  padding: 2rem;
`;
