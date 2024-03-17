import { TestPlugin } from './test/plugin';

const defaultOptions = {
    prefix: 'v1',
}

const routes = [
    (new TestPlugin).getPluginRegistrationData(defaultOptions),
]

export default routes;
