import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { images, listData } from '../data/img';
import Sliders from '../components/Sliders';

const Home = () => {
  return (
    <Container>
      <Section>
        <Title>Диним Ислам</Title>
        <Sliders />
      </Section>
      <Section>
        <Title>Исламдын 5 парзы</Title>
        <List>
          {listData.map((item, index) => (
            <StyledLink to={`/${item.toLowerCase()}`} key={index}>
              <ListItem>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={images[index]}
                    alt={item}
                  />
                  <CardContent>
                    <Typography>{item}</Typography>
                  </CardContent>
                </Card>
              </ListItem>
            </StyledLink>
          ))}
        </List>
      </Section>
      <Section>
        <iframe
          width="100%"
          height="700px"
          src="https://www.youtube.com/embed/xMcNKy0rkf4?si=9RAyxtGoZ2sCBMdr"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <StyleTexth4>Your browser does not support the video tag.</StyleTexth4>
      </Section>
    </Container>
  );
};

export default Home;

const StyleTexth4 = styled('h4')(() => ({
  textAlign: 'center',
  padding: '1rem',
}));

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h2`
  text-align: center;
  padding: 1.1rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  overflow-x: auto;
`;

const ListItem = styled.li`
  flex: 0 0 calc(20% - 20px);
  border-radius: 5px;
  overflow: hidden;
  text-align: center;
  margin-bottom: 20px;
`;

// const Image = styled.img`
//   width: 100%;
//   height: auto;
//   object-fit: cover;
//   border-radius: 0.5rem;
// `;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
