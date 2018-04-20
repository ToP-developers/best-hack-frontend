import fetch from 'isomorphic-fetch';

class Transport {
    constructor() {
        if (Transport.__instance) {
            return Transport.__instance;
        }

        this._headers = {};
        this._baseUrl = '';

        Transport.__instance = this;

        this.setUpHeaders();
    }

    get BaseUrl() {
        return this._baseUrl;
    }

    set BaseUrl(url) {
        this._baseUrl = url;
    }

    get(uri) {
        return this._sender(uri, 'GET');
    }

    post(uri, data) {
        return this._sender(uri, 'POST', JSON.stringify(data));
    }

    async _sender(uri, type, data) {
        const options = {
            method: type,
            body: data
        };

        return fetch(this._baseUrl + uri, this.setRequest(options))
            .then(response => {
                if (response.status >= 400) {
                    throw response;
                }

                return response.json();
            });
    }

    setRequest(options) {

        return {
            method: options.method,
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: options.body,
            credentials: 'include'
        };
    }

    getFetchRequest(options) {
        return this.setRequest(options);
    }

    setUpHeaders() {
        this._headers = new Headers();
        this._headers.append('Content-Type', 'application/json');
    }
}

const transport = new Transport();
transport.BaseUrl = 'https://best-hack.herokuapp.com/api';

export default transport;
