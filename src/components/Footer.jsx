import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyleContainer>
      <StyleContent>
        <p>&copy; 2024 Dinim-Islam All rights reserved.</p>
        <p>Contact us : Kyrgyz@email.com</p>
        <p>2024 Dinim-Islam All rights reserved.</p>
        <p>Contact us : Kyrgyz@email.com</p>
        <p> 2024 Dinim-Islam All rights reserved.</p>
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
  display: flex;
  width: 100%;
  padding: 4rem;
  align-items: center;
  justify-content: center;
  margin-top: 1.7rem;
`;

const StyleContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
`;
