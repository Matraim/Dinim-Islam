import React from 'react';
import styled from 'styled-components';
import Namaz from '../assets/ImagesGreatPersonalities/33333.jpeg';
import { Container, Typography } from '@mui/material';

const Shahada = () => {
  return (
    <StyleContainer>
      <StyleHeading>
        Исламдын биринчи парзы - шахада келимесин айтуу
      </StyleHeading>
      <StyleArabicText>
        أَشْهَدُ أَنْ لَا إِلٰهَ إِلاَّ اللّٰهُ وَأَشْهَدُ أَنَّ محَّدًا
        عَبْدُهُ وَرَسُولُهُ
      </StyleArabicText>
      <StyleImg src={Namaz} alt="namaz" />
      <StyleArabicText>
        Ашхаду ан лаа илаха иллаллох ва ашхаду анна Мухаммадан абдуху ва расулух
      </StyleArabicText>

      <StyleParagraph>
        деген сөзду тил менен айтып, дил менен ырастоо. Анын терең маанисине
        күбүнүп, исламга таандык калган бул сөздүн ичине камтыганын көрөбүз.
        Курандын бардыгы шахадат келмесинин тушундурмосу жана чечмелениши деп
        айтсак, жаңылбайбыз. Себеби, Куран дин менен тавхидден турган. Муну
        тушундуруу иретинде аятта төмөнкүчүдөрдү айтат: <br />
        <br />
        <b>
          «Бул Куран, адамдарды эскертилсин, Алла Жалгыз Кудай экенин билишсин
          жана акыл ээлери жакшылап акыл жуунтуу болуусу үчүн (Алла тарабынан)
          тушуртулган.»
          <span>(Ибрахим, 52)</span>
        </b>
        <br />
        <br />
        Бул дийнөдө де, тигил дийнөдө де Алла Таала ыраазы болбогон бардык
        жарамдуу (салих) ишенимдери - баалуу сөздүн, аманатты ишенимдердин,
        бузукулуктын булагы болуп саналат. <br />
        <br />
        <b>
          Алла Таала адамдарга кандай мисал келтиргенин көргөн жоксуну: «Жакшы
          сөз, жакшы дарактап жараткандын боюнча окулсо, тамыры (жерден)
          жулунган, бир даяда (орноп) жайы тапкан жакшы даракка окшош.»
          <br />
          <span>(Ибрахим, 24-26)</span> - деген.
          <br /> <br />
        </b>
        Алланын Элчиси (саллаллоху алейхи васаллам) мындай дейт: «Ар дая бирге
        максат – Алланы кындыртуу пенденин зикиридир.» (Фазаили Амал, 462) Ибни
        Аббас (Алла андан ыраазы болсун) жогорудагы аяттарды тушундурбай
        төмөнкүлөрдү айтат: «Бул жерде шахадат келмесине ишаарат бар. Тамыры
        момун пенденин сөзү менен жыргындан, бутактары болсо асмандарда. Бул
        себептен улам момундардын аткарган иш-амалдары асмандарга көтөрүлөт.
        Жаман сөз болсо – Кудайга шерик кошуу, бузукулук жана иимансыздыкты
        билдирген сөз.
      </StyleParagraph>
    </StyleContainer>
  );
};

export default Shahada;

const StyleContainer = styled(Container)(() => ({
  maxWidth: '900px',
  margin: '0 auto',
  padding: '20px',
  textAlign: 'center',
}));

const StyleHeading = styled('h1')(() => ({
  fontSize: '2rem',
  marginBottom: '2rem',
}));

const StyleArabicText = styled('h2')(() => ({
  fontSize: '1.3rem',
  color: 'green',
  fontFamily: 'Arial, sans-serif',
  lineHeight: '1.6',
}));

const StyleImg = styled('img')(() => ({
  width: '90%',
  maxWidth: 'auto',
  height: 'auto',
  borderRadius: '1rem',
  padding: '2rem',
}));

const StyleParagraph = styled(Typography)(() => ({
  fontSize: '1em',
  lineHeight: '1.6rem',
  marginTop: '2rem',
}));
