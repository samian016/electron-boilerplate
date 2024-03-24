/**
 * Prepares data for a request.
 *
 * @param {object} found - An object containing request data.
 * @param {string} which - The type of data to prepare. Possible values are 'params', 'queries', and 'body'.
 *                        Default is 'params'.
 * @return {object} An object containing the prepared request data.
 *
 * @throws {Error} If a required parameter is missing.
 */
export default function preparePreload(found, which = 'params') {
    const keys = Object.keys(found[which] || {});
    if (keys.length) {
        keys.some(k => {
            if (!found[which][k]) throw new Error(`${found.suggestions[k] || ''}\n${found.suggestions.raw || ''}`)
        });
    };

    switch (which) {
        case 'params': {
            const values = Object.values(found.params);
            if (values.length) found.uri = `${found.uri}/${values.join('/')}`;
            return preparePreload(found, 'queries');
        }
        case 'queries': {
            const values = Object.values(found.queries);
            if (values.length) found.uri = `${found.uri}?${new URLSearchParams(found.queries)}`;
            return preparePreload(found, 'body');
        }
        case 'body': {
            if (found.formData) {
                let formBody = new FormData();
                Object.keys(found.body).forEach(k => formBody.append(k, found.body[k]));
                return found = { ...found, body: formBody }
            }
            return found;
        }
    }
};