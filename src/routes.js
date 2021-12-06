const calculateCal = require('./handlers/calculateCal');
const recommendFood = require('./handlers/recommendFood');
const renderFoods = require('./handlers/renderFoods');

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
    handler: (request, h) => {
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

      const foods = recommendFood(BMR);
      const items = renderFoods(foods);

      return h.view('foods', { BMR, items });
    },
  },

  {
    method: 'GET',
    path: '/test',
    handler: {
      view: {
        template: 'foods',
      },
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
