import { Container, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const BoshJurok = () => {
  return (
    <Container>
      <StyledBannerText>
        <h2>*Бош уйго ууру кирбейт*</h2>
      </StyledBannerText>
      <StyledTypography>
        <b>
          Алланын элчиси (саллаллаху алейхи ва саллам) Каабада эле. Мусулмандар
          менен бирге бир жөөт киши дагы келди. Ал мезгилдерде Каабага жөөттөр
          менен бутпарастар дагы келишчү. Момундардан бир киши пайгамбарыбыздан
          мындай деп бир суроо сурады: -Оо Алланын элчиси! Шайтан мага намазда
          көп азгырык берип жатат, эмне кылуум керек? Жөөт киши дароо тура
          калып, текеберленүү менен мындай деп корсулдады: -Биздин динибизде
          шайтандын азгырыгы жок, шайтан бизге азгырык бербейт! Ошондо
          пайгамбарыбыз: -Эй, Али, мунун жообун сен бер – деп буйруду. Азирети
          Али болсо пайгамбарыбыздын жанында сөздү эч создуктурбастан кыска жана
          нуска кылып мына бул жоопту берди: -Эй, Алланын элчиси, бош үйгө ууру
          кирбейт! Ооба, мөмөлүү бакка таш ыргытылат, баалуу нерсеси бар үйгө
          ууру кирүүгө аракет кылат, дал ошол сыяктуу эле шайтандын иши дагы
          ыйманы барлар жана ибаадат кылгандар менен болот. Алардын баалуу
          нерсесин уурдап алууга аракет кылат. *** Азирети имам Азамдын
          мезгилинде бир киши акчасын катып койгон жерин унутуп коёт. Канчалык
          эстегенге аракет кылса дагы, канчалык издесе дагы акчаны катып койгон
          жерди эч таба албай убара болот. «Менин бул дартыма чараны тапса ошол
          зат табат», - деп, түптүз азирети имам Азамдын жанына барат. Азирети
          имам Азам болсо бул кишинин арызын уккандан кийин мындай деди: -Сенин
          бул маселең фыкыхка байланыштуу эмес, бирок, ошондой болсо да сага бир
          жол көрсөтөйүн... Сен баргының да, бул түнү таң атканга чейин намаз
          оку! Акчаңды катып койгон жериңди эсиңе түшүрөсүң деп үмүттөнөм!..
          Тиги киши улуу имамдын бул жообун алар замат үйүнө барып жакшылап
          даарат алат. Ошол түнү таң аткыча ибадат кылмакчы болот. Намаз окуп
          баштайт... Али түн ортосу боло электе эле баягы акчаны каткан жерин
          эсине түшүрөт. Дароо намазын таштап, акчаны катып койгон жеринен таап,
          уйкуга жатты...Таң атканда Имам Азам хазретине барып: -Эй, Имам, Алла
          Таала сенден ыраазы болсун! Бул дартыма да чара таап бердиң. Түн
          ортосу боло электе эле акчаны каткан жерди эстеп, барып акчамды алдым
          дагы жатып уктап калдым – дегенде азирети Имам ага мындай деди:
          -Аттиң, таң аткыча ошол ибадатыңды улантсаң болмок. Себеби, шайтан
          сенин таң аткыча ибадат менен алек болууңа чыдай албай түн ортосу боло
          электе эле сага аны эстеткен экен. Мен ансыз деле ушул максатта сага
          «Түнү бою намаз оку» деген элем. Таң атканга чейин шүгүр намазын да
          кошо окусаң кандай жакшы болмок. Бирок, сен акчаны тапканда намазды
          таштадың...
        </b>
      </StyledTypography>
    </Container>
  );
};

export default BoshJurok;

const StyledBannerText = styled('div')({
  fontSize: '2rem',
  textAlign: 'center',
  padding: '1rem',
});

const StyledTypography = styled(Typography)({
  lineHeight: '3',
  textAlign: 'center',
  wordSpacing: '3px',
  letterSpacing: '1',
});
