import { fastify } from 'fastify';
import routesResources from './routes/resources';
import routesV1 from './routes/v1';


const fastifyServer = fastify();

const routes = [
    ...routesResources,
    ...routesV1,
];

routes.forEach(({ plugin, opts, routeMeta }) => {
    fastifyServer.register(plugin, opts);
    console.log(`Registered route ${opts.prefix}${routeMeta.path} |`)
});

fastifyServer.listen({
    port: 8127,
}).then(r => console.log(r));

console.log('Renderer server listening on 8127');
