export const BASE_URL = 'https://mate-api.herokuapp.com';
export const BASE_USERID = 1182;

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
    .then(todos => todos.filter(todo => todo.userId === BASE_USERID))
);

export const saveTodo = (todo) => (request('/todos', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  body: JSON.stringify(todo),
  // body: JSON.stringify({
  //   "userId": 1182,
  //   "title": "Completed todo",
  //   "completed": true,
  // }),
  })
);

export const saveUser = () => (request('/users', {
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
}));

//id: 1182
