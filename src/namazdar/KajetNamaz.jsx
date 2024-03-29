import React from 'react';
import { Container, Typography, styled } from '@mui/material';

const KajetNamaz = () => {
  return (
    <StyleContainer>
      <Typography variant="h2">Хаджат намазы</Typography>
      <Typography variant="body1">
        Дүйнөлүк же акыреттик кандайдыр бир муктаждыктары бар адам даарат алып,
        куптан намазынан кийин эки же төрт рекет намаз окуйт. Дагы бир пикир
        боюнча он эки рекет окуса болот. Намаз окуп бүткөндөн кийин Алла Таалага
        мактоо-алкыш айтып, пайгамбарыбызга салават-саламдарды айткан соң, хажат
        дубасын айтып, каалоосун Алла Тааладан тилейт. Бир хадисте баяндалганы
        боюнча намаздын биринчи рекетинде «Фатиха» сүрөсүн бир жолу, «Аятал
        курсини» үч жолу окуйт. Калган үч рекетинин ар биринде «Фатиха» менен
        «Ихлас», «Фалак», «Наас» сүрөлөрүн окуйт.
      </Typography>
      <Typography variant="body1">
        Абдулла бин Аби Авфадан (ра) баяндаган хадисинде пайгамбарыбыз (САВ)
        мындай деген: «Кимдин Алла Тааладан күткөн бир тилеги болсо же
        адамдардан бирөөнө кандайдыр бир тилеги бар болсо, оболу жакшылап даарат
        алган соң, Алла Таалага мактоолорду, Алланын элчисине (САВ) салаваттарды
        айтып, анын артынан мына бул дубаны окусун:
      </Typography>
      <Typography variant="body1">
        «Лаа илааха иллаллахул халимул кариим, субханаллахи раббил аршил азиим.
        Алхамду лиллахи раббил ааламиин. Ас-алука муужибаати рахматика ва
        азааима магфиратик, валганимата мин кулли биррин, вассалаамата мин кулли
        исмин, лаа тадаь ли занбан илла гафартаху, валаа хамман илла фарражтаху
        валаа хаажатан хия лака ридан илла кадайтаха, йа архамарраахимиин!».
      </Typography>
      <Typography variant="body1">Мааниси:</Typography>
      <Typography variant="body1">
        «Мээримдүү жана жоомарт болгон Аллахтан башка кудай жок. Эбегейсиз улуу
        арштын ээси — Аллахка тасбих айтам. Бүткүл мактоолор ааламдардын ээси
        болгон Аллахка тиешелүү!
      </Typography>
      <Typography variant="body1">
        Оо, Аллахым! Мээримдүүлүгүңө себепкер нерселерди, олуттуу кечиримиңди,
        ар бир жакшылыкка насип буйруп, ар бир күнөөдөн алыс болууну Сенден
        сурайм. Бир да күнөөмдү койбостон кечир! Кайгы-муңдан толук арылт!
        Өрөзүчүлүгүңө шай келген ар бир муктаждыгымды аткар. Оо, өрөзүчүлөрдүн
        өрөзүчүсү болгон Аллахым!» <br />
        (Тирмизи, Витир 17).
      </Typography>
    </StyleContainer>
  );
};

export default KajetNamaz;

const StyleContainer = styled(Container)(() => ({
  textAlign: 'center',
  padding: '1rem',
}));
