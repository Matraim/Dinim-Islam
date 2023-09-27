import { useState } from 'react';
import './App.css';
alert('Attention no mobile version');

function App() {
  const [showFinalResults, setShowFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      text: ' В какой стране больше всего олимпийских золотых медалей по плаванию?',
      options: [
        { id: 0, text: 'Китай', isCorrect: false },
        { id: 1, text: 'KGZ', isCorrect: false },
        { id: 2, text: 'Австралия', isCorrect: false },
        { id: 3, text: 'США', isCorrect: true },
      ],
    },
    {
      text: 'Сколько игроков в бейсбольной команде?',
      options: [
        { id: 0, text: '7', isCorrect: false },
        { id: 1, text: '6', isCorrect: false },
        { id: 2, text: '9', isCorrect: true },
        { id: 3, text: '8', isCorrect: false },
      ],
    },
    {
      text: 'Где находится самый большой боулинг-центр?',
      options: [
        { id: 0, text: 'Япония', isCorrect: true },
        { id: 1, text: 'US', isCorrect: false },
        { id: 2, text: 'Финляндия', isCorrect: false },
        { id: 3, text: 'Сингапур', isCorrect: false },
      ],
    },
    {
      text: 'Какая страна выиграла ЧМ-2018?',
      options: [
        { id: 0, text: 'Франция', isCorrect: true },
        { id: 1, text: 'Германия', isCorrect: false },
        { id: 2, text: 'Америка', isCorrect: false },
        { id: 3, text: 'Россия', isCorrect: false },
      ],
    },
    {
      text: 'Какой вид спорта считается «королем спорта»?',
      options: [
        { id: 0, text: 'Хоккей', isCorrect: false },
        { id: 1, text: 'Футбол', isCorrect: true },
        { id: 2, text: 'Американский Футбол', isCorrect: false },
        { id: 3, text: 'Тетрис', isCorrect: false },
      ],
    },
    {
      text: 'Какое настоящее имя Мухаммеда Али?',
      options: [
        { id: 0, text: 'Чикаго Буллз', isCorrect: false },
        { id: 1, text: 'Кассиус Клей', isCorrect: true },
        { id: 2, text: 'Келеб Дрессел', isCorrect: true },
        { id: 3, text: 'Майкл Фелпс', isCorrect: false },
      ],
    },
    {
      text: 'Сколько игроков в команде по мини-футболу?',
      options: [
        { id: 0, text: '5', isCorrect: true },
        { id: 1, text: '6', isCorrect: false },
        { id: 2, text: '7', isCorrect: false },
        { id: 3, text: '8', isCorrect: false },
      ],
    },
    {
      text: 'Каким из перечисленных видов единоборств не занимался Брюс Ли?',
      options: [
        { id: 0, text: 'Ограждение', isCorrect: false },
        { id: 1, text: 'Джит Кун До', isCorrect: false },
        { id: 2, text: 'Ушу', isCorrect: true },
        { id: 3, text: 'бокс', isCorrect: false },
      ],
    },
    {
      text: 'Откуда взялся термин «бильярд»?',
      options: [
        { id: 0, text: 'Франция', isCorrect: true },
        { id: 1, text: 'Бельгия', isCorrect: false },
        { id: 2, text: 'Венгрия', isCorrect: false },
        { id: 3, text: 'Италия', isCorrect: false },
      ],
    },
    {
      text: ' Кто был первым британским игроком, выигравшим чемпионские титулы в четырех странах?',
      options: [
        { id: 0, text: 'Тур де Франс', isCorrect: false },
        { id: 1, text: 'Ролан Гаррос.', isCorrect: false },
        { id: 2, text: 'Дэвид Бекхэм.', isCorrect: true },
        { id: 3, text: 'Лакросс.', isCorrect: false },
      ],
    },
    {
      text: 'Какая часть тела в футболе не может касаться мяча?',
      options: [
        { id: 0, text: 'Ноги', isCorrect: false },
        { id: 1, text: 'Руки', isCorrect: true },
        { id: 2, text: 'Голова', isCorrect: false },
        { id: 3, text: 'Плечо', isCorrect: false },
      ],
    },
    {
      text: 'Сколько длился самый длинный розыгрыш очка в истории тенниса?',
      options: [
        { id: 0, text: '26 минут.', isCorrect: false },
        { id: 1, text: '27 минут.', isCorrect: false },
        { id: 2, text: '28 минут.', isCorrect: false },
        { id: 3, text: '29 минут.', isCorrect: true },
      ],
    },
  ];

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowFinalResults(true);
    }
  };

  const restartGame = () => {
    setShowFinalResults(false);
    setScore(0);
    setCurrentQuestion(0);
  };

  return (
    <div className="App">
      <h1>Проверь себя - Пройти онлайн тест</h1>

      <h2> на {score} вопросов ответили правильно</h2>

      {showFinalResults ? (
        <div className="final-results">
          <h1>Результаты тестирования</h1>
          <h2>
            Правильно ответили {score} из {questions.length} - (
            {((score / questions.length) * 100).toFixed(0)}%)
          </h2>
          <button onClick={restartGame}> Играть Заново</button>
        </div>
      ) : (
        <div className="question-card">
          <h2>
            ответьте на {currentQuestion + 1}-й вопрос переди еще{' '}
            {questions.length} вопросов
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          <ul>
            {questions[currentQuestion].options.map((option) => (
              <li
                onClick={() => optionClicked(option.isCorrect)}
                key={option.id}
              >
                {option.text}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="social-media">
        <a href="https://www.instagram.com/matraim.official/">
          <i class="bx bxl-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/matraim-nurmatov-760473285/">
          <i class="bx bxl-linkedin"></i>
        </a>
        <a href="https://t.me/MuhammedIbraghim">
          <i class="bx bxl-telegram"></i>
        </a>
        <a href="https://github.com/Matraim">
          <i class="bx bxl-github"></i>
        </a>
      </div>
    </div>
  );
}

export default App;
