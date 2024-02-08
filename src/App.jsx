import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { toast } from 'react-toastify';
import Footer from './components/Footer';
import { MyRoutes } from './route/Routes';
import Home from './components/Home';
import LoginForm from './layout/LoginForm';
import { actionsAuth, selectorAuth } from './redux/slices/auth';
import Header from './layout/Header';

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

  return (
    <>
      <Router>
        <Header />
        {/* <LoginForm /> */}
        <Routes>
          <Route path="/" element={<LoginForm />} />

          {isLoggedIn ? (
            <>
              <Route path="/home" element={<Home />} />
              {MyRoutes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </>
          ) : null}
        </Routes>
      </Router>

      <Footer />
    </>
  );
}

export default App;
