import React, { useState, useEffect } from 'react';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';
import questions from '../data/question.js';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import '../style/App.css';
import BackForwardButtons from './BackForwardButtons.jsx';

const confettiConfig = {
  angle: 1,
  spread: 360,
  startVelocity: 40,
  elementCount: 1,
  dragFriction: 0.12,
  duration: 3000,
  stagger: 1,
  recycle: false,
  colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
};

const Quiz = () => {
  const [questionsState, setQuestions] = useState(questions);
  const [showFinalResults, setShowFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [setShowAllAnswers] = useState(false); // Fixed variable name
  const [isAnswersVisible, setIsAnswersVisible] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false); // Fixed variable name
  const { width, height } = useWindowSize();

  useEffect(() => {
    if (score > 1) {
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
      }, 1000);
    }
  }, [score]);

  const optionClicked = (isCorrect, optionIndex) => {
    if (!isCorrect) {
      const updatedQuestions = [...questionsState];
      const updatedQuestion = { ...updatedQuestions[currentQuestion] };
      updatedQuestion.options = updatedQuestion.options.map(
        (option, index) => ({
          ...option,
          chosen: index === optionIndex,
        })
      );
      updatedQuestions[currentQuestion] = updatedQuestion;
      setQuestions(updatedQuestions);
    }

    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion < questionsState.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowFinalResults(true);
      toast.success('Жоопторду көрүү үчүн үч сызыкты басыңыз', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const restartGame = () => {
    setShowFinalResults(false);
    setScore(0);
    setCurrentQuestion(0);
    setShowAllAnswers(false);
    setIsAnswersVisible(false);
  };

  const toggleAnswersVisibility = () => {
    setIsAnswersVisible(!isAnswersVisible);
  };
  return (
    <div className="App">
      <BackForwardButtons />
      <h3>
        Кыргызча диний суроо жооптор<span style={{ color: 'red' }}>.</span>
      </h3>
      <h4>
        <span style={{ color: 'green' }}>رَبِّ زِدْنِي عِلْمًا </span> <br />
        <br />
        <span style={{ color: 'green' }}>Рoбби зидни ‘ильман </span>
        <br />
        Оо Роббим менин илимимди көбөйткүн
        <span style={{ color: 'red' }}>.</span>
        <br />
        <span style={{ fontSize: '10px', color: 'green' }}>Tоха:114</span>
      </h4>

      <div className="main-content">
        {showFinalResults ? (
          <div className={`final-results ${score > 6 ? 'celebration' : ''}`}>
            <button
              style={{
                display: 'flex',
              }}
              onClick={toggleAnswersVisibility}
            >
              {showConfetti && (
                <Confetti width={width} height={height} {...confettiConfig} />
              )}
              <MenuOpenIcon />
            </button>
            <h1>Сынактын жалпы жыйынтыгы</h1>
            <h3 className="custom-header">
              Сиз {questionsState.length} суроодон {score} суроого туура жооп
              бердиңиз - ({((score / questionsState.length) * 100).toFixed(0)}%)
            </h3>
            <div className={`smiley ${score > 6 ? 'happy' : 'sad'}`}>
              {score > 6 ? '🎊' : '😩'}
            </div>
            <div className="fireworks" />
            <Button onClick={restartGame} variant="contained" color="primary">
              <ArrowLeftIcon /> Кайрадан
            </Button>
          </div>
        ) : (
          <div className="question-card">
            <h2>{currentQuestion + 1} - суроонун туура жообун тандаңыз </h2>
            <br />
            <h3 className="question-text">
              {questionsState[currentQuestion].text}
            </h3>
            <ul>
              {questionsState[currentQuestion].options.map((option, index) => (
                <li
                  onClick={() => optionClicked(option.isCorrect, index)}
                  key={option.id}
                  className={`${
                    option.isCorrect
                      ? 'correct'
                      : option.chosen
                      ? 'incorrect'
                      : ''
                  }`}
                >
                  {option.text}
                </li>
              ))}
            </ul>
          </div>
        )}

        {isAnswersVisible && (
          <div className="all-answers">
            <h3>Суроо-жооптор</h3>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Суроолор</TableCell>
                    <TableCell>Туура жооп</TableCell>
                    <TableCell>Сиздин жооп</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {questionsState.map((question, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        {index + 1}. {question.text}
                      </TableCell>
                      <TableCell className="correct">
                        {question.options.find((opt) => opt.isCorrect).text}
                      </TableCell>
                      <TableCell
                        className={
                          question.options[0].isCorrect
                            ? 'correct'
                            : 'incorrect'
                        }
                      >
                        {question.options.find((opt) => opt.chosen).text}{' '}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Quiz;
