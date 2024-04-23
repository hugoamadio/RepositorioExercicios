const api = axios.create({
    baseURL: 'https://6495dc81b08e17c91792c92d.mockapi.io/api',
    timeout: 3000,
    headers: {'X-Custom-Header': 'foobar'}
  });