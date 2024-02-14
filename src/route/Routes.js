import MainLayout from '../layout/LoginForm';
import Quiz from '../components/Quiz';
import AdminPanel from '../components/AdminPanel';
import About from '../components/About';
import History from '../components/History';
import Home from '../components/Home';
import Namaz from '../isllamdynparzy/Namaz';
import Shahada from '../isllamdynparzy/Shahada';
import Orozo from '../isllamdynparzy/Orozo';
import Zeket from '../isllamdynparzy/Zeket';
import Ajylyk from '../isllamdynparzy/Ajylyk';
import MaksatAjy from '../ustazdar/MaksatAjy';
import ChubakAjy from '../ustazdar/ChubakAjy';
import Abdushukurajy from '../ustazdar/Abdushukurajy';
import ErmekAjy from '../ustazdar/ErmekAjy';
import Oku from '../components/Oku';
import Bagymdat from '../namazdar/Bagymdat';
import Beshim from '../namazdar/Beshim';
import Asr from '../namazdar/Asr';
import Sham from '../namazdar/Sham';
import Kuptan from '../namazdar/Kuptan';
import Jannat from '../namazdar/Jannat';
import IslamLegends from '../components/IslamLegends';
import Khadis from '../components/Khadis';
import Quran from '../components/Quran';
import Zikr from '../components/Zikr';
import NameAllah from '../components/NameAllah';
import Jaratkandybil from '../hikayalar/Jaratkandybil';
import Uzunomur from '../hikayalar/Uzunomur';
import Akyret from '../hikayalar/Akyret';
import BoshJurok from '../hikayalar/BoshJurok';
import ImamAzzam from '../hikayalar/ImamAzzam';
import BismillahKuchu from '../hikayalar/BismillahKuchu';
import AbuBakr from '../islam-history/AbuBakr';
import UmarIbnAlHattab from '../islam-history/UmarIbnHattab';
import UsmanIbnAffan from '../islam-history/UsmanIbnAffan';
import AliIbnAbuTalib from '../islam-history/AliIbnAbuTalib';
import AbdurrakhamibnAuf from '../islam-history/AbdurrakhmanibnAuf';
import AbuUbaidah from '../islam-history/AbuUbaidah';
import SaadIbnAbuVakkas from '../islam-history/AbuVakkass';
import SaidIbnZaid from '../islam-history/SaidIbnZaid';
import TalhaIbnUbaidullah from '../islam-history/TalhaIbnUbaudyllah';
import ZubairIbnAvvam from '../islam-history/ZubairIbnAvvam';
import MishariRashid from '../hafizder/MishariRashid';
import Istihara from '../namazdar/Istihara';
import JumaNamaz from '../namazdar/JumaNamaz';
import JanazaNamaz from '../namazdar/JanazaNamaz';
import KajetNamaz from '../namazdar/KajetNamaz';
import KurmanaitNamaz from '../namazdar/KurmanaitNamaz';
import NafilNamaz from '../namazdar/NafilNamaz';
import TahadjudNamaz from '../namazdar/TahadjudNamaz';
import TooboNamaz from '../namazdar/TooboNamaz';
import VitirVajibNamazy from '../namazdar/VitirVajibNamazy';
import IstiskaNamazy from '../namazdar/IstiskaNamazy';
import KunAiNamazy from '../namazdar/KunAiNamazy';
import MechitNamazy from '../namazdar/MechitNamazy';

const MyRoutes = [
  { path: '/', element: <MainLayout /> },
  { path: '/home', element: <Home /> },
  { path: '/quiz', element: <Quiz /> },
  { path: '/admin', element: <AdminPanel /> },
  { path: '/about', element: <About /> },
  { path: '/info', element: <History /> },
  { path: '/namaz', element: <Namaz /> },
  { path: '/намаз', element: <Namaz /> },
  { path: '/shahada', element: <Shahada /> },
  { path: '/orozo', element: <Orozo /> },
  { path: '/zeket', element: <Zeket /> },
  { path: '/ajylyk', element: <Ajylyk /> },
  { path: '/maksatajy', element: <MaksatAjy /> },
  { path: '/chubakAjy', element: <ChubakAjy /> },
  { path: '/abdushukurajy', element: <Abdushukurajy /> },
  { path: '/ermekajy', element: <ErmekAjy /> },
  { path: '/oku', element: <Oku /> },
  { path: '/bagymdat', element: <Bagymdat /> },
  { path: '/beshim', element: <Beshim /> },
  { path: '/asr', element: <Asr /> },
  { path: '/sham', element: <Sham /> },
  { path: '/kuptan', element: <Kuptan /> },
  { path: '/jannat', element: <Jannat /> },
  { path: '/islamlegends', element: <IslamLegends /> },
  { path: '/khadis', element: <Khadis /> },
  { path: '/quran', element: <Quran /> },
  { path: '/zikr', element: <Zikr /> },
  { path: '/nameallah', element: <NameAllah /> },
  { path: '/jaratkandybil', element: <Jaratkandybil /> },
  { path: '/uzunomur', element: <Uzunomur /> },
  { path: '/akyret', element: <Akyret /> },
  { path: '/boshjurok', element: <BoshJurok /> },
  { path: '/imamazzam', element: <ImamAzzam /> },
  { path: '/bismillahkuchu', element: <BismillahKuchu /> },
  { path: '/abubakr', element: <AbuBakr /> },
  { path: '/umaribnhattab', element: <UmarIbnAlHattab /> },
  { path: '/usmanibnaffan', element: <UsmanIbnAffan /> },
  { path: '/aliibnabutalib', element: <AliIbnAbuTalib /> },
  { path: '/abdurakhmmanibnauf', element: <AbdurrakhamibnAuf /> },
  { path: '/abuubaidah', element: <AbuUbaidah /> },
  { path: '/saadibnvakkas', element: <SaadIbnAbuVakkas /> },
  { path: '/saidibnzaid', element: <SaidIbnZaid /> },
  { path: '/talhaubnubaidullah', element: <TalhaIbnUbaidullah /> },
  { path: '/zubairibnavvam', element: <ZubairIbnAvvam /> },
  { path: '/misharirashid', element: <MishariRashid /> },
  { path: '/istihara', element: <Istihara /> },
  { path: '/jumanamaz', element: <JumaNamaz /> },
  { path: '/janazanamaz', element: <JanazaNamaz /> },
  { path: '/kajetnamaz', element: <KajetNamaz /> },
  { path: '/kurmanaitnamaz', element: <KurmanaitNamaz /> },
  { path: '/nafilnamaz', element: <NafilNamaz /> },
  { path: '/tahadjudnamaz', element: <TahadjudNamaz /> },
  { path: '/toobonamaz', element: <TooboNamaz /> },
  { path: '/vitirVajibnamazy', element: <VitirVajibNamazy /> },
  { path: '/istiskanamazy', element: <IstiskaNamazy /> },
  { path: '/kunainamazy', element: <KunAiNamazy /> },
  { path: '/mechitnamazy', element: <MechitNamazy /> },
];

export { MyRoutes };
