import fastifyStatic from '@fastify/static';
import path from 'path';

const routes = [
  {
    plugin: fastifyStatic,
    opts: {
      root: path.join(__dirname, '/resources'),
      prefix: '/resources/',
    },
    routeMeta: { path: '' },
  }
];

export default routes;
