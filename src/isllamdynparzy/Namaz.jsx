import React from 'react';
import { Card, CardContent, Typography, Container } from '@mui/material';
import namazImg from '../assets/images/намаз.jpeg';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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

  return (
    <StyleContainer>
      <Content>
        <h1 style={{ textAlign: 'center' }}>НАМАЗ – БЕЙИШТИН АЧКЫЧЫ</h1>
        <StyleCard>
          <CardContent>
            <StyleUl>
              <StyledLi>
                <StyleCard onClick={handleClickBagymdat}>
                  <CardImage src={namazImg} alt="Image 1" />
                  <CardContent>
                    <p>Багымдат</p>
                  </CardContent>
                </StyleCard>
              </StyledLi>
              <StyledLi>
                <StyleCard onClick={handleClickBeshim}>
                  <CardImage src={namazImg} alt="Image 2" />
                  <CardContent>
                    <p>Бешим</p>
                  </CardContent>
                </StyleCard>
              </StyledLi>
              <StyledLi>
                <StyleCard onClick={handleClickAsr}>
                  <CardImage src={namazImg} alt="Image 2" />
                  <CardContent>
                    <p>Аср</p>
                  </CardContent>
                </StyleCard>
              </StyledLi>
              <StyledLi>
                <StyleCard onClick={handleClickSham}>
                  <CardImage src={namazImg} alt="Image 2" />
                  <CardContent>
                    <p>Шам</p>
                  </CardContent>
                </StyleCard>
              </StyledLi>
              <StyledLi>
                <StyleCard onClick={handleClickJannat}>
                  <CardImage src={namazImg} alt="Image 2" />
                  <CardContent>
                    <p>Эмне Учун Намаз окуш керек ?</p>
                  </CardContent>
                </StyleCard>
              </StyledLi>
              <StyledLi>
                <StyleCard onClick={handleClickKuptan}>
                  <CardImage src={namazImg} alt="Image 2" />
                  <CardContent>
                    <p>Куптан</p>
                  </CardContent>
                </StyleCard>
              </StyledLi>
            </StyleUl>
          </CardContent>
        </StyleCard>
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

const StyleCard = styled(Card)`
  border: none;
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
