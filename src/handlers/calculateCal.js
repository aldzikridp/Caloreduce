const calculateCal = ({
  height, // in cm
  weight, // in kg
  age, // in years
  sex, // 0 female, 1 male
}) => {
  const calWeight = 10 * weight;
  const calHeight = (6.25 * 100 * height) / 100;
  const calAge = age * 5;
  let BMR = calWeight + calHeight - calAge;
  if (parseInt(sex, 2) === 0) {
    BMR -= 161;
  } else {
    BMR += 5;
  }

  return BMR;
};
module.exports = calculateCal;
