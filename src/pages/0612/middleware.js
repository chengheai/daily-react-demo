const middleware = [];
let f1 = async function(next) {
  console.log('1');
  next();
  console.log('2');
};
let f2 = async function(next) {
  console.log('3');
  next();
  console.log('4');
};
let f3 = async function(next) {
  console.log('5');
  console.log('6');
};
function use(fn) {
  middleware.push(fn);
}

use(f1);
use(f2);
use(f3);

export default function compose() {
  debugger;
  return dispatch(0);
  function dispatch(i) {
    let fn = middleware[i];
    if (!fn) return;
    return fn(dispatch.bind(null, i + 1));
  }
}
