import React, { useContext } from 'react';
import { ThemeContext } from './theme';
function Title() {
  const { color } = useContext(ThemeContext);
  return <h3 style={{ color }}>theme color =&gt; {color} </h3>;
}
export default Title;
