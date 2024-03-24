import axios from "axios";

export default function prepareReq(serverUrl) {
    /**
     * A dynamic fetch function that can be used to make HTTP requests.
     *  - @param {Object} options - An object containing the options for the fetch function.
     *  - @param {string} options.method - The HTTP method to use for the request (e.g. 'GET', 'POST', 'PUT', 'DELETE'). The default value is 'GET'.
     *  - @param {string} options.uri - The URI to make the request to.
     *  - @param {Object} options.body - An object containing the data to be sent with the request. The default value is an empty object.
     * 
     * @returns {Promise} A promise that resolves with the response data if the request is successful, or rejects with an error if the request fails.
     */

    return async ({ method = 'GET', uri, body = '{}' }) => {
        try {
            let url = uri.startsWith('https://') ? uri : `${serverUrl || 'http://localhost:4000/api'}/${uri}`;
            var payload = {
                method,
                withCredentials: true,
                url,
                data: body
            }
            return axios(payload);
        }
        catch (e) {
            throw new Error(e);
        }
    };
};