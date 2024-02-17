import React, { useState, useEffect } from 'react';
import { Container, Card as MuiCard, Rating } from '@mui/material';
import styled from 'styled-components';
import { quranData } from '../data/quranData';
import { FavoriteBorderOutlined, DeleteOutlined } from '@mui/icons-material';

const Quran = () => {
  const [likedItems, setLikedItems] = useState(() => {
    const storedLikedItems = localStorage.getItem('likedItems');
    return storedLikedItems ? JSON.parse(storedLikedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem('likedItems', JSON.stringify(likedItems));
  }, [likedItems]);

  const handleToggleLike = (id) => {
    if (likedItems.includes(id)) {
      const updatedLikedItems = likedItems.filter((item) => item !== id);
      setLikedItems(updatedLikedItems);
    } else {
      const newLikedItems = [...likedItems, id];
      setLikedItems(newLikedItems);
    }
  };

  const handleRemoveFromLiked = (id) => {
    const updatedLikedItems = likedItems.filter((item) => item !== id);
    setLikedItems(updatedLikedItems);
  };

  const handleRatingChange = (id, newValue) => {
    const updatedQuranData = quranData.map((item) =>
      item.id === id ? { ...item, rating: newValue } : item
    );
    localStorage.setItem('quranData', JSON.stringify(updatedQuranData));
  };

  return (
    <Container>
      <h1 style={{ textAlign: 'center' }}>Куран жаттаган хафиздер</h1>
      <CardContainer>
        {quranData.map((item) => (
          <Card key={item.id}>
            {!likedItems.includes(item.id) && (
              <ToggleLikeButton onClick={() => handleToggleLike(item.id)}>
                <FavoriteBorderOutlined />
              </ToggleLikeButton>
            )}
            {likedItems.includes(item.id) && (
              <RemoveFromLikedButton
                onClick={() => handleRemoveFromLiked(item.id)}
              >
                <DeleteOutlined />
              </RemoveFromLikedButton>
            )}
            <Image src={item.imageUrl} alt={item.name} />
            <CardContent>
              <Title>{item.name}</Title>
              <TextRow>
                <Text>{item.nationality}</Text>
                <Text>|</Text>
                <Text>{item.position}</Text>
              </TextRow>
              <RatingContainer>
                <Rating
                  name={`rating-${item.id}`}
                  value={item.rating}
                  s
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
                <Rating
                  name={`liked-rating-${likedItem.id}`}
                  value={likedItem.rating}
                  readOnly
                />
                <RemoveFromLikedButton
                  onClick={() => handleRemoveFromLiked(likedItem.id)}
                >
                  <DeleteOutlined />
                </RemoveFromLikedButton>
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
  text-align: center;
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

const RatingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
`;

const ToggleLikeButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const RemoveFromLikedButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const LikedSection = styled.div`
  margin-top: 2rem;
`;

const LikedCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 1rem;
  position: relative;
`;
