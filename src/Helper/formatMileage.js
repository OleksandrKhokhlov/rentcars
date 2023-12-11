export const formatMileage = number => {
  const lastThreeDigits = number % 1000;
  const remainingDigits = Math.floor(number / 1000);
  return `${remainingDigits},${lastThreeDigits}`;
};
