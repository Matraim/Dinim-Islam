import React from 'react';
import { Container, Card as MuiCard, IconButton, Rating } from '@mui/material';
import { FavoriteBorderOutlined, FavoriteOutlined } from '@mui/icons-material';
import styled from 'styled-components';
import { quranData } from '../data/quranData';

const Quran = () => {
  const handleLikeClick = (id) => {
    // Logic to handle like button click
  };

  const handleRatingChange = (id, value) => {
    // Logic to handle rating change
  };

  return (
    <Container>
      <h1>Quran</h1>
      <div
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        {quranData.map((item) => (
          <Card key={item.id}>
            <IconContainer>
              <IconButton
                aria-label="like"
                onClick={() => handleLikeClick(item.id)}
              >
                {item.liked ? <FavoriteOutlined /> : <FavoriteBorderOutlined />}
              </IconButton>
            </IconContainer>
            <Image src={item.imageUrl} alt={item.name} />
            <div>
              <Title>{item.name}</Title>
              <TextRow>
                <Text>{item.nationality}</Text>
                <Text>|</Text>
                <Text>{item.position}</Text>
              </TextRow>
              <StyleHafizQuran
                name={`rating-${item.id}`}
                value={item.rating}
                onChange={(event, newValue) =>
                  handleRatingChange(item.id, newValue)
                }
              />
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Quran;

const Card = styled(MuiCard)`
  margin: 10px;
  position: relative;
`;

const Image = styled.img`
  height: 200px;
  width: auto;
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

const IconContainer = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
`;

const StyleHafizQuran = styled(Rating)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
