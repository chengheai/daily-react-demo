export const waitTime = (time = 1000) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};
export const generateRange = length => {
  return new Array(length).fill(0).map((_, index) => index + 1);
};
