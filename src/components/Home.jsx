import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { listData } from '../data/img';

import Sliders from '../components/Sliders';
import BackForwardButtons from './BackForwardButtons';

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
          {listData.map((item) => (
            <StyledLink to={item.path} key={item.title}>
              <ListItem>
                <StyleCard>
                  <CardMedia component="img" height="140" alt={item.title} />
                  <CardContent>
                    <StyledTypography>{item.title}</StyledTypography>
                    <Typography>{item.transliteration}</Typography>
                  </CardContent>
                </StyleCard>
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
      <BackForwardButtons />
    </Container>
  );
};

export default Home;

const StyleTexth4 = styled('h4')(() => ({
  textAlign: 'center',
  padding: '1rem',
}));

const StyleCard = styled(Card)(() => ({
  width: '170px',
}));

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const StyledTypography = styled(Typography)`
  margin-bottom: 8px;
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

const StyledLink = styled(Link)`
  text-decoration: none;
`;
