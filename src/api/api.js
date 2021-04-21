export const BASE_URL = 'https://mate-api.herokuapp.com';

export const request = async(url, options) => {
  const response = await fetch(`${BASE_URL}${url}`, options);

  if (!response.ok) {
    throw new Error(`Failed to load data ${url}`);
  }

  const body = await response.json();

  return body.data || body;
};

export const getTodos = () => (
  request('/todos')
    .then(todos => todos.filter(todo => todo.title).slice(0, 5))
);

export const saveUser = url => (request(url, {
  method: 'POST',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  body: JSON.stringify({
    name: 'Anastasiia',
    username: 'anastasiia',
    email: 'al@example.com',
    phone: 1234567890,
  }),
})
);
