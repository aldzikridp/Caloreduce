const calculateCal = require('./handlers/calculateCal');

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
];

module.exports = routes;
