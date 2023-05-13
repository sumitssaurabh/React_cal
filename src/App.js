import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleAddition = () => {
    if (validateInput(num1) && validateInput(num2)) {
      const sum = parseFloat(num1) + parseFloat(num2);
      setResult(`${sum}`);
      setError(null);
    } else {
      setResult(null);
    }
  };

  const handleSubtraction = () => {
    if (validateInput(num1) && validateInput(num2)) {
      const diff = parseFloat(num1) - parseFloat(num2);
      setResult(`${diff}`);
      setError(null);
    } else {
      setResult(null);
    }
  };

  const handleMultiplication = () => {
    if (validateInput(num1) && validateInput(num2)) {
      const product = parseFloat(num1) * parseFloat(num2);
      setResult(`${product}`);
      setError(null);
    } else {
      setResult(null);
    }
  };

  const handleDivision = () => {
    if (validateInput(num1) && validateInput(num2)) {
      if (parseFloat(num2) === 0) {
        setError('Division by zero error');
        setResult(null);
      } else {
        const quotient = parseFloat(num1) / parseFloat(num2);
        setResult(`${quotient}`);
        setError(null);
      }
    } else {
      setResult(null);
    }
  };

  const validateInput = (input) => {
    if (input === '' && input === num1) {
      setError('Num1 cannot be empty');
      return false;
    }
    if (input === '' && input === num2) {
      setError('Num2 cannot be empty');
      return false;
    }
    if (!/^-?\d*\.?\d+$/.test(input) && input === num1) {
      setError('Invalid Num1 entered');
      return false;
    }
    if (!/^-?\d*\.?\d+$/.test(input) && input === num2) {
      setError('Invalid Num2 entered');
      return false;
    }
    return true;
  };

  return (
    <div className="app">

      <h1> React Calculator </h1>

      <input type="text" placeholder="Num1" value={num1} onChange={(e) => setNum1(e.target.value)} />
      <br />
      <input type="text" placeholder="Num2" value={num2} onChange={(e) => setNum2(e.target.value)} />
      <br />
      <button onClick={handleAddition}>+</button>
      <button onClick={handleSubtraction}>-</button>
      <button onClick={handleMultiplication}>*</button>
      <button onClick={handleDivision}>/</button>
      <br />
      {error && <div style={{ color: 'red' }}>{`Error: ${error}`}</div>}
      {result && (
        <div>
          <div style={{color: 'white'}}>{`Result = ${result}`}</div>
          <div style={{ color: 'green' }}>Sucess : Your result is shown above!</div>
        </div>
      )}
    </div>
  );
}

export default App;