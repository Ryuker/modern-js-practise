// Callbacks > promise

const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'},
];

console.log(posts);

function createPost(post) {
  // mimic fetching is from a server (network request which takes time)
  return new Promise((resolve, reject) => {
    setTimeout(() => { 
      let error = true;

      if(!error) {
        posts.push(post);
        resolve();
      } else {
        reject('Error: something went wrong');
      }

    }, 2000);
  })
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

function showError(error) {
  const h3 = document.createElement('h3');
  h3.innerHTML = `<strong>${error}</strong>`;
  document.querySelector('#posts').appendChild(h3);

}

// get getposts after we created the post
createPost({ title: 'Post Three', body: 'This is post three' })
  .then(getPosts)
  .catch(showError);







