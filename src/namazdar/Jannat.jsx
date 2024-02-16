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
      <br />
      <div>
        <h2>Намаздын Убакыттары</h2>
        <Typography>
          <ul>
            1. <b>Багымдат намазынын убагы </b>
            <li>Таң агараардан баштап кун чыкканга чейин</li>
          </ul>
          <ul>
            2. <b>Бешим намазынын убагы</b>
            <li>
              кун чак туштон бир аз откондон тартып аср намазынын убактысы
              киргенге чейинки аралык
            </li>
          </ul>
          <ul>
            3. <b> Аср намазынын убагы</b>
            <li>
              кут батууга эки саатча калгандан тартып батканга чейинки аралык
            </li>
          </ul>
          <ul>
            4. <b> Шам намазынын убагы</b>
            <li>
              кун толук баткандан тартып горизонттогу кундун кызыл шооласы
              кеткенге чейинки аралык
            </li>
          </ul>
          <ul>
            5. <b> Куптан намазынын убагы</b>
            <li>
              шам намазынын убактысы толук буткондот баштап багымдат намазынын
              убагы киргенге чейинки аралык
            </li>
          </ul>
          <ul>
            <h2>Жума намазыынын убагы</h2>
            <li>
              Бешим намазынын убагы киргенде окулат Орозо айт жана курман айт
              намаздарынын убактары кун эки найза боюу которулгондон баштап
              бешим намазыынын убагы киргенге чейин окулат
            </li>
          </ul>
          <ul>
            <h2>Эскертме</h2>
            <Typography>Томонку убактарда намаз окулбайт</Typography>
            <li>1. Эртен менен кун жаныдан которулуп жатканда</li>
            <li>2. Кун чак тушко келгенде</li>
            <li>3. Кун батаарда</li>
          </ul>
        </Typography>
        <h2>Намаздын Рекеттери</h2>
        <ul>
          1. <b>Багымдат намазы </b>
          <li>2 рекет суннот 2 рекет парз</li>
        </ul>
        <ul>
          2. <b>Бешим намазы </b>
          <li>4 рекет суннот 4 рекет парз 2 рекет суннот</li>
        </ul>
        <ul>
          3. <b>Аср намазы </b>
          <li>4 рекет парз</li>
        </ul>
        <ul>
          4. <b>Шам намазы </b>
          <li>3 рекет парз 2 рекет суннот</li>
        </ul>
        <ul>
          5. <b>Куптан намазы </b>
          <li>4 рекет парз 2 рекет суннот 3 рекет витир важиб</li>
        </ul>
        <h2>Намазды бузуучу нерселер</h2>
        <ul>
          <li>Намазда суйлоо</li>
          <li>намаз окуп жатканда бироого атайын салам айтуу же алик алуу</li>
          <li>онтоо жана ушул сыяктуу ундорду чыгаруу</li>
          <li>ун чыгарып ыйлоо бирок акыретти эстеп ыйласа болот</li>
          <li>чучкурго адамга жооп беруу</li>
          <li>
            себепсиз жотолуп тамакты тазалоо башача айтканда тамактагы
            нерселреди чыгаруу
          </li>
          <li>
            созго жооп беруу зирк хади куран аяты менен болсо да жооп берилбейт
          </li>
          <li>имамдан башка жанында турган адамдын катасын ондоо</li>
          <li>
            куранды карап окуу эгер намазды жаны уйронуп жатса уйронгучо карап
            окуса болот
          </li>
          <li>ыплас жерде сажда кылуу</li>
          <li>адамдардан суралуучу нерселер менен дуба кылуу</li>
          <li>жеп ичуу</li>
          <li>эки кол менен жасалуучу ашыкча кыймыл мисалы тырмануу сыяктуу</li>
        </ul>
      </div>
    </StyleContainer>
  );
};

export default Jannat;

const StyleContainer = styled(Container)({
  textAlign: 'center',
  padding: '1rem',
});
