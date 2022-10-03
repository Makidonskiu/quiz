import React from 'react';

export const GameOver = ({quations, result}) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h3>Результат ответов: {result} из {quations.length}</h3>
      <h1>Ты прошел</h1>
      <a href="/"><button>Начать заново!!!</button></a>
    </div>
  );
};
