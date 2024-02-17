import { Container, Link, Card as MuiCard } from '@mui/material';
import styled from 'styled-components';
import { quranData } from '../data/quranData';

const Quran = () => {
  return (
    <Container>
      <h1 style={{ textAlign: 'center' }}>Куран жаттаган хафиздер</h1>
      <CardContainer>
        {quranData.map((item) => (
          <Link key={item.id} to={item.path}>
            <Card>
              <Image src={item.imageUrl} alt={item.name} />
              <CardContent>
                <Title>{item.name}</Title>
                <TextRow>
                  <Text>{item.nationality}</Text>
                  <Text>|</Text>
                  <Text>{item.position}</Text>
                </TextRow>
              </CardContent>
            </Card>
          </Link>
        ))}
      </CardContainer>
    </Container>
  );
};

export default Quran;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  cursor: pointer;
`;

const Card = styled(MuiCard)`
  flex: 1 1 calc(20% - 20px);
  margin: 10px;
  position: relative;
  max-width: 400px;
`;

const Image = styled.img`
  height: 180px;
  width: 100%;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 0.5rem;
  position: relative;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const TextRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const Text = styled.div`
  font-size: 1rem;
  color: #666;
  margin-right: 5px;
  text-align: center;
`;
