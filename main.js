const display = document.querySelector(".display");
const dialog = document.querySelector("dialog");

//btns
const openBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");
const addBtn = document.querySelector("#add-book");

//inputs
const inputs = document.querySelectorAll("input");
const authorInput = document.querySelector("#author");
const titleInput = document.querySelector("#title");
const pagesInput = document.querySelector("#pages");
const readInput = document.querySelector("#read");
// console.log(authorInput.value);

document.body.appendChild(display);

//dialog buttons
openBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});

const myLibrary = [];

function Book(author, title, pages, read) {
  (this.author = author),
    (this.title = title),
    (this.pages = pages),
    (this.read = read);
}

function addBookToLibrary() {
  const newBook = new Book(
    authorInput.value,
    titleInput.value,
    pagesInput.value,
    readInput.value
  );
  myLibrary.push(newBook);
}

addBtn.addEventListener("click", (event) => {
  event.preventDefault();
  addBookToLibrary();
  displayBooks();

  //clear inputs
  inputs.forEach((input) => {
    input.value = "";
  });
  console.log("library has", myLibrary);
});

function displayBooks() {
  display.innerHTML = "";

  myLibrary.forEach((book) => {
    const bookElement = document.createElement("div");
    const btn = document.createElement("button");

    bookElement.classList.add("book");
    btn.textContent = "Delete Book";

    bookElement.innerHTML = `
          <h2>${book.title}</h2>
          <p>Author: ${book.author}</p>
          <p>Pages: ${book.pages}</p>
          <p>Mark as: ${book.read}</p>
      `;

    btn.addEventListener("click", () => {
      myLibrary.splice(myLibrary.indexOf(book), 1);
      bookElement.remove();
      console.log(myLibrary);
    });

    bookElement.appendChild(btn);
    display.appendChild(bookElement);
  });
}
