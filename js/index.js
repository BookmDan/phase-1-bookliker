document.addEventListener("DOMContentLoaded", function () {
  const divContainer = document.getElementById("show-panel");
  const listPanel = document.getElementById("list-panel");
  const list = document.getElementById('list');
  const title = document.createElement('title');
  
  // fetch
  fetch('http://localhost:3000/books')
    .then((response) => response.json())
    .then((data) => {
      data.forEach((book) => {
        title.addEventListener('click', () => {
          populateInfo(book);
        })
        divContainer.appendChild(title) // we need to get the bookInfo such as thumbnail, description, and list of users who liked the book and append here
      })
    })
    .catch((err) => {
      console.error('Error fetching book info:', err)
    })


  function populateInfo(book) {
    // must create a li for each book and add the li to ul element 
    divContainer.innerHTML = '';

    title.textContent = book.title;

    const p = document.createElement('p');
    description.textContent = book.description; 

    const p2 = document.createElement('p2')
    followers.textContent = book[users].key();

    divContainer.appendChild(title);
    divContainer.appendChild(p);
    divContainer.appendChild(p2);
  }
});

// first fetch the info 
// the div container will be show-panel
// list panel will contain list of titles 
// when user clicks title, displays books description, list of users who liked the book
// displayed in div#show-panel element get
//const dogForm = document.querySelector('form#dog-form')