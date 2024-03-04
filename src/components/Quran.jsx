import { Container, Link, Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { quranData } from '../data/quranData';

const Quran = () => {
  return (
    <Container>
      <Title>Куран жаттаган хафиздер</Title>
      <CardContainer>
        {quranData.map((item) => (
          <Link key={item.id} to={item.path}>
            <StyledCard>
              <CardImage src={item.imageUrl} alt={item.name} />
              <CardContentStyled>
                <CardTitle>{item.name}</CardTitle>
                <CardSubtitle>{`${item.nationality} | ${item.city}`}</CardSubtitle>
              </CardContentStyled>
            </StyledCard>
          </Link>
        ))}
      </CardContainer>
    </Container>
  );
};

export default Quran;

const Title = styled(Typography)`
  text-align: center;
  margin-bottom: 20px;
`;

const CardContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  cursor: pointer;
`;

const StyledCard = styled(Card)`
  width: 250px;
  max-width: 300px;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled('img')`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

const CardContentStyled = styled(CardContent)`
  padding: 16px;
`;

const CardTitle = styled(Typography)`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const CardSubtitle = styled(Typography)`
  font-size: 1rem;
  color: #666;
  text-align: center;
`;
