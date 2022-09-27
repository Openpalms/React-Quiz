import { useState } from 'react';
import './index.scss';

const questions = [
  // {
  //   title: 'React - это ... ?',
  //   variants: ['библиотека', 'фреймворк', 'приложение'],
  //   correct: 0,
  // },
  // {
  //   title: 'Компонент - это ... ',
  //   variants: [
  //     'приложение',
  //     'часть приложения или страницы',
  //     'то, что я не знаю что такое',
  //   ],
  //   correct: 1,
  // },
  // {
  //   title: 'Что такое JSX?',
  //   variants: [
  //     'Это простой HTML',
  //     'Это функция',
  //     'Это тот же HTML, но с возможностью выполнять JS-код',
  //   ],
  //   correct: 2,
  // },
  {
    title: 'Глеб Григорьев любит Катю Сергееву?',
    variants: ['Да', 'Нет'],
    correct: 0,
  },
  {
    title: 'Денис Ильин может сделать салют руками?',
    variants: ['Да', 'Нет'],
    correct: 0,
  },
  {
    title: 'Александр Володин любит Аню быкову?',
    variants: ['Да', 'Нет'],
    correct: 0,
  },
  {
    title: 'Данил Галочкин станет веб-разработчиком?',
    variants: ['Да', 'Нет'],
    correct: 0,
  },
];

function Result({ correct }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        Вы отгадали {correct} ответа из {questions.length}
      </h2>
      <a href="/">Попробовать снова</a>
    </div>
  );
}

function Game({ step, question, rightVariant }) {
  const percentage = Math.round((step / questions.length) * 100);
  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((item, i) => {
          return (
            <li onClick={() => rightVariant(i)} key={i}>
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = useState(0);
  const question = questions[step];
  const [correct, setCorrect] = useState(0);

  const rightVariant = (index) => {
    console.log(step, index);
    setStep(step + 1);

    if (index === question.correct) setCorrect(correct + 1);
  };
  return (
    <div className="App">
      {step !== questions.length ? (
        <Game step={step} question={question} rightVariant={rightVariant} />
      ) : (
        <Result correct={correct} />
      )}
      {/* <Result /> */}
    </div>
  );
}

export default App;
