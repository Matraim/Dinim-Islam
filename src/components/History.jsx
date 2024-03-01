import { Link } from 'react-router-dom';
import styled from 'styled-components';
import historicalFigures from '../data/historicalFigure';
import Bismillah from '../data/islam';
import Ustazdar from '../data/ustazdar';
import { Container, Typography } from '@mui/material';
import BackForwardButtons from './BackForwardButtons';

const History = () => {
  return (
    <Container>
      <BackForwardButtons />
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
      <div>
        <IslamtextStyle>Islam</IslamtextStyle>
        <CardContainer>
          {Bismillah.map((figure, index) => (
            <Card key={index}>
              <Link to={figure.path}>
                <CardImage src={figure.image} alt={figure.name} />
                <CardTitle>{figure.name} </CardTitle>
              </Link>
              <StyleCardSmallText>{figure.text}</StyleCardSmallText>
              <StyleCardSmallText>{figure.status}</StyleCardSmallText>
            </Card>
          ))}
        </CardContainer>
      </div>
      <br />
      <br />
      <StyleTextIslam>
        <br />
        <Typography>
          *...و رضيت لكم الإسلام دينا...* <br /> «Дин катары силерге Ислам
          (динин) ыраа көрдүм»
          <br /> (Маида, 3).
        </Typography>
        <br />
        <br />
        <Typography>
          *إن الدين عند الله الإسلام...* <br /> «Чындыгында, Аллахтын алдында
          кабыл болуучу дин бул – Ислам...» <br />
          <br /> (Алу Имран, 19).
        </Typography>
        <br />
        <br />
        <Typography>
          *إنا نحن نزلنا الذكر و إنا له لحافظون* <br /> «Чындыгында, эскертмени
          (Куранды) Биз түшүрдүк. Эми аны Өзүбүз сактайбыз». <br />
          <br /> (Хижр, 9)
        </Typography>
        <br />
        <br />
        <p>
          Ислам дини эч бир кемчиликсиз, толук дин. Адам баласынын татыктуу
          жашоо сүрүүсүнө 100 пайыз топ келет.
        </p>
      </StyleTextIslam>
      <div>
        <IslamtextStyle>Биздин Устаздар</IslamtextStyle>
        <CardContainer>
          {Ustazdar.map((figure, index) => (
            <Card key={index}>
              <Link to={figure.path}>
                <CardImage src={figure.image} alt={figure.name} />
                <CardTitle>{figure.name}</CardTitle>
              </Link>

              <StyleCardSmallText>{figure.text}</StyleCardSmallText>
              <StyleCardSmallText>{figure.status}</StyleCardSmallText>
            </Card>
          ))}
        </CardContainer>
        <CardContainerr>
          Аллахтын элчиси ( ﷺ ) айтты: Аалымдар менин мурасчыларым, себеби
          адамдарды туура жолго салып жаман жолдон кайтарат. Ошондой болгондон
          кийин аалымдарды урматтап аларды сыйлоо важип болот.
        </CardContainerr>
      </div>
    </Container>
  );
};

export default History;

const StyleTextIslam = styled('div')(() => ({
  textAlign: 'center',
  backgroundColor: '#00000086',
  color: '#fff',
  borderRadius: '10px',
  padding: '2rem',
}));

const StyleHeaderText = styled.div`
  text-align: center;
`;

const StyleHeaderTextStatus = styled.div`
  text-align: center;
  padding: 0rem;
`;

const Sallallahualeihivvassallam = styled.span`
  color: green;
  font-size: 3rem;
  cursor: pointer;
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

const IslamtextStyle = styled.h2`
  text-align: center;
  font-size: 60px;
  padding: 2rem;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  background-size: contain;

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
