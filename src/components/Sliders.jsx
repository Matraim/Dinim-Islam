import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { sliderrs } from '../data/slides.js';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  padding: 10px;
`;

const NextButton = styled(Button)`
  right: 0;
`;

const PrevButton = styled(Button)`
  left: 0;
`;

const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const nextSlide = useCallback(() => {
    setCurrentSlide((currentSlide + 1) % sliderrs.length);
  });

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + sliderrs.length) % sliderrs.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => clearInterval(interval);
  }, [currentSlide, nextSlide]);

  return (
    <SliderContainer>
      <PrevButton onClick={prevSlide}>
        <SkipPreviousIcon />
      </PrevButton>
      {sliderrs.map((slide, index) => (
        <Slide
          key={index}
          style={{ display: index === currentSlide ? 'block' : 'none' }}
        >
          <StyleImg src={slide.src} alt={slide.alt} />
        </Slide>
      ))}
      <NextButton onClick={nextSlide}>
        <SkipNextIcon />
      </NextButton>
    </SliderContainer>
  );
};

export default Slider;

const SliderContainer = styled.div`
  position: relative;
  width: 100%; /* Фиксированная ширина контейнера */
  max-width: 1200px; /* Максимальная ширина контейнера (можете изменить по вашему усмотрению) */
  height: auto; /* Автоматическая высота */
  overflow: hidden; /* Скрытие частей слайдов, которые выходят за пределы контейнера */
`;

const Slide = styled.div`
  width: 100%; /* Фиксированная ширина слайда */
  height: auto; /* Автоматическая высота слайда */
  display: none; /* Изначально скрываем все слайды */
`;

const StyleImg = styled.img`
  width: 100%; /* Изображение займет всю ширину слайда */
  height: auto; /* Автоматическая высота */
  display: block; /* Отображаем изображение как блочный элемент */
  border-radius: 0.3rem;
`;
