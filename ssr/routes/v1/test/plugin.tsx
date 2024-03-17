import { BasePlugin } from '../../_common/basePlugin';
import { FastifyReply, FastifyRequest } from 'fastify';
import { renderToString } from 'react-dom/server';
import App from '../../../../src/App';
import { fillHtmlStub } from '../../_common/utils';

export class TestPlugin extends BasePlugin {
    protected path = '/test';
    public routeHandler(request: FastifyRequest, response: FastifyReply): Promise<void> | void {
        const html = renderToString(<App />)
        response.type('text/html')
        response.send(fillHtmlStub(html, 'Bruh'));
    }
}
