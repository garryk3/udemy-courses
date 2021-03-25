(async function namespace() {
    const GQURL = 'http://localhost:8000';

    const fetchGql = () => fetch(GQURL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            query: `
                query {
                    greetings
                }
            `
        })
    });

    const response = await fetchGql();
    const {data} = await response.json();

    document.querySelector('h1').innerHTML = JSON.stringify(data, 0, 2);
})();