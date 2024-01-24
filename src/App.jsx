import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './layout/LoginForm';
import Quiz from './components/Quiz';
import AdminPanel from './components/AdminPanel';
import MainLayout from './layout';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { toast } from 'react-toastify';
import { actionsAuth, selectorAuth } from './redux/slices/auth';
import About from './components/About';
import History from './components/History';
import './style/App.css';
import './style/Responsive.css';
import AbuBakr from './islam-history/AbuBakr';
import UmarIbnAlHattab from './islam-history/UmarIbnHattab';
import UsmanIbnAffan from './islam-history/UsmanIbnAffan';
import AliIbnAbuTalib from './islam-history/AliIbnAbuTalib';
import AbdurrakhamibnAuf from './islam-history/AbdurrakhmanibnAuf';
import AbuUbaidah from './islam-history/AbuUbaidah';
import SaadIbnAbuVakkas from './islam-history/AbuVakkass';
import SaidIbnZaid from './islam-history/SaidIbnZaid';
import TalhaIbnUbaidullah from './islam-history/TalhaIbnUbaudyllah';
import ZubairIbnAvvam from './islam-history/ZubairIbnAvvam';
import Home from './components/Home';
import Namaz from './isllamdynparzy/Namaz';
import Shahada from './isllamdynparzy/Shahada';
import Orozo from './isllamdynparzy/Orozo';
import Zeket from './isllamdynparzy/Zeket';
import Ajylyk from './isllamdynparzy/Ajylyk';
import Footer from './components/Footer';
import MaksatAjy from './ustazdar/MaksatAjy';
import ChubakAjy from './ustazdar/ChubakAjy';
import Abdushukurajy from './ustazdar/Abdushukurajy';
import ErmekAjy from './ustazdar/ErmekAjy';
import Oku from './components/Oku';
import Bagymdat from './namazdar/Bagymdat';
import Beshim from './namazdar/Beshim';
import Asr from './namazdar/Asr';
import Sham from './namazdar/Sham';
import Kuptan from './namazdar/Kuptan';
import Jannat from './namazdar/Jannat';

function App() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(selectorAuth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          dispatch(actionsAuth.signIn(currentUser));
        } catch (error) {
          if (error instanceof Error) {
            toast.error(error.message);
          }
          console.log(error);
        }
      } else {
        toast.warning('You are not Authenticated');
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  if (!isLoggedIn) {
    return (
      <Router>
        <LoginForm />
      </Router>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index path="/quiz" element={<Quiz />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/About" element={<About />} />
          <Route path="/oku" element={<Oku />} />
          <Route path="/info" element={<History />} />
          <Route path="/home" element={<Home />} />
          <Route path="/намаз" element={<Namaz />} />
          <Route path="/шахада" element={<Shahada />} />
          <Route path="/орозо" element={<Orozo />} />
          <Route path="/зекет" element={<Zeket />} />
          <Route path="/ажылык" element={<Ajylyk />} />
          <Route path="/abubakr" element={<AbuBakr />} />
          <Route path="/adminPanel" element={<AdminPanel />} />
          <Route path="/umaribnhattab" element={<UmarIbnAlHattab />} />
          <Route path="/usmanibnaffan" element={<UsmanIbnAffan />}></Route>
          <Route path="/aliibnabutalib" element={<AliIbnAbuTalib />}></Route>
          <Route
            path="/abdurakhmmanibnauf"
            element={<AbdurrakhamibnAuf />}
          ></Route>
          <Route path="/abuubaidah" element={<AbuUbaidah />}></Route>
          <Route path="/saadibnvakkas" element={<SaadIbnAbuVakkas />}></Route>
          <Route path="/saidibnzaid" element={<SaidIbnZaid />}></Route>
          <Route path="/maksatajy" element={<MaksatAjy />}></Route>
          <Route path="/chubakAjy" element={<ChubakAjy />}></Route>
          <Route path="/abdushukurajy" element={<Abdushukurajy />}></Route>
          <Route path="/ermekajy" element={<ErmekAjy />}></Route>
          <Route path="/bagymdat" element={<Bagymdat />}></Route>
          <Route path="/beshim" element={<Beshim />}></Route>
          <Route path="/asr" element={<Asr />}></Route>
          <Route path="/sham" element={<Sham />}></Route>
          <Route path="/kuptan" element={<Kuptan />}></Route>
          <Route path="/jannat" element={<Jannat />}></Route>

          <Route
            path="/talhaubnubaidullah"
            element={<TalhaIbnUbaidullah />}
          ></Route>
          <Route path="/zubairibnavvam" element={<ZubairIbnAvvam />}></Route>
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
