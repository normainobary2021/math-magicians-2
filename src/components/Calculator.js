import React, { useState } from 'react';
import calculate from './logic/calculate';
import './calculator.css';

const Calculator = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);
  const [err, setErr] = useState(null);
  const handleClick = (e) => {
    const result = calculate({
      total, next, operation, err,
    }, e.target.value);
    setTotal(() => result.total);
    setNext(() => result.next);
    setOperation(() => result.operation);
    setErr(() => result.err);
  };
  return (
    <div className="container">
      <div className="calculator">
        <div className="display">
          <span>
            {' '}
            {next || operation || total || err || 0}
            {' '}
          </span>
        </div>
        <div className="keypad">
          <div className="input-keys">
            <div className="functions">
              <button type="button" onClick={handleClick} className="key clear" value="AC">
                AC
              </button>
              <button type="button" onClick={handleClick} className="key changeSign" value="+/-">
                +/-
              </button>
              <button type="button" onClick={handleClick} className="key percent" value="%">
                %
              </button>
            </div>
            <div className="numbers">
              <button type="button" onClick={handleClick} className="key zero" value={0}> 0</button>
              <button
                type="button"
                onClick={handleClick}
                className="key dot"
                value="."
              >
                .
              </button>
              <button
                type="button"
                onClick={handleClick}
                className="key one"
                value={1}
              >
                1
              </button>
              <button
                type="button"
                onClick={handleClick}
                className="key two"
                value={2}
              >
                2
              </button>
              <button
                type="button"
                onClick={handleClick}
                className="key three"
                value={3}
              >
                3
              </button>
              <button
                type="button"
                onClick={handleClick}
                className="key four"
                value={4}
              >
                4
              </button>
              <button
                type="button"
                onClick={handleClick}
                className="key five"
                value={5}
              >
                5
              </button>
              <button
                type="button"
                onClick={handleClick}
                className="key six"
                value={6}
              >
                6
              </button>
              <button
                type="button"
                onClick={handleClick}
                className="key seven"
                value={7}
              >
                7
              </button>
              <button
                type="button"
                onClick={handleClick}
                className="key eight"
                value={8}
              >
                8
              </button>
              <button
                type="button"
                onClick={handleClick}
                className="key nine"
                value={9}
              >
                9
              </button>
            </div>
          </div>
          <div className="operators">
            <button type="button" onClick={handleClick} className="key divide" value="÷">&#247; </button>
            <button type="button" onClick={handleClick} className="key multiply" value="x">&#10761; </button>
            <button type="button" onClick={handleClick} className="key subtract" value="-">-</button>
            <button type="button" onClick={handleClick} className="key add" value="+">+ </button>
            <button type="button" onClick={handleClick} className="key equalTo" value="="> = </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
