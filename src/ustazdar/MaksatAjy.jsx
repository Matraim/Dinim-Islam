import React from 'react';
import styled from 'styled-components';

const MaksatAjy = () => {
  return (
    <Container>
      <BannerText>Устаз Максатбек Ажы Токтомушев</BannerText>
      <VideosRow>
        <VideoCard>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/LcCIrV6B_iM?si=GTRyIIF4YXZaRMB_"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <VideoInfo>
            <VideoTitle>Максатбек ажы Токтомушев</VideoTitle>
            <VideoSubtitle>Жашоого үмүт берет </VideoSubtitle>
          </VideoInfo>
        </VideoCard>
        <VideoCard>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/p_S_nWZzlsc?si=_XsK6szhhsgRHwgA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <VideoInfo>
            <VideoTitle>Максатбек ажы Токтомушев</VideoTitle>
            <VideoSubtitle>Жашоого үмүт берет </VideoSubtitle>
          </VideoInfo>
        </VideoCard>
        <VideoCard>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Pprpr3hYtzA?si=cHFOecVHAhVgSUWK"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <VideoInfo>
            <VideoTitle>Максатбек ажы Токтомушев</VideoTitle>
            <VideoSubtitle>Жашоого үмүт берет </VideoSubtitle>
          </VideoInfo>
        </VideoCard>
        <VideoCard>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/OgbgFoDTQ6Y?si=UNFuCvMUOZQNLkLd"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <VideoInfo>
            <VideoTitle>Максатбек ажы Токтомушев</VideoTitle>
            <VideoSubtitle>Жашоого үмүт берет </VideoSubtitle>
          </VideoInfo>
        </VideoCard>
        <VideoCard>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Kuxutyse2EE?si=Tqrd4vIh7jUpNNFu"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <VideoInfo>
            <VideoTitle>Максатбек ажы Токтомушев</VideoTitle>
            <VideoSubtitle>Жашоого үмүт берет </VideoSubtitle>
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
            <VideoTitle>Максатбек ажы Токтомушев</VideoTitle>
            <VideoSubtitle>Жашоого үмүт берет </VideoSubtitle>
          </VideoInfo>
        </VideoCard>
        <VideoCard>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/wz1lZpggE2E?si=4Bd4g84cfvagtVCU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <VideoInfo>
            <VideoTitle>Максатбек ажы Токтомушев</VideoTitle>
            <VideoSubtitle>Жашоого үмүт берет </VideoSubtitle>
          </VideoInfo>
        </VideoCard>
        <VideoCard>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ag9g1yMk8nI?si=SOFOznWu4Y7WdqXF"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <VideoInfo>
            <VideoTitle>Максатбек ажы Токтомушев</VideoTitle>
            <VideoSubtitle>Жашоого үмүт берет </VideoSubtitle>
          </VideoInfo>
        </VideoCard>
      </VideosRow>
    </Container>
  );
};

export default MaksatAjy;

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
