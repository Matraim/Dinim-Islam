import bannercard1 from '../assets/images/shahada.png';
import bannercard2 from '../assets/images/namaz.png';
import bannercard3 from '../assets/images/orozo.png';
import bannercard4 from '../assets/images/zeket.png';
import bannercard5 from '../assets/images/ajylyk.png';

const images = [
  bannercard1,
  bannercard2,
  bannercard3,
  bannercard4,
  bannercard5,
];

const listData = [
  { title: 'Шахада', path: '/shahada', text: 'Шахада келмесинин окуму' },
  { title: 'Намаз', path: '/namaz', text: 'Намаз бейиштин ачкычы' },
  { title: 'Орозо', path: '/orozo', text: 'Орозонун пазилети' },
  { title: 'Зекет', path: '/zeket', text: 'Зекета беруу исламда' },
  { title: 'Ажылык', path: '/ajylyk', text: 'Ажылыка деген эмне' },
];

export { listData, images };
