
/*
    1. Observe and Collapse the getAllBooks method.
    2. create the renderBooks method which renders the books in the table.
    Sample HTML for render books.
    <tr>
      <td>Insert book id here</td>
      <td>Insert Title here</td>
      <td>Insert Author here</td>
      <td>Insert Rating here</td>
      <td>Insert Number Of Ratings here</td>
    </tr>
    3. select the table body, select the form and call the two function from the
    previous steps. This should show in the table.

    //We won't be covering the parts below for this exercise
    4. create the getAuthors function and present the authors array step by step.
      - use map to display the authors
      - use filter to get distinct authors
      - present sort as a function on an array to show you can sort things!
   
      5. create the function renderAuthorOptions to add the options to the select.

    6. add the event listener to the form.
    7. get the form values.
    8. create the getBooksFilter function with 3 params: filterQuery, objectkey, and booklist
      - this is going to fiter out based on a given key.
    9. in your event handler:
      - get books.
      - pass the subset into a filter
      - render the booklist
*/
/*
Sample object in the array of books returned from getAllBooks:
{"bookId":1,
  "title": "Harry Potter and the Half-Blood Prince (Harry Potter  #6)",
  "author": "J.K. Rowling/Mary GrandPrÃ©",
  "rating":4.57,
  "isbn":"439785960",
  "language":"eng",
  "numberOfRatings": 652}
*/

// importing bootstrap
import "bootstrap/dist/css/bootstrap.min.css"

// import getAllBooks
import {getAllBooks} from "../data/books.js"

let booksArray = getAllBooks();

console.log(booksArray);

const renderBooks = (books) => {
  let elem = document.querySelector("#book-rows");
  elem.innerHTML = "";

  books.forEach((book) => {
    elem.innerHTML += `
      <tr>
        <td>${book.bookId}</td>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.rating}</td>
        <td>${book.numberOfRatings}</td>
      </tr>`
  });
}

renderBooks(booksArray);