const calculateCal = require('./handlers/calculateCal');
const recommendFood = require('./handlers/recommendFood');

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: {
      view: {
        template: 'index',
        context: {
          message: 'view is running',
        },
      },
    },
  },
  {
    method: 'GET',
    path: '/calorie',
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
  {
    method: 'GET',
    path: '/public/css/style.css',
    handler: (request, h) => {
      const response = h.file('public/css/style.css');
      return response;
    },
  },
];

module.exports = routes;
