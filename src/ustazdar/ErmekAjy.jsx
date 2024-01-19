import React from 'react';
import styled from 'styled-components';

const ErmekAjy = () => {
  return (
    <Container>
      <BannerText>Устаз Эрмек Ажы Тынай уулу</BannerText>
      <VideosRow>
        <VideoCard>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dIMX858Cfk4?si=4HjNlVCjZJBdyvZ4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <VideoInfo>
            <VideoTitle>Устаз Эрмек Ажы Тынай уулу</VideoTitle>
            <VideoSubtitle>
              Шайтандаын адамдардын арасындагы 10 досу ?
            </VideoSubtitle>
          </VideoInfo>
        </VideoCard>
        <VideoCard>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5sTvrjA2sGM?si=mlAQ3pLNa_3di6eY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <VideoInfo>
            <VideoTitle>Устаз Эрмек Ажы Тынай уулу</VideoTitle>
            <VideoSubtitle>
              МУСУЛМАН АДАМ СӨЗСҮЗ ИЛИМДҮҮ БОЛУШУ КЕРЕК! ТУУГАНЫМ ЖАШООДОН АРТТА
              КАЛБА!
            </VideoSubtitle>
          </VideoInfo>
        </VideoCard>
        <VideoCard>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dIMX858Cfk4?si=4HjNlVCjZJBdyvZ4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <VideoInfo>
            <VideoTitle>Устаз Эрмек Ажы Тынай уулу</VideoTitle>
            <VideoSubtitle>
              Шайтандаын адамдардын арасындагы 10 досу ?
            </VideoSubtitle>
          </VideoInfo>
        </VideoCard>
        <VideoCard>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/RApeTuewryw?si=y5t8yu_3APFcXH25"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <VideoInfo>
            <VideoTitle>Устаз Эрмек Ажы Тынай уулу</VideoTitle>
            <VideoSubtitle>
              ӨЧӨШПӨГҮЛӨ,ЖӨӨЛӨШПӨГҮЛӨ, ТАЛАШПАГЫЛА! ТААСИРДҮҮ САБАК!
            </VideoSubtitle>
          </VideoInfo>
        </VideoCard>
        <VideoCard>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/WNwvwX5WaJ4?si=LtdsH00NJVkk9D1P"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <VideoInfo>
            <VideoTitle>Устаз Эрмек Ажы Тынай уулу</VideoTitle>
            <VideoSubtitle>
              СТРЕССТЕН ЧЫГЫШ ҮЧҮН ЭМНЕ КЫЛУУ КЕРЕК?
            </VideoSubtitle>
          </VideoInfo>
        </VideoCard>
        <VideoCard>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ElCukrrwSIg?si=rZQKT1S7VfJcPsTy"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          <VideoInfo>
            <VideoTitle>Устаз Эрмек Ажы Тынай уулу</VideoTitle>
            <VideoSubtitle>Жашоого үмүт берет </VideoSubtitle>
          </VideoInfo>
        </VideoCard>
        <VideoCard>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/9LMn1tiZlho?si=ir96JrhlshbgTJN_"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <VideoInfo>
            <VideoTitle>Устаз Эрмек Ажы Тынай уулу</VideoTitle>
            <VideoSubtitle>
              БИЛИП АЛЫҢЫЗ! АЛЛАХ ЖАМАН КӨРГӨН АДАМДЫН СЫПАТТАРЫ!
            </VideoSubtitle>
          </VideoInfo>
        </VideoCard>
        <VideoCard>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/LyWmEAwpOZg?si=mRpeLuJEd6dEzlhb"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <VideoInfo>
            <VideoTitle>Устаз Эрмек Ажы Тынай уулу</VideoTitle>
            <VideoSubtitle>
              ЖҮРӨКТӨР ТАЗАЛАНСА, ЖҮРӨК ТЫНЧ БОЛОТ! ОШОНДУКТАН ЖҮРӨКТҮ ТАЗА
              КАРМА!
            </VideoSubtitle>
          </VideoInfo>
        </VideoCard>
      </VideosRow>
    </Container>
  );
};

export default ErmekAjy;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const VideosRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 20px;
`;

const VideoCard = styled.div`
  flex: 0 0 23%;
  margin: 10px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  iframe {
    width: 100%;
    height: 250px;
    border: none;
  }
`;

const VideoInfo = styled.div`
  padding: 10px;
  text-align: center;
`;

const VideoTitle = styled.h2`
  color: #333;
  margin-bottom: 5px;
  font-size: 16px;
`;

const VideoSubtitle = styled.h3`
  color: #555;
  font-size: 14px;
`;

const BannerText = styled.div`
  text-align: center;
  font-size: 3rem;
  padding-bottom: 2rem;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;
