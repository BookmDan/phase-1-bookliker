// document.addEventListener("DOMContentLoaded", function () {
//   const divContainer = document.getElementById("show-panel");
//   const listPanel = document.getElementById("list-panel");
//   const list = document.getElementById('list');
//   const showPanel = document.getElementById('#show-panel');
  
//   // fetch
//   fetch('http://localhost:3000/books')
//     .then((response) => response.json())
//     .then((data) => {
//       data.forEach((book) => {
// // create list item for each book title 
//         const listItem = document.createElement("li");
//         listItem.textContent = book.title;

//         listItem.addEventListener('click', () => {
//           populateInfo(book);
//         })
//         list.appendChild(title) // we need to get the bookInfo such as thumbnail, description, and list of users who liked the book and append here
//         listPanel.appendChild(list);
//       })
//     })
//     .catch((err) => {
//       console.error('Error fetching book info:', err)
//     })


//   function populateInfo(book) {
//     // must create a li for each book and add the li to ul element 
//     divContainer.innerHTML = '';

//     const title = document.createElement('h2');
//     title.textContent = book.title;

//     const thumbnail = document.createElement('img');
//     thumbnail.src = book.img_url;

//     const description = document.createElement('p');
//     description.textContent = book.description; 

// // getting the user list 
    
//     const userList = document.createElement('ul');
//     book.users.forEach((user) => {
//       // create list which we later add to ul 
//       const userItem = document.createElement('li');
//       userItem.textContent = user.username;
//       userList.appendChild(userItem);
//       // then add user list to divcontainer
//     })
//     // followers.textContent = book[users].key();

//     divContainer.appendChild(title);
//     divContainer.appendChild(thumbnail);
//     divContainer.appendChild(description);
//     divContainer.appendChild(userList);
//   }
// });

// first fetch the info 
// the div container will be show-panel
// list panel will contain list of titles 
// when user clicks title, displays books description, list of users who liked the book
// displayed in div#show-panel element get
//const dogForm = document.querySelector('form#dog-form')

document.addEventListener("DOMContentLoaded", function() {});

//const
const showPanel = document.querySelector("#show-panel")
const allBooks = "http://localhost:3000/books"
const bookUl = document.querySelector("#list")
//pillar 1, fetch
fetchBooks()

function fetchBooks() {
    fetch(allBooks)
    .then(resp => resp.json())
    // .then(data => console.log("hi",data))
    .then(data => slapBookOnDom(data))
}

//pillar 2, Min Dom/events 
function slapBookOnDom(data) {
    // console.log("hi", data)
    data.forEach((singleBook) => {
        // console.log(singleBook)
    //create li in this function because this is 
    //where you're iterating
    let bookLi = document.createElement("LI"); 
    // console.log(bookLi)
    //
    bookLi.innerHTML += `
    ${singleBook.title}
    `
    //test to see what bookLi is 
    //  console.log(bookLi)
    //render books on DOM
    bookUl.append(bookLi)
    //addEventListener with arrow function 
    //anonymous function because Avi is a jerkl
    bookLi.addEventListener("click", () => handleClick(singleBook))
    //without arrow function
    // bookLi.addEventListener("click", function handleCT(event) {
        // console.log(event.target) 
    // })
    })
}



//callback arrow 
handleClick = (e) => { 
//check to see if you can click on a singleBook/bookLi
    // console.log("hi")
    // console.log(e.title)
    showPanel.innerHTML += `
        <img src=${e.img_url}/>
        <p>${e.description}</p>
        
        `
        let likeButton = document.createElement("BUTTON")
        likeButton.innerHTML += `
            ${e.users.length}
        `
        //append likeButton to showPanel and addEventListener
        showPanel.append(likeButton)
        likeButton.addEventListener("click", () => handleLike(e))
        // <button>${e.users.length}</button>

}
handleLike = (e) => {
    // console.log('Hi', e)

    let newLikedUsers = [...e.users, {"id":1, "username":"pouros"}]
    fetch(`http://localhost:3000/books/${e.id}`,{
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
      "users": newLikedUsers})
      })
    .then(res => res.json())
    .then(response => console.log(response))

}