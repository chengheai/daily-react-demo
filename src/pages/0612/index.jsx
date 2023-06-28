import React from 'react';

import Hoc1 from './hoc1';
import middleware from './middleware';

middleware();
// function Index() {
//   return <h1>0612</h1>;
// }
// export default Hoc1()(Index);

class Index extends React.Component {
  componentDidMount() {
    console.log(this.props.message);
  }
  render() {
    return (
      <div className="common-wrap">
        <h1>0612</h1>
      </div>
    );
  }
}
export default Hoc1(Index);
