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

    get(uri, timeout = 20000) {
        return this._sender(uri, 'GET', timeout);
    }

    post(uri, data, timeout = 20000) {
        return this._sender(uri, 'POST', timeout, JSON.stringify(data));
    }

    async _sender(uri, type, timeout, data) {
        const options = {
            method: type,
            body: data
        };

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error('Timeout'));
            }, timeout);
            fetch(this._baseUrl + uri, this.setRequest(options)).then(resolve, reject);
        });
    }

    setRequest(options) {
        return {
            method: options.method,
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: options.body
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
transport.BaseUrl = '/api';

export default transport;
