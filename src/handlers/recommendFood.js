const foods = require('../data');

const getNearestVal = (foodsToCompare, calorie) => {
  let currentFood = foodsToCompare[0];
  let returnIndex;

  for (let index = 1; index < foodsToCompare.length; index += 1) {
    const aDiff = Math.abs(currentFood.kalori - calorie);
    const bDiff = Math.abs(foodsToCompare[index].kalori - calorie);

    if (aDiff === bDiff) {
      if (foodsToCompare[index].kalori > currentFood.kalori) {
        currentFood = foodsToCompare[index];
        returnIndex = index;
      }
    } else if (bDiff < aDiff) {
      currentFood = foodsToCompare[index];
      returnIndex = index;
    }
  }

  return { returnIndex, currentFood };
};

const getFoodList = (targetCal, foodsToCompare) => {
  let currentCal = 0;
  const recommendedFood = [];
  const foodList = foodsToCompare;

  while (currentCal <= targetCal) {
    const requiredCalorieLeft = targetCal - currentCal;
    const evaluateFood = getNearestVal(foodList, requiredCalorieLeft);
    const { returnIndex: index, currentFood: food } = evaluateFood;
    currentCal += food.kalori;
    recommendedFood.push(food);
    foodList.splice(index, 1);
  }

  return recommendedFood;
};

const recommendFood = (calorie) => {
  const caloriePerKind = calorie / 4;

  const makananPokok = getFoodList(caloriePerKind, foods.pokok);
  const makananLauk = getFoodList(caloriePerKind, foods.lauk);
  const makananSayur = getFoodList(caloriePerKind, foods.sayur);
  const makananBuah = getFoodList(caloriePerKind, foods.buah);

  const foodResult = makananPokok.concat(makananLauk, makananSayur, makananBuah);

  return foodResult;
};

module.exports = recommendFood;
