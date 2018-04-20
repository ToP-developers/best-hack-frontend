export function URLParser(history) {
    const url = document.URL;
    const params = {};
    const parser = document.createElement('a');
    parser.href = url;

    const query = parser.search.substring(1);
    const vars = query.split('&');
    vars.forEach(variable => {
        const pair = variable.split('=');
        params[pair[0]] = decodeURIComponent(pair[1]);
    });

    history.replace(parser.pathname);
    return params;
}
