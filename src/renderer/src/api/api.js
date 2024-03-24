import { apiData } from './apiData/apiData.js';
import preparePreload from './preparePayload.js';
import prepareReq from './prepareReq.js';

/**
 * A class for making API requests.
 * @class Api
 */
export default class Api {
    constructor(serverUrl) {
        this.req = prepareReq(serverUrl);
        this.preparePreload = preparePreload;
    }
    /**
     * Makes an API request.
     *
     * @param {object} options - An object containing request options.
     * @param {string} options.name - The name of the API to be called.
     * @param {object} [options.queries={}] - An object containing query string parameters for the request.
     * @param {object} [options.params={}] - An object containing URL path parameters for the request.
     * @param {object} [options.body={}] - An object containing the request body.
     * @return {object} The response from the API.
     *
     * @throws {Error} If the specified API couldn't be found.
     */
    entry(...args) {
        const { type = 'regular', name, queries = {}, params = {}, body = {} } = args[0];
        if (type === 'raw') return this.req(args);
        let found = apiData[name];
        if (!found) throw new Error(`Couldn\'t find your required api. name:${name}`);
        found = { ...found, queries: { ...found.queries, ...queries }, params: { ...found.params, ...params }, body: { ...found.body, ...body } };
        found = this.preparePreload(found, found.method === 'POST' ? 'body' : 'params');
        return this.req({ method: found.method, uri: found.uri, body: found.body });
    }
};