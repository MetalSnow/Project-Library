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

  myLibrary.map((book, index) => {
    const bookElement = document.createElement("div");
    const deleteBtn = document.createElement("button");
    const statusBtn = document.createElement("button");
    const h2 = document.createElement("h2");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    bookElement.classList.add("book");
    bookElement.dataset.number = index;
    deleteBtn.textContent = "Delete Book";
    statusBtn.textContent = "read";

    h2.innerText = book.title;
    p1.innerText = `Author: ${book.author}`;
    p2.innerText = `Pages: ${book.pages}`;
    p3.innerText = `Mark as: ${book.read}`;

    function deleteBook() {
      myLibrary.splice(index, 1);
      btn.removeEventListener("click", deleteBook);
      displayBooks();
      console.log(myLibrary);
    }

    function toggleStatus() {
      book.read;
    }

    deleteBtn.addEventListener("click", deleteBook);
    statusBtn.addEventListener("click", toggleStatus);

    bookElement.append(h2, p1, p2, p3, statusBtn, deleteBtn);
    display.appendChild(bookElement);
  });
}
