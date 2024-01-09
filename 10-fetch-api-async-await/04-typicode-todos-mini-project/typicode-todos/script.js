// Typicode Todos Mini Project
// api: https://jsonplaceholder.typicode.com/todos
const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const getToDos = () => {
  console.log('Get the Todos from the API');
  fetch(apiUrl + '?_limit=10')
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
  div.classList.add('todo');
  div.appendChild(document.createTextNode(todo.title));
  div.setAttribute('data-id', todo.id);

  // color completed todos done
  if (todo.completed) {
    div.classList.add('done');
  }

  document.getElementById('todo-list').appendChild(div);
}

const toggleCompleted = (e) => {
  if (e.target.classList.contains('todo')) {
    e.target.classList.toggle('done');

    updateTodo(e.target.dataset.id, e.target.classList.contains('done'));
  }
}

// PUT Request
const updateTodo = (id, completed) => {
  console.log('Updating todo', id, completed);
  
  fetch(`${apiUrl}/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ completed} ),
    headers: {
      'Content-Type': 'application/json',
    }
  })
};

// DELETE Request and Delete from DOM functionality in one
const deleteTodo = (e) => {
  if (e.target.classList.contains('todo')) {
    const id = e.target.dataset.id;
    fetch(`${apiUrl}/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(() => {
        e.target.remove();
      });
  }
};

const init = () => {
  document.addEventListener('DOMContentLoaded', getToDos);
  document.querySelector('#todo-form').addEventListener('submit', createTodo);
  document
    .querySelector('#todo-list').addEventListener('click', toggleCompleted);
  document
    .querySelector('#todo-list').addEventListener('dblclick', deleteTodo);
};

init();



