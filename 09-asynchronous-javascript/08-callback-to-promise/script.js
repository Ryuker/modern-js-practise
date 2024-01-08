// Callbacks

// function toggle(e) {
//   e.target.classList.toggle('danger');
// }

// document.querySelector('button').addEventListener('click', toggle);

// Own Example of a callback
// - callbacks aren't always asynchronous !

const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'},
];

console.log(posts);

function createPost(post, cb) {
  // mimic fetching is from a server (network request which takes time)
  setTimeout(() => { 
    posts.push(post);
    cb();
  }, 2000);
}

function getPosts() {
  // mimic fetching is from a server (network request which takes time)
  setTimeout(() => addPostsToDOM(), 1000);
}

function addPostsToDOM() {
  posts.forEach(post => {
    const div = document.createElement('div');
    div.innerHTML = `<strong>${post.title}</strong> <p>${post.body}</p>`;
    document.querySelector('#posts').appendChild(div);
  });
};

createPost({title: 'Post Three', body: 'This is post three'}, getPosts);







