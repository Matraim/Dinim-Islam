const questions = [
  {
    text: 'Бисмиллах сөзүнүн мааниси кандай ?',
    options: [
      { id: 0, text: 'Жараткан Аллах Тааланын аты менен', isCorrect: true },
      { id: 1, text: 'Кудай колдосо', isCorrect: false },
      { id: 2, text: 'Аллах Улук', isCorrect: false },
      { id: 3, text: 'Аллах Тааланын аты', isCorrect: false },
    ],
  },
  {
    text: 'Пайгамбарың ким ?',
    options: [
      {
        id: 0,
        text: 'Мухаммед Мустафа (саллаллаху алейхи вассаллам)',
        isCorrect: true,
      },
      { id: 1, text: 'Адам (алейхи салам)', isCorrect: false },
      {
        id: 2,
        text: 'Иса (алейхи салам)',
        isCorrect: false,
      },
      { id: 3, text: 'Ибрахим (алейхи салам)', isCorrect: false },
    ],
  },
  {
    text: 'Сүннөт канчага бөлүнөт ?',
    options: [
      { id: 0, text: 'Экиге', isCorrect: true },
      { id: 1, text: 'Үчкө', isCorrect: false },
      { id: 2, text: 'Төрткө', isCorrect: false },
      { id: 3, text: 'Бешке', isCorrect: false },
    ],
  },
  {
    text: 'Парз деген эмне ?',
    options: [
      { id: 0, text: 'Аллах Тааланын буйруктары', isCorrect: true },
      { id: 1, text: 'Аллах Таалага жаккан иш', isCorrect: false },
      { id: 2, text: 'Пайгамбарыбыз сүйгөн амал', isCorrect: false },
      { id: 3, text: 'Пайгамбарыбыз буюрган иш', isCorrect: false },
    ],
  },
  {
    text: 'Парз канчага бөлүнөт ?',
    options: [
      { id: 0, text: 'Экиге', isCorrect: true },
      { id: 1, text: 'Үчкө', isCorrect: false },
      { id: 2, text: 'Төрткө', isCorrect: false },
      { id: 3, text: 'Бешке', isCorrect: false },
    ],
  },
  {
    text: 'Важиб деген эмне ?',
    options: [
      {
        id: 0,
        text: 'Парз эмес бирок парзга жакын милдеттер',
        isCorrect: true,
      },
      {
        id: 1,
        text: 'Пайгамбарыбыз кээде жасаган амал',
        isCorrect: false,
      },
      { id: 2, text: 'Ажылыкта аткарылуучу амал', isCorrect: false },
      { id: 3, text: 'Важиб деген таваф учурунда аткарылат', isCorrect: false },
    ],
  },
  {
    text: 'Даараттын парзы канча?',
    options: [
      { id: 0, text: '4', isCorrect: true },
      { id: 1, text: '3', isCorrect: false },
      { id: 2, text: '2', isCorrect: false },
      { id: 3, text: '1', isCorrect: false },
    ],
  },
  {
    text: 'Жума намазы кимдерге парз ?',
    options: [
      {
        id: 0,
        text: 'Акыл-эси жайында балагатка жеткен сапарда эмес эркектерге',
        isCorrect: true,
      },
      { id: 1, text: 'Өзүн мусулман санаган адамга', isCorrect: false },
      { id: 2, text: 'Илим жолунда жүргөндөргө', isCorrect: false },
      {
        id: 3,
        text: 'Баарына',
        isCorrect: false,
      },
    ],
  },
  {
    text: 'Мункар-Нанкир деген кандай периштелер ?',
    options: [
      { id: 0, text: 'Кабырда сурак алуучу периштелер', isCorrect: true },
      { id: 1, text: 'Ырыскы таратуучу периштелер', isCorrect: false },
      { id: 2, text: 'Күнөөлөрдү жазуучу периштелер', isCorrect: false },
      { id: 3, text: 'Жакшы пикри салуучу периштелер', isCorrect: false },
    ],
  },
  {
    text: 'Пайгамбарыбыз Мухаммед саллаллаху алейхи вассаллам качан төрөлгөн ?',
    options: [
      { id: 0, text: '571-жылы.', isCorrect: true },
      { id: 1, text: '614-жылы', isCorrect: false },
      { id: 2, text: '561-жылы.', isCorrect: false },
      { id: 3, text: '570-жылы.', isCorrect: false },
    ],
  },
  {
    text: 'Пайгамбарыбыз менен Абу Бакр (р.a) жашынган үңкүр ?',
    options: [
      { id: 0, text: 'Саур', isCorrect: true },
      { id: 1, text: 'Бадр', isCorrect: false },
      { id: 2, text: 'Хира', isCorrect: false },
      { id: 3, text: 'Ухуд', isCorrect: false },
    ],
  },
  {
    text: 'Пайгамбарыбыздын алгачкы аялы ким болгон?',
    options: [
      { id: 0, text: 'Хадича Бинти Хуайлид', isCorrect: true },
      { id: 1, text: 'Умму Бинти Гулсум', isCorrect: false },
      { id: 2, text: 'Рукия Бинти Фатима', isCorrect: false },
      { id: 3, text: 'Зайнаб Бинти Рукия', isCorrect: false },
    ],
  },
];

export default questions;
