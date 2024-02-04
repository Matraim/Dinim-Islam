import React, { useState, useEffect } from 'react';
import { Container, Card as MuiCard, IconButton, Rating } from '@mui/material';
import { FavoriteBorderOutlined, FavoriteOutlined } from '@mui/icons-material';
import styled from 'styled-components';
import { quranData } from '../data/quranData';

const Quran = () => {
  const [likedItems, setLikedItems] = useState([]);
  const [ratings, setRatings] = useState({});

  useEffect(() => {
    const storedRatings = localStorage.getItem('quranRatings');
    if (storedRatings) {
      setRatings(JSON.parse(storedRatings));
    }
  }, []);

  const handleLikeClick = (id) => {
    if (!likedItems.includes(id)) {
      setLikedItems([...likedItems, id]);
    } else {
      setLikedItems(likedItems.filter((item) => item !== id));
    }
  };

  const handleRatingChange = (id, value) => {
    const newRatings = { ...ratings, [id]: value };
    setRatings(newRatings);
    localStorage.setItem('quranRatings', JSON.stringify(newRatings));
  };

  const sortedData = quranData.slice().sort((a, b) => b.rating - a.rating);

  return (
    <Container>
      <h1 style={{ textAlign: 'center' }}>Куран жаттаган хафиздер</h1>
      <CardContainer>
        {sortedData.map((item) => (
          <Card key={item.id}>
            <IconContainer>
              <IconButton
                aria-label="like"
                onClick={() => handleLikeClick(item.id)}
              >
                {likedItems.includes(item.id) ? (
                  <FavoriteOutlined />
                ) : (
                  <FavoriteBorderOutlined />
                )}
              </IconButton>
            </IconContainer>
            <Image src={item.imageUrl} alt={item.name} />
            <CardContent>
              <Title>{item.name}</Title>
              <TextRow>
                <Text>{item.nationality}</Text>
                <Text>|</Text>
                <Text>{item.position}</Text>
              </TextRow>
              <RatingContainer>
                <StyleHafizQuran
                  name={`rating-${item.id}`}
                  value={ratings[item.id] || item.rating}
                  onChange={(event, newValue) =>
                    handleRatingChange(item.id, newValue)
                  }
                />
              </RatingContainer>
            </CardContent>
          </Card>
        ))}
      </CardContainer>
      <LikedSection>
        <h2>Нравится</h2>
        {likedItems.length === 0 ? (
          <p>Вы еще не добавили ничего в избранное</p>
        ) : (
          likedItems.map((id) => {
            const likedItem = quranData.find((item) => item.id === id);
            return (
              <LikedCard key={likedItem.id}>
                <Title>{likedItem.name}</Title>
              </LikedCard>
            );
          })
        )}
      </LikedSection>
    </Container>
  );
};

export default Quran;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled(MuiCard)`
  flex: 1 1 calc(20% - 20px);
  margin: 10px;
  position: relative;
  transition: transform 0.3s ease;
  max-width: 400px;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  height: 180px;
  width: 100%;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 0.5rem;
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
  top: 1px;
  right: 1px;
`;

const RatingContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyleHafizQuran = styled(Rating)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const LikedSection = styled.div`
  margin-top: 2rem;
`;

const LikedCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 1rem;
`;
