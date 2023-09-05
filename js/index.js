document.addEventListener("DOMContentLoaded", function () {
  const divContainer = document.getElementById("show-panel");
  const listPanel = document.getElementById("list-panel");
  const list = document.getElementById('list');
  
  // fetch
  fetch('http://localhost:3000/books')
    .then((response) => response.json())
    .then((data) => {
      data.forEach((book) => {
// create list item for each book title 
        const listItem = document.createElement("li");
        listItem.textContent = book.title;

        listItem.addEventListener('click', () => {
          populateInfo(book);
        })
        list.appendChild(title) // we need to get the bookInfo such as thumbnail, description, and list of users who liked the book and append here
        listPanel.appendChild(list);
      })
    })
    .catch((err) => {
      console.error('Error fetching book info:', err)
    })


  function populateInfo(book) {
    // must create a li for each book and add the li to ul element 
    divContainer.innerHTML = '';

    const title = document.createElement('h2');
    title.textContent = book.title;

    const thumbnail = document.createElement('img');
    thumbnail.src = book.img_url;

    const description = document.createElement('p');
    description.textContent = book.description; 

// getting the user list 
    
    const userList = document.createElement('ul');
    book.users.forEach((user) => {
      // create list which we later add to ul 
      const userItem = document.createElement('li');
      userItem.textContent = user.username;
      userList.appendChild(userItem);
      // then add user list to divcontainer
    })
    // followers.textContent = book[users].key();

    divContainer.appendChild(title);
    divContainer.appendChild(thumbnail);
    divContainer.appendChild(description);
    divContainer.appendChild(userList);
  }
});

// first fetch the info 
// the div container will be show-panel
// list panel will contain list of titles 
// when user clicks title, displays books description, list of users who liked the book
// displayed in div#show-panel element get
//const dogForm = document.querySelector('form#dog-form')