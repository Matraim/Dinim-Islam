import React, { useState } from 'react';
import {
  TextField,
  TextareaAutosize,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Link,
  Typography,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import XIcon from '@mui/icons-material/X';
import styled from 'styled-components';
import coontactimg from '../assets/ImagesGreatPersonalities/33333.jpeg';

const StyledCard = styled(Card)`
  width: auto;
`;

const StyledTextarea = styled(TextareaAutosize)`
  width: 100%;
  margin-top: 10px;
  padding: 1.2rem;
`;

const StyledButton = styled(Button)`
  margin-top: 1rem;
`;

const StyledSocialMedia = styled.div`
  margin-top: 2rem;
  text-align: center;
  & > a {
    margin-right: 8px;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('', {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Email sent successfully');
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <StyledCard elevation={3}>
        <CardMedia
          component="img"
          alt="Contact Image"
          height="140"
          image={coontactimg}
        />

        <CardContent>
          <Typography variant="h5">Contact</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Your Name"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            <TextField
              label="Your Email address"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />

            <StyledTextarea
              rowsMin={2}
              placeholder="Your message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />

            <StyledButton
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Send Message
            </StyledButton>
          </form>

          <StyledSocialMedia>
            <Typography variant="body1">Social Media:</Typography>
            <br />
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </Link>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </Link>
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </Link>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </Link>
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </Link>
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </Link>
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <XIcon />
            </Link>
          </StyledSocialMedia>
        </CardContent>
      </StyledCard>
    </Container>
  );
};

export default Contact;
