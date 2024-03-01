import { styled } from '@mui/material';
import React from 'react';
import { developers } from '../utils/developers.js';
import { Container } from '@mui/system';
import BackForwardButtons from './BackForwardButtons.jsx';

const borderRadiuses = [
  '0px 0px 0px 40px',
  '40px 0px 40px 0px',
  '0px 0px 40px 0px',
  '40px 0px 0px 0px',
  '40px 0px 40px 0px',
  '0px 40px 40px 0px',
  '0px 40px 0px 0px',
  '0px 0px 40px 0px',
];

export const About = () => {
  return (
    <MainTeamContainer>
      <BackForwardButtons />
      <h1>Our Team</h1>
      <Container className="ImageContainer">
        {developers.map((developer, index) => (
          <div className="nameAndImageDiv" key={developer.id}>
            <div
              className="imageDiv"
              style={{
                borderRadius: borderRadiuses[index],
              }}
            >
              <img src={developer.image} alt={developer.name} />
            </div>
            <b>{developer.name}</b>
            <p>{developer.profession}</p>
          </div>
        ))}
      </Container>
    </MainTeamContainer>
  );
};

export default About;

const MainTeamContainer = styled('div')(() => {
  return {
    '& img': {
      width: '11.25rem',
      height: '11.25rem',
      transition: 'transform 0.5s ease-in-out',
      cursor: 'pointer',
    },

    '& .imageDiv': {
      overflow: 'hidden',
      '&:hover img': {
        transform: 'scale(0.90)',
      },
    },
    '& h1': {
      textAlign: 'center',
      marginBottom: '47px',
      color: ' #3752B4',
      fontFamily: 'Gilroy',
    },
    '& b': {
      color: '#3752B4',
      fontFamily: 'Poppins',
    },
    '& p': {
      fontFamily: 'Poppins',
    },
    '& .nameAndImageDiv': {
      textAlign: 'center',
    },
    '& > .ImageContainer': {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      alignItems: 'center',
      rowGap: '2rem',
      justifyContent: 'center',
    },
  };
});
