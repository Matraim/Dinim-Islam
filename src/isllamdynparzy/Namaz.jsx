import React from 'react';
import { Card, CardContent, Typography, Container } from '@mui/material';
import namazImg from '../assets/images/намаз.jpeg';
import styled from 'styled-components';

const Namaz = () => {
  return (
    <Container>
      <Content>
        <Card>
          <Image src={namazImg} alt="namaz" />
        </Card>

        <Card>
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
        </Card>

        <Card>
          <CardContent>
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
          </CardContent>
        </Card>
        <Author>
          <Typography variant="body2" fontStyle="italic" textAlign="center">
            Даярдаган: Нурматов Матраим <br /> Текшерген: Аллахтын суйгон
            пендеси
          </Typography>
        </Author>
      </Content>
    </Container>
  );
};

export default Namaz;

const Content = styled.div`
  margin-top: 20px;
  display: grid;
  gap: 20px;
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
  color: #333;
`;

const Author = styled.div`
  font-style: italic;
  text-align: right;
  margin-top: 20px;

  p {
    font-size: 14px;
    color: #555;
  }
`;
