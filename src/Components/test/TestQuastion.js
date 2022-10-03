import React from 'react';
import './test-quastion.css';

export const TestQuation = ({ quation, func, progress }) => {
    
  return (
    <div className="test-quation">
      <div className="progress">
        <div style={{ width: `${progress}%` }} className="gradient"></div>
      </div>
      <h1>{quation.title}</h1>
      <ul>
        {quation.variants.map((item, i) => (
          <li key={i} onClick={() => func(i)} className="progress-p">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
