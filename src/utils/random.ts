export const getRandomIntInclusive = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const res = Math.floor(Math.random() * (max - min + 1)) + min;

  if (res > max || res < min) {
    console.log(max, min, res);
  }

  return res;
};
