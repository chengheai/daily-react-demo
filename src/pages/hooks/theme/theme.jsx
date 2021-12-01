import React, { createContext, useReducer } from 'react';

export const ThemeContext = createContext({});

export default props => {
  console.log('props: ', props);
  const [color, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'CHANGE_COLOR':
        return action.color;
      default:
        return state;
    }
  }, 'blue');

  return (
    <ThemeContext.Provider value={{ color, dispatch }}>{props.children}</ThemeContext.Provider>
  );
};
