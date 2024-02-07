import React, { useCallback, useEffect, useState } from 'react';
import { Container, Typography, styled } from '@mui/material';
import img1 from '../assets/images/100.png';
import img2 from '../assets/images/20131203_Istanbul_118.jpg';

const imagesAboutSlider = [
  { src: img1, alt: 'Image 1' },
  { src: img2, alt: 'Image 2' },
];

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((currentSlide + 1) % imagesAboutSlider.length);
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (currentSlide - 1 + imagesAboutSlider.length) % imagesAboutSlider.length
    );
  }, [currentSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <StyledContainer>
      <Typography variant="h2" gutterBottom>
        О команде
      </Typography>
      <Typography>
        Наша команда состоит из опытных профессионалов, готовых воплотить ваши
        идеи в реальность. Мы стремимся к качеству и инновациям, чтобы
        удовлетворить все потребности наших клиентов.
      </Typography>
      <SliderContainer>
        <PrevButton onClick={prevSlide}>{'<'}</PrevButton>
        {imagesAboutSlider.map((image, index) => (
          <Slide key={index} active={index === currentSlide}>
            <StyledImage src={image.src} alt={image.alt} />
          </Slide>
        ))}
        <NextButton onClick={nextSlide}>{'>'}</NextButton>
      </SliderContainer>
    </StyledContainer>
  );
};

export default About;

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

const SliderContainer = styled('div')({
  marginTop: '20px',
  marginBottom: '20px',
  width: '100%',
  overflow: 'hidden',
  position: 'relative',
});

const Slide = styled('div')(({ active }) => ({
  width: '100%',
  display: active ? 'block' : 'none',
}));

const StyledImage = styled('img')({
  width: '100%',
});

const PrevButton = styled('button')({
  position: 'absolute',
  top: '50%',
  left: '10px',
  transform: 'translateY(-50%)',
  backgroundColor: 'transparent',
  border: 'none',
  color: 'white',
  fontSize: '18px',
  cursor: 'pointer',
});

const NextButton = styled('button')({
  position: 'absolute',
  top: '50%',
  right: '10px',
  transform: 'translateY(-50%)',
  backgroundColor: 'transparent',
  border: 'none',
  color: 'white',
  fontSize: '18px',
  cursor: 'pointer',
});
