import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NamazImage from '../assets/ImagesGreatPersonalities/33333.jpeg';
import AjylykImage from '../assets/ImagesGreatPersonalities/33333.jpeg';
import OrozoImage from '../assets/ImagesGreatPersonalities/33333.jpeg';
import ZeketImage from '../assets/ImagesGreatPersonalities/33333.jpeg';
import KurmandykImage from '../assets/ImagesGreatPersonalities/33333.jpeg';
import Banner from '../assets/ImagesGreatPersonalities/33333.jpeg';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Section>
        <Title>Диним Ислам</Title>
        <Image src={Banner} alt="img-lion-islamic" />
      </Section>
      <Section>
        <Title>Исламдын 5 парзы</Title>
        <List>
          <StyledLink>
            <ListItem>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={NamazImage}
                  alt="Namaz"
                />
                <CardContent>
                  <Typography>Namaz</Typography>
                </CardContent>
              </Card>
            </ListItem>
          </StyledLink>
          <ListItem>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={AjylykImage}
                alt="Ajylyk"
              />
              <CardContent>
                <Typography>Ajylyk</Typography>
              </CardContent>
            </Card>
          </ListItem>
          <ListItem>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={OrozoImage}
                alt="Orozo"
              />
              <CardContent>
                <Typography>Orozo</Typography>
              </CardContent>
            </Card>
          </ListItem>
          <ListItem>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={ZeketImage}
                alt="Zeket"
              />
              <CardContent>
                <Typography>Zeket</Typography>
              </CardContent>
            </Card>
          </ListItem>
          <ListItem>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={KurmandykImage}
                alt="Kurmandyk challyy"
              />
              <CardContent>
                <Typography>Kurmandyk challyy</Typography>
              </CardContent>
            </Card>
          </ListItem>
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
        <h4 style={{ textAlign: 'center', padding: '1rem' }}>
          {' '}
          Your browser does not support the video tag.
        </h4>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h2`
  text-align: center;
  padding: 1.5rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const ListItem = styled.li`
  flex: 1 1 calc(20% - 20px);
  border-radius: 5px;
  overflow: hidden;
  text-align: center;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 100%;
  max-width: auto;
  height: auto;
  border-radius: 0.5rem;
  padding-top: 1rem;
`;

export default Home;
