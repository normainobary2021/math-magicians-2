import React from 'react';
import './calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="calculator">
          <div className="display">
            <span> 0 </span>
          </div>
          <div className="keypad">
            <div className="input-keys">
              <div className="functions">
                <button type="button" className="key clear">
                  AC
                </button>
                <button type="button" className="key changeSign">
                  +/-
                </button>
                <button type="button" className="key percent">
                  %
                </button>
              </div>
              <div className="numbers">
                <button
                  type="button"
                  className="key zero"
                  value={0}
                >
                  0
                </button>
                <button
                  type="button"
                  className="key dot"
                  value="."
                >
                  .
                </button>
                <button
                  type="button"
                  className="key one"
                  value={1}
                >
                  1
                </button>
                <button
                  type="button"
                  className="key two"
                  value={2}
                >
                  2
                </button>
                <button
                  type="button"
                  className="key three"
                  value={3}
                >
                  3
                </button>
                <button
                  type="button"
                  className="key four"
                  value={4}
                >
                  4
                </button>
                <button
                  type="button"
                  className="key five"
                  value={5}
                >
                  5
                </button>
                <button
                  type="button"
                  className="key six"
                  value={6}
                >
                  6
                </button>
                <button
                  type="button"
                  className="key seven"
                  value={7}
                >
                  7
                </button>
                <button
                  type="button"
                  className="key eight"
                  value={8}
                >
                  8
                </button>
                <button
                  type="button"
                  className="key nine"
                  value={9}
                >
                  9
                </button>
              </div>
            </div>
            <div className="operators">
              <button
                type="button"
                className="key divide"
              >
                /
              </button>
              <button
                type="button"
                className="key multiply"
              >
                *
              </button>
              <button
                type="button"
                className="key subtract"
              >
                -
              </button>
              <button
                type="button"
                className="key add"
              >
                +
              </button>
              <button type="button" className="key equalTo">
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
