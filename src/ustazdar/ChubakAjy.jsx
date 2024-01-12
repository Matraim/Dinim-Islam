import React from 'react';

import styled from 'styled-components';
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

const ChubakAjy = () => {
  return (
    <div>
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
          <VideoTitle>Максатбек ажы Токтомушев</VideoTitle>
          <VideoSubtitle>Жашоого үмүт берет </VideoSubtitle>
        </VideoInfo>
      </VideoCard>
    </div>
  );
};

export default ChubakAjy;
