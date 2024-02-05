import React from 'react';
import { Container, Typography, Grid, Slider, IconButton } from '@mui/material';
import styled from 'styled-components';
import { teamMembers } from '../data/team';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const TeamMemberCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const TeamMemberImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const About = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handlePrevious = () => {
    setValue((prevValue) => Math.max(0, prevValue - 1));
  };

  const handleNext = () => {
    setValue((prevValue) => Math.min(teamMembers.length - 1, prevValue + 1));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        О нас
      </Typography>
      <Typography paragraph>
        Исламский сайт - это место, где вы можете найти полезную информацию о
        исламе, его учении, истории, культуре и обычаях. Мы стремимся
        распространять знания о исламе и способствовать взаимопониманию между
        людьми различных культур и верований.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Наша команда
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item key={index}>
            <TeamMemberCard
              style={{ visibility: index === value ? 'visible' : 'hidden' }}
            >
              <TeamMemberImage
                src={member.imageUrl}
                alt={`${member.name} ${member.surname}`}
              />
              <Typography variant="h6">{`${member.name} ${member.surname}`}</Typography>
              <Typography variant="body2">{member.position}</Typography>
              <Typography variant="body2">{`${member.age} лет`}</Typography>
            </TeamMemberCard>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={1}>
          <IconButton onClick={handlePrevious} disabled={value === 0}>
            <NavigateBeforeIcon />
          </IconButton>
        </Grid>
        <Grid item xs={10}>
          <Slider
            value={value}
            onChange={handleChange}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={teamMembers.length - 1}
          />
        </Grid>
        <Grid item xs={1}>
          <IconButton
            onClick={handleNext}
            disabled={value === teamMembers.length - 1}
          >
            <NavigateNextIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
