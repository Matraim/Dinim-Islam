import { Container, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Jannat = () => {
  return (
    <StyleContainer>
      <h2>Намаз Аллах Тааланын буйругу</h2>
      <br />
      <Typography>
        Аллах Таала Куранда: “Аллах жана Анын элчиси бир ишти буйруган убакта,
        момун эркек жана момун аял үчүн Аллахтын өкүмүн таштап өз иштеринен бир
        ишти тандоо уруксат эмес. ( ал- Ахзаб: 36) <br /> <br />
        Аллах Таала Куранда: Алар бардык ибадаттарды калыс Аллах үчүн гана
        кылууга, андан (жеке кудайга сыйынуудан) башка динден жүз бурууга, намаз
        окууга, зекет берүүгө буюрулушкан эле жана дал ушул гана Туура Дин !
        (Баййина: 5) <br />
        <br /> Ошондой эле: Эй Мухаммад Ыйман келтирген пенделериме айткын:
        Намаз окушсун.. ( Иброхим: 31)
      </Typography>
      <br />
      <Typography>
        “Намаз окугула, зекет бергиле жана рүкү кылуучулар менен рүкү кылгыла”
        (Бакара 43)
      </Typography>
    </StyleContainer>
  );
};

export default Jannat;

const StyleContainer = styled(Container)({
  textAlign: 'center',
});
