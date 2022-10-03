import React from 'react'
// Style
import './App.css';
// Components
import { TestQuation, GameOver } from './Components/index'

function App() {
  const [step, setStep] = React.useState(0);
  const [ result, setResult ] =React.useState(0)
  const quations = [
    {
      title: 'React - это ... ?',
      variants: ['библиотека', 'фреймворк', 'прилагательное'],
      correct: 0,
    },
    {
      title: 'Компонент - это ... ?',
      variants: ['приложение', 'часть приложения', 'торт'],
      correct: 1,
    },
    {
      title: 'Что такое useState ?',
      variants: ['Этофункция для хранения данных компонента', 'Это глобальный стейт', 'Нужен для остановки процесса'],
      correct: 0,
    },
  ];

  const progress = Math.round(((step + 1) / quations.length) * 100);
  const quation = quations[step];

  const func = (res) => {
    if(res === quation.correct)setResult(result + 1) 
    setStep(step+1)
  }

  return (
    <div className="App">
      <div className="container">
        {step < quations.length ? (
          <TestQuation quation={quation} func={func} progress={progress} />
        ) : (
          <GameOver quations={quations} result={result} />
        )}
      </div>
    </div>
  );
}

export default App;
