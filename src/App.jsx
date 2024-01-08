import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './layout/LoginForm';
import Quiz from './components/Quiz';
import AdminPanel from './components/AdminPanel';
import './style/App.css';
import './style/Responsive.css';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { toast } from 'react-toastify';
import { actionsAuth, selectorAuth } from './redux/slices/auth';
import MainLayout from './layout';

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
        <Route path="*" element={<MainLayout />}>
          <Route index element={<Quiz />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
