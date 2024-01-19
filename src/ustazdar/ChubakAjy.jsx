import React from 'react';
import styled from 'styled-components';

const ChubakAjy = () => {
  return (
    <Container>
      <BannerText>Шейх Чубак Ажы Жалилов </BannerText>
      <VideosRow>
        <VideoCard>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/_t8J7Vm-Cxs?si=wJxYQsxzSBVYxdmU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <VideoInfo>
            <VideoTitle>Чубак Ажы Жалилов (р.a)</VideoTitle>
            <VideoSubtitle>Жашоого үмүт берет </VideoSubtitle>
          </VideoInfo>
        </VideoCard>
        <VideoCard>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/_t8J7Vm-Cxs?si=wJxYQsxzSBVYxdmU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <VideoInfo>
            <VideoTitle>Чубак Ажы Жалилов (р.a)</VideoTitle>
            <VideoSubtitle>Жашоого үмүт берет </VideoSubtitle>
          </VideoInfo>
        </VideoCard>
        <VideoCard>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/_t8J7Vm-Cxs?si=wJxYQsxzSBVYxdmU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <VideoInfo>
            <VideoTitle>Чубак Ажы Жалилов (р.a)</VideoTitle>
            <VideoSubtitle>Жашоого үмүт берет </VideoSubtitle>
          </VideoInfo>
        </VideoCard>
        <VideoCard>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/_t8J7Vm-Cxs?si=wJxYQsxzSBVYxdmU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <VideoInfo>
            <VideoTitle>Чубак Ажы Жалилов (р.a)</VideoTitle>
            <VideoSubtitle>Жашоого үмүт берет </VideoSubtitle>
          </VideoInfo>
        </VideoCard>
        <VideoCard>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/_t8J7Vm-Cxs?si=wJxYQsxzSBVYxdmU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <VideoInfo>
            <VideoTitle>Чубак Ажы Жалилов (р.a)</VideoTitle>
            <VideoSubtitle>Жашоого үмүт берет </VideoSubtitle>
          </VideoInfo>
        </VideoCard>
        <VideoCard>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Uc3xONseoTU?si=eHLmCB9OoUNJByYO"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <VideoInfo>
            <VideoTitle>Чубак Ажы Жалилов (р.a)</VideoTitle>
            <VideoSubtitle>БАКТЫЛУУЛУККА ЖЕТЕЛЕГЕН 6 НЕРСЕ.</VideoSubtitle>
          </VideoInfo>
        </VideoCard>
        <VideoCard>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ZE9RFepYyaI?si=h8NZnEoL499kU04r"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <VideoInfo>
            <VideoTitle>Чубак Ажы Жалилов (р.a)</VideoTitle>
            <VideoSubtitle>АДАМЗАТ канткенде оңолот ?</VideoSubtitle>
          </VideoInfo>
        </VideoCard>
        <VideoCard>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/R5iMYIKQaCc?si=RsHHjr48qsa9ehJl"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <VideoInfo>
            <VideoTitle>Чубак Ажы Жалилов (р.a)</VideoTitle>
            <VideoSubtitle>Чубак устаздын ачуусу келген учурлары</VideoSubtitle>
          </VideoInfo>
        </VideoCard>
      </VideosRow>
    </Container>
  );
};

export default ChubakAjy;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const BannerText = styled.div`
  text-align: center;
  font-size: 3rem;
  padding-bottom: 2rem;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
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
const VideoSubtitle = styled.h3`
  color: #555;
  font-size: 14px;
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
const VideosRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 20px;
`;
