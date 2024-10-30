import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import { evaluate } from 'mathjs';

function App() {
  const [result, setResult] = useState(0);
  const [isResult, setIsResult] = useState(false); // Bandera para indicar si se mostró un resultado

  // Función 'clear' memoizada con useCallback
  const clear = useCallback(() => {
    setResult(0);
    setIsResult(false);
  }, [setResult, setIsResult]);

  // Función 'backspace' memoizada con useCallback
  const backspace = useCallback(() => {
    if (isResult) {
      setResult(0);
      setIsResult(false);
    } else {
      setResult((prev) => prev.slice(0, -1));
    }
  }, [isResult, setResult, setIsResult]);

  // Función 'calculate' memoizada con useCallback
  const calculate = useCallback(() => {
    try {
      let expression = result.replace(/×/g, '*').replace(/÷/g, '/');

      // Verificar si la expresión termina con un operador
      if (/[+\-*/]$/.test(expression)) {
        const lastChar = expression.slice(-1);
        switch (lastChar) {
          case '+':
          case '-':
            expression += '0';
            break;
          case '*':
          case '/':
            expression += '1';
            break;
          default:
            expression += '0'; // Por si acaso
        }
      }

      // Verificar división por cero
      if (/\/0(?!\d)/.test(expression)) {
        throw new Error("División por cero");
      }

      const evaluatedResult = evaluate(expression).toString();
      setResult(evaluatedResult);
      setIsResult(true);
    } catch (err) {
      setResult("Error");
      setIsResult(true);
    }
  }, [result, setResult, setIsResult]);

  const handleClick = (e) => {
    const value = e.target.name;

    if (isResult) {
      if ((value >= '0' && value <= '9') || value === '.') {
        setResult(value);
        setIsResult(false);
      } else {
        setResult(result + value);
        setIsResult(false);
      }
    } else {
      setResult(result !== 0 ? result + value : value);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const { key } = e;

      if ((key >= '0' && key <= '9') || key === '.') {
        if (isResult) {
          setResult(key);
          setIsResult(false);
        } else {
          setResult((prev) => prev !== 0 ? prev + key : key);
        }
      } else if (['+', '-', '*', '/'].includes(key)) {
        setResult((prev) => prev !== 0 ? prev + key : key);
        setIsResult(false);
      } else if (key === 'Enter' || key === '=') {
        e.preventDefault();
        calculate();
      } else if (key === 'Backspace') {
        backspace();
      } else if (key === 'Escape') {
        clear();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isResult, calculate, backspace, clear]);

  return (
    <div className="calculator">
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" value={result} readOnly />
      </form>

      <div className="keypad">
        <button onClick={clear} className="red">Limpiar</button>
        <button onClick={backspace} className="red">C</button>
        <button name="÷" onClick={handleClick}>&divide;</button>
        <button name="×" onClick={handleClick}>&times;</button>

        <button name="7" onClick={handleClick}>7</button>
        <button name="8" onClick={handleClick}>8</button>
        <button name="9" onClick={handleClick}>9</button>
        <button name="-" onClick={handleClick}>&ndash;</button>

        <button name="4" onClick={handleClick}>4</button>
        <button name="5" onClick={handleClick}>5</button>
        <button name="6" onClick={handleClick}>6</button>
        <button name="+" onClick={handleClick}>+</button>

        <button name="1" onClick={handleClick}>1</button>
        <button name="2" onClick={handleClick}>2</button>
        <button name="3" onClick={handleClick}>3</button>
        <button onClick={calculate} className="green equal">=</button>

        <button name="0" onClick={handleClick} className="zero">0</button>
        <button name="." onClick={handleClick}>.</button>
      </div>
    </div>
  );
}

export default App;
