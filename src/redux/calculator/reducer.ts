import { calculatorActionsTypes } from './action-types';

// interface State {
//   result: number;
//   previousValue: number;
//   currentValue: string;
//   operation: string;
// }

const initialState: any = {
  result: 0,
  previousValue: '',
  currentValue: null,
  operation: null
};

function performOperation(operation: string, prevValue: number, currentValue: number) {
  switch (operation) {
    case calculatorActionsTypes.ADD: return prevValue + currentValue;
    case calculatorActionsTypes.SUBTRACT: return prevValue - currentValue;
    case calculatorActionsTypes.MULTIPLY: return prevValue * currentValue;
    case calculatorActionsTypes.DIVIDE: return prevValue / currentValue;
    default: return currentValue;
  }
}

export function calculatorReducer (state = initialState, action: any) {
    switch (action.type) {
      case calculatorActionsTypes.ADD:
      case calculatorActionsTypes.SUBTRACT:
      case calculatorActionsTypes.MULTIPLY:
      case calculatorActionsTypes.DIVIDE:
        return {
          ...state,
          previousValue: parseFloat(state.currentValue),
          currentValue: '',
          operation: action.type
        };
        
      case calculatorActionsTypes.SET_VALUE:
        return { ...state, currentValue: action.payload };
        
      case calculatorActionsTypes.CLEAR:
        return initialState;
        
      case calculatorActionsTypes.EQUALS:
        const result = performOperation(
          state.operation,
          state.previousValue,
          parseFloat(state.currentValue)
        );

        return {
          ...state,
          result,
          previousValue: null,
          currentValue: String(result),
          operation: null
        };
        
      default:
        return state;
    }
  };
  
  


  
  
  