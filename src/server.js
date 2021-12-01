const Hapi = require('@hapi/hapi');
const Vision = require('@hapi/vision');
const Inert = require('@hapi/inert');
const handlebars = require('handlebars');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  await server.register([Vision, Inert]);

  server.views({
    engines: {
      html: handlebars,
    },
    relativeTo: __dirname,
    path: 'views',
  });

  server.route(routes);

  await server.start();
  console.log(`Server running on ${server.info.port}`);
};

init();
