const calculateCal = require('./handlers/calculateCal');
const recommendFood = require('./handlers/recommendFood');

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (request) => {
      const {
        height,
        weight,
        age,
        sex,
      } = request.query;

      const BMR = calculateCal({
        height,
        weight,
        age,
        sex,
      });

      return BMR;
    },
  },
  {
    method: 'GET',
    path: '/foods',
    handler: (request) => {
      const { calorie } = request.query;
      const foods = recommendFood(calorie);
      return foods;
    },
  },
];

module.exports = routes;
