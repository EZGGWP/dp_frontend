import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { FastifyPluginOptions } from './types';

export abstract class BasePlugin {
    protected abstract path: string;
    constructor(private opts?: FastifyPluginOptions) {}

    public abstract routeHandler(request: FastifyRequest, response: FastifyReply): void;
    public plugin(fastify: FastifyInstance, opts: FastifyPluginOptions, done: (err?: any) => void) {
      fastify.get(this.path, this.routeHandler);
      done();
    }

    public getPluginRegistrationData(opts?: FastifyPluginOptions) {
      return { plugin: this.plugin.bind(this), opts: { ...this.opts, ...opts }, routeMeta: { path: this.path } };
    }
}
