
const SWAPI_ROOT = 'https://swapi.dev/api/';
const SWAPI_PEOPLE = 'people'

/**
 * send request Fetch
 * @param {string} url -for request
 * @returns {Promise} Promise with the result of the request
 */
export const getApiResource = async (url) => {
    try {
        const result = await fetch(url)
        if (!result.ok) {
            return false
        }
        return await result.json()
    } catch (error) {
        console.error("error ", error.message);
        return false;
    }
}

export const makeConcurrentRequest = async (url) => {
    const res = await Promise.all(url.map(res => {
        return fetch(res)
            .then(res => res.json())
    }))
    return res;
}

getApiResource(SWAPI_ROOT + SWAPI_PEOPLE)