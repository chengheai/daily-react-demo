import React from 'react';

import Buttons from './button';
import Title from './title';
import Theme from './theme';
export default () => {
  return (
    <React.Fragment>
      <Theme>
        <Title />
        <Buttons />
      </Theme>
    </React.Fragment>
  );
};
