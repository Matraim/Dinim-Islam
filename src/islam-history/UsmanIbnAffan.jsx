import React from 'react';
import styled from 'styled-components';
import UsmanIbnImg from '../assets/images/1200px-Rashidun_Caliph_Uthman_ibn_Affan_-_عثمان_بن_عفان_ثالث_الخلفاء_الراشدين.svg.png';
const UsmanIbnAffan = () => {
  return (
    <Container>
      <Title>UsmanIbnAffan (радыяллаху анх)</Title>
      <Image src={UsmanIbnImg} alt="khalif" />
      <Paragraph></Paragraph>
      <List>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
      </List>
    </Container>
  );
};

export default UsmanIbnAffan;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #333;
`;

const Container = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: left;
`;

const ListItem = styled.li`
  font-size: 14px;
  line-height: 1.4;
  color: #555;
  margin-bottom: 10px;
`;
