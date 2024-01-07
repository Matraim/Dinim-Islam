import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './layout/LoginForm';
import Quiz from './components/Quiz';
import AdminPanel from './components/AdminPanel';
import './style/App.css';
import './style/Responsive.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<LoginForm />} />
        <Route path="/App" element={<Quiz />} />
        <Route path="/Admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
