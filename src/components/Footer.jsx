import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyleContainer>
      <StyleContent>
        <p>&copy; 2024 Dinim-Islam All rights reserved.</p>
        <p>Contact us : Kyrgyz@email.com</p>
      </StyleContent>
    </StyleContainer>
  );
};

export default Footer;

const StyleContainer = styled.footer`
  background-color: #1976d2;
  color: #fff;
  text-align: center;
  width: 100%;
  padding: 1rem;
`;

const StyleContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
