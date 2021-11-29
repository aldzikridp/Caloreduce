const foods = require('../data');

const getNearestVal = (foodsToCompare, calorie) => {
  let currentFood = foodsToCompare[0];

  for (let index = 1; index < foodsToCompare.length; index += 1) {
    const aDiff = Math.abs(currentFood.kalori - calorie);
    const bDiff = Math.abs(foodsToCompare[index].kalori - calorie);

    if (aDiff === bDiff) {
      if (foodsToCompare[index].kalori > currentFood.kalori) {
        currentFood = foodsToCompare[index];
      }
    } else if (bDiff < aDiff) {
      currentFood = foodsToCompare[index];
    }
  }

  return currentFood;
};

const getFoodList = (targetCal, foodsToCompare) => {
  let currentCal = 0;
  const recommendedFood = [];

  while (currentCal <= targetCal) {
    const requiredCalorieLeft = targetCal - currentCal;
    const getFood = getNearestVal(foodsToCompare, requiredCalorieLeft);
    currentCal += getFood.kalori;
    recommendedFood.push(getFood);
  }

  return recommendedFood;
};

const recommendFood = (calorie) => {
  const caloriePerKind = calorie / 4;

  const makananPokok = getFoodList(caloriePerKind, foods.pokok);
  const makananLauk = getFoodList(caloriePerKind, foods.lauk);
  const makananSayur = getFoodList(caloriePerKind, foods.sayur);
  const makananBuah = getFoodList(caloriePerKind, foods.buah);

  const foodResult = {
    makananPokok,
    makananLauk,
    makananSayur,
    makananBuah,
  };

  return foodResult;
};

module.exports = recommendFood;
