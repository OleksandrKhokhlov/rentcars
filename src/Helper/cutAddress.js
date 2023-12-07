export const cutAddres = string => {
  let newString = string.split(',');
  newString.shift();

  return newString.join(' |');
};
