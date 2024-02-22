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

const myLibrary = ["book1", "book2", "book"];

function Book(author, title, pages, read) {
  (this.author = author),
    (this.title = title),
    (this.pages = pages),
    (this.read = read);
}

Book.prototype.bookInfo = function () {
  return `The book "${this.title}" by ${this.author}, spanning ${this.pages} pages, is marked as ${this.read}.`;
};

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
  console.log("library has", myLibrary);
});

function displayBooks() {
  myLibrary.filter((item) => {
    if (myLibrary.indexOf(item) === myLibrary.length - 1) {
      let div = document.createElement("div");
      div.textContent = item.bookInfo();
      display.appendChild(div);
      console.log(item);
    }
  });
}
