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
  { title: 'Шахада', path: '/shahada', text: 'Краткое описание Шахады' },
  { title: 'Намаз', path: '/namaz', text: 'Краткое описание Намаза' },
  { title: 'Орозо', path: '/orozo', text: 'Краткое описание Орозо' },
  { title: 'Зекет', path: '/zeket', text: 'Краткое описание Зекета' },
  { title: 'Ажылык', path: '/ajylyk', text: 'Краткое описание Ажылыка' },
];

export { listData, images };
