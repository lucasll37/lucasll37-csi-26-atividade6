
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, subtract, multiply, divide, clear, setValue, equal  } from '../redux/calculator/actions';

const buttonStyle = {
  margin: '5px',
  padding: '10px 15px',
  fontSize: '18px'
};

export function Calculator () {
  const dispatch = useDispatch();
  const { result, currentValue } = useSelector((state: any) => state.calculator);

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', textAlign: 'center', border: '1px solid black', padding: '20px', borderRadius: '10px' }}>
      <h1>Calculator</h1>
      <div style={{ marginBottom: '20px', fontSize: '24px' }}>{result}</div>
      <input
        type="number"
        value={currentValue}
        onChange={(e) => dispatch(setValue(e))}
        style={{ width: '80%', padding: '10px', fontSize: '18px', margin: '20px' }}
      />
      <div>
        <button onClick={() => dispatch(add())} style={buttonStyle}>+</button>
        <button onClick={() => dispatch(subtract())} style={buttonStyle}>-</button>
        <button onClick={() => dispatch(multiply())} style={buttonStyle}>*</button>
        <button onClick={() => dispatch(divide())} style={buttonStyle}>/</button>
        <button onClick={() => dispatch(clear())} style={buttonStyle}>C</button>
        <button onClick={() => dispatch(equal())} style={buttonStyle}>=</button>

      </div>
    </div>
  );
};

