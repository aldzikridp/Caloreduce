const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  await server.register(require('@hapi/vision')); // eslint-disable-line

  server.views({
    engines: {
      html: require('handlebars'), // eslint-disable-line
    },
    relativeTo: __dirname,
    path: 'views',
  });

  server.route(routes);

  await server.start();
  console.log(`Server running on ${server.info.port}`);
};

init();
