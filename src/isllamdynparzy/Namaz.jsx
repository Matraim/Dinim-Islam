import React from 'react';
import { Card, CardContent, Typography, Container } from '@mui/material';
import namazImg from '../assets/images/намаз.jpeg';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import BackForwardButtons from '../components/BackForwardButtons';
import imgcard1 from '../assets/images/imgcard1.jpeg';
import imgcard2 from '../assets/images/imgcard2.jpeg';
import imgcard3 from '../assets/images/imgcard3.jpeg';
import imgcard4 from '../assets/images/card4img.jpeg';
import imgcard5 from '../assets/images/card5img.jpeg';
import imgcard6 from '../assets/images/card6img.jpeg';

const Namaz = () => {
  const navigate = useNavigate();

  const handleClickBagymdat = () => {
    navigate('/bagymdat');
  };
  const handleClickBeshim = () => {
    navigate('/beshim');
  };
  const handleClickAsr = () => {
    navigate('/asr');
  };
  const handleClickSham = () => {
    navigate('/sham');
  };
  const handleClickKuptan = () => {
    navigate('/kuptan');
  };
  const handleClickJannat = () => {
    navigate('/jannat');
  };
  const handleClickIstihara = () => {
    navigate('/istihara');
  };
  const handleClickJanaza = () => {
    navigate('/janazanamaz');
  };
  const handleClickTahadjudNamaz = () => {
    navigate('/tahadjudnamaz');
  };
  const handleClickTooboNamaz = () => {
    navigate('/toobonamaz');
  };
  const handleClickNafilNamaz = () => {
    navigate('/nafilnamaz');
  };
  const handleClickJumaNamaz = () => {
    navigate('/jumanamaz');
  };
  const handleClickKurmanaitNamaz = () => {
    navigate('/kurmanaitnamaz');
  };
  const handleClickKajetNamaz = () => {
    navigate('/kajetnamaz');
  };
  const handleClickVitirVajibNamazy = () => {
    navigate('/vitirVajibnamazy');
  };
  const handleClickyIstiskaNamazy = () => {
    navigate('/istiskanamazy');
  };
  const handleClickKunAiNamazy = () => {
    navigate('/kunainamazy');
  };
  const handleClickMechitNamazy = () => {
    navigate('/mechitnamazy');
  };

  return (
    <StyleContainer>
      <BackForwardButtons />
      <Content>
        <h1 style={{ textAlign: 'center' }}>НАМАЗ – БЕЙИШТИН АЧКЫЧЫ</h1>
        <Card>
          <CardContent>
            <StyleUl>
              <StyledLi>
                <StyleCard onClick={handleClickBagymdat}>
                  <CardImage src={imgcard1} alt="Image 1" />
                  <CardContent>
                    <p>Багымдат</p>
                  </CardContent>
                </StyleCard>
              </StyledLi>
              <StyledLi>
                <StyleCard onClick={handleClickBeshim}>
                  <CardImage src={imgcard2} alt="Image 2" />
                  <CardContent>
                    <p>Бешим</p>
                  </CardContent>
                </StyleCard>
              </StyledLi>
              <StyledLi>
                <StyleCard onClick={handleClickAsr}>
                  <CardImage src={imgcard3} alt="Image 2" />
                  <CardContent>
                    <p>Аср</p>
                  </CardContent>
                </StyleCard>
              </StyledLi>
              <StyledLi>
                <StyleCard onClick={handleClickSham}>
                  <CardImage src={imgcard4} alt="Image 2" />
                  <CardContent>
                    <p>Шам</p>
                  </CardContent>
                </StyleCard>
              </StyledLi>
              <StyledLi>
                <StyleCard onClick={handleClickJannat}>
                  <CardImage src={imgcard6} alt="Image 2" />
                  <CardContent>
                    <p>Эмне Учун Намаз окуш керек ?</p>
                  </CardContent>
                </StyleCard>
              </StyledLi>
              <StyledLi>
                <StyleCard onClick={handleClickKuptan}>
                  <CardImage src={imgcard5} alt="Image 2" />
                  <CardContent>
                    <p>Куптан</p>
                  </CardContent>
                </StyleCard>
              </StyledLi>
            </StyleUl>
          </CardContent>
        </Card>
        <h1 style={{ textAlign: 'center' }}>Кошумча ибадаттар</h1>
        <Card>
          <Content>
            <StyleUl>
              <StyleLi>
                <StyleCard onClick={handleClickTahadjudNamaz}>
                  <CardImage src={namazImg} alt="Image 1" />
                  <CardContent>
                    <p>Тахажжуд</p>
                  </CardContent>
                </StyleCard>
              </StyleLi>
              <StyleLi>
                <StyleCard onClick={handleClickVitirVajibNamazy}>
                  <CardImage src={namazImg} alt="Image 1" />
                  <CardContent>
                    <p>Витир Важиб</p>
                  </CardContent>
                </StyleCard>
              </StyleLi>
              <StyleLi>
                <StyleCard onClick={handleClickMechitNamazy}>
                  <CardImage src={namazImg} alt="Image 1" />
                  <CardContent>
                    <p>Мeчитке салам</p>
                  </CardContent>
                </StyleCard>
              </StyleLi>
              <StyleLi>
                <StyleCard onClick={handleClickyIstiskaNamazy}>
                  <CardImage src={namazImg} alt="Image 1" />
                  <CardContent>
                    <p>Истиска намазы</p>
                  </CardContent>
                </StyleCard>
              </StyleLi>
              <StyleLi>
                <StyleCard onClick={handleClickKunAiNamazy}>
                  <CardImage src={namazImg} alt="Image 1" />
                  <CardContent>
                    <p>Кусуф жана хусуф</p>
                  </CardContent>
                </StyleCard>
              </StyleLi>
              <StyleLi>
                <StyleCard onClick={handleClickTooboNamaz}>
                  <CardImage src={namazImg} alt="Image 2" />
                  <CardContent>
                    <p>Тообо намазы</p>
                  </CardContent>
                </StyleCard>
              </StyleLi>
              <StyleLi>
                <StyleCard onClick={handleClickKurmanaitNamaz}>
                  <CardImage src={namazImg} alt="Image 2" />
                  <CardContent>
                    <p>Курман айт намазы</p>
                  </CardContent>
                </StyleCard>
              </StyleLi>
              <StyleLi>
                <StyleCard onClick={handleClickJumaNamaz}>
                  <CardImage src={namazImg} alt="Image 2" />
                  <CardContent>
                    <p>Жума Намазы</p>
                  </CardContent>
                </StyleCard>
              </StyleLi>
              <StyleLi>
                <StyleCard onClick={handleClickKajetNamaz}>
                  <CardImage src={namazImg} alt="Image 2" />
                  <CardContent>
                    <p>Кажет Намазы</p>
                  </CardContent>
                </StyleCard>
              </StyleLi>
              <StyleLi>
                <StyleCard onClick={handleClickNafilNamaz}>
                  <CardImage src={namazImg} alt="Image 2" />
                  <CardContent>
                    <p>Нафил Намазы</p>
                  </CardContent>
                </StyleCard>
              </StyleLi>
              <StyleLi>
                <StyleCard onClick={handleClickJanaza}>
                  <CardImage src={namazImg} alt="Image 2" />
                  <CardContent>
                    <p>Жаназа Намазы</p>
                  </CardContent>
                </StyleCard>
              </StyleLi>
              <StyleLi>
                <StyleCard onClick={handleClickIstihara}>
                  <CardImage src={namazImg} alt="Image 2" />
                  <CardContent>
                    <p>Истихара Намазы</p>
                  </CardContent>
                </StyleCard>
              </StyleLi>
            </StyleUl>
          </Content>
        </Card>
        <StyleVideo>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/0lTaey3k_Pk?si=NmNit5mPyIWqhXmS"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </StyleVideo>
        <Author>
          <Typography variant="body2" fontStyle="italic" textAlign="center">
            Даярдаган: Нурматов Матраим <br /> Текшерген: Аллахтын суйгон
            пендеси
          </Typography>
        </Author>
      </Content>
    </StyleContainer>
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

const StyleCard = styled(Card)(() => ({
  border: '1px solid transparent',
  transition: 'transform 3.5s ease-in-out, border 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.01)',
    borderColor: '#f40c0c',
  },
}));

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

const StyleContainer = styled(Container)(() => ({
  padding: '1rem',
}));

const StyleVideo = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '2rem',
}));

const CardImage = styled.img`
  width: 100%;
  height: 150px;
`;

const StyleUl = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StyledLi = styled.li`
  width: 20rem;
  margin-bottom: 10px;
`;
const StyleLi = styled.li`
  width: 18rem;
  margin-bottom: 10px;
`;
