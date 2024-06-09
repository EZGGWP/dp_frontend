import fastifyStatic from '@fastify/static';
import path from 'path';

console.log(path.join(__dirname, '../client/'))

const routes = [
  {
    plugin: fastifyStatic,
    opts: {
      root: path.join(__dirname, '../client/'),
      prefix: '/resources/',
    },
    routeMeta: { path: '' },
  }
];

export default routes;
