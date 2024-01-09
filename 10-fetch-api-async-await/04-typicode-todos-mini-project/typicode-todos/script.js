// Typicode Todos Mini Project
// api: https://jsonplaceholder.typicode.com/todos
const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const getToDos = () => {
  console.log('Get the Todos from the API');
  fetch(apiUrl + '?_limit=5')
  .then(res => res.json())
  .then(data => data.forEach(todo => addTodoToDOM(todo)));
};

const createTodo = (e) => {
  e.preventDefault();

  const newTodo = {
    title: e.target.firstElementChild.value,
    completed: false
  };

  fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify(newTodo),
    headers: {
      'Content-Type': 'application/json',
      token: 'abc123',
    }
  })
    .then(res => res.json())
    .then(data => addTodoToDOM(data));
}


const addTodoToDOM = (todo) => {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(todo.title));
  div.setAttribute('data-id', todo.id);

  // color completed todos done
  if (todo.completed) {
    div.classList.add('done');
  }

  document.getElementById('todo-list').appendChild(div);
}

const init = () => {
  document.addEventListener('DOMContentLoaded', getToDos);
  document.querySelector('#todo-form').addEventListener('submit', createTodo);
};

init();



