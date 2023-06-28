import React from 'react';
const Hoc = WrappedComponent => {
  return class control extends React.Component {
    render() {
      let props = {
        ...this.props,
        message: 'You are under control',
      };
      return <WrappedComponent {...props} />;
    }
  };
};

export default Hoc;
