const display = document.querySelector(".display");
const dialog = document.querySelector("dialog");

//btns
const openBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");
const addBtn = document.querySelector("#add-book");

//inputs
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
  let newBook = new Book(
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
});

function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    let newDiv = document.createElement("div");
    newDiv.textContent = myLibrary[i];
    display.appendChild(newDiv);
  }
}
