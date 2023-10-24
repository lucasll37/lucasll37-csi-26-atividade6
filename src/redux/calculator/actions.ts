import { calculatorActionsTypes } from './action-types';

export function add() {
  return {
    type: calculatorActionsTypes.ADD
  }
};
  
export function subtract() {
  return {
    type: calculatorActionsTypes.SUBTRACT
  }
};

export function multiply() {
  return {
    type: calculatorActionsTypes.MULTIPLY
  }
};

export function divide() {
  return {
    type: calculatorActionsTypes.DIVIDE
  }
};

export function clear() {
  return {
    type: calculatorActionsTypes.CLEAR
  }
};

export function setValue(e: any) {
  return {
    type: calculatorActionsTypes.SET_VALUE,
    payload: e.target.value
  }
};

export function equal() {
  return {
    type: calculatorActionsTypes.EQUALS
  }
}