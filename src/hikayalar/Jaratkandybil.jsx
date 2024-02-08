import { Container, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Jaratkandybil = () => {
  return (
    <Container>
      <StyledBannerText>
        <h2>Кожоюнун ким билбейт</h2>
      </StyledBannerText>
      <StyledTypography>
        Ислам аалымдарынын улууларынан болгон Абдуллах бин Мубарек кой жайып
        жүргөн жаш баланы көрөт. Ага боору ооруйт. "Бечара бала!.. Кичине болуп
        туруп чабандык кылып жүрөт. Чоңойгон кезде Аллаху тааланын марифатына
        кантип ээ болот?” – деп ойлонот. "Барып балага Аллаху тааланы таанытууда
        бир маселе үйрөтөйүн”, - деп, баланын жанына келет. Экөөнүн ортосунда
        мындайча сөз жүрөт: - Балам, Аллаху тааланы билесиңби? - Кожоюнун ким
        билбесин!.. - Аллаху тааланы эмне аркылуу билдиң? - Мобул койлор
        аркылуу. - Бул койлор менен Аны кантип билдиң? - Бул бир канча кой
        чабансыз ишке жарабайт. Буларга сүт, чөп берип бага турчу бир коргоочу
        керек. Карышкырдан жана башка коркунучтардан коргойт. Бул ааламдагы
        бардык нерсе, адамдар жана жин, куш-жаныбарлар бардык нерсе Жаратуучусуз
        боло алышпайт. Бул койлор аркылуу Аллаху тааланы ушинтип билдим. -
        Аллаху тааланы кандай деп билесиң? - Эч нерсеге окшобогон деп билем. -
        Мындай экендигин кантип билдиң? - Дагы эле ушул койлордон. - Аның
        кандай? - Мен чабанмын. Алардын коргоочусумун. Алар менин көзөмөлүмдө.
        Алар менин эмне ойлоп жаткандыгымды, эмне кыла тургандыгымды билишпейт.
        Аларга дыкат менен карайм. Алар мага окшобойт, мен да аларга окшобойм.
        Бул жерде бир чабан койлоруна окшобосо, Аллаху тааланын дагы жараткан
        кулдарына окшобой тургандыгын түшүндүм: "Анын окшошу жок. Ал бардык
        нерсени угат жана көрөт.” - Жакшы айтасың. Илимден бир нерсе үйрөндүңбү?
        - Мен бул талаа-чөлдө кандай илим үйрөнмөк элем? - Макул, башка
        эмнелерди билесиң? - Үч илим билем. Көңүл илими, тил илими жана дене
        илими. - Алар кайсылар? - Мага калб (көңүл) берди. Өзүн тааный турчу
        жана сүйө турчу жер кылды. Бул көңүл менен Аны сезем. Анын сүйгөндөрүнө
        көңүлүмөн орун берем. Сүйбөгөндөрүнө орун бербейм жана мындайлардан алыс
        болом. Бул көңүл илими. Мага тил берди. Тилди зикир кылуу, Анын атын
        айта турган жер кылды. Муну менен Аны эстеп атын айтууну, Ал тууралуу
        болбогон сөздөн аны коргоону, мындай сөздөн алыс болууну каалады. Тил
        илими ушул. Мага дене берди. Аны менен Ага кызмат болгон бардык нерсени
        кылам. Кызмат болбогон нерсени болсо денемен алыстатам. Бул дене илими.
        - Машаллах, балам. Мага айта турчу сөзүн барбы? - Эй, мырза! Аалым
        экендигиң жүзүңөн белгилүү болуп турат. Эгер илимди Аллах ыраазылыгы
        үчүн үйрөнгөн болсоң адамдардан үмүт өтүүнү токтот! Жок, эгер дүнүйө
        үчүн үйрөнгөн болсоң Жаннатты каалоону көңүлүңөн чыгар.
      </StyledTypography>
    </Container>
  );
};

export default Jaratkandybil;

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
