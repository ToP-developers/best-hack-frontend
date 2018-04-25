export function URLParser() {
    const params = {};

    const query = document.location.search.substring(1);
    const vars = query.split('&');
    vars.forEach(variable => {
        const pair = variable.split('=');
        params[pair[0]] = decodeURIComponent(pair[1]);
    });

    return params;
}
