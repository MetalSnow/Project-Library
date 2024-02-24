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
  (this.author = author || "Unkown"),
    (this.title = title || "NO TITLE"),
    (this.pages = pages || "0"),
    (this.read = read);
}

Book.prototype.toggleStatus = function () {
  if (this.read === "Not Read") {
    this.read = "Read";
  } else {
    this.read = "Not Read";
  }
};

function addBookToLibrary() {
  const newBook = new Book(
    authorInput.value,
    titleInput.value.toUpperCase(),
    pagesInput.value,
    "Not Read"
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
    statusBtn.textContent = "Read Status";

    h2.innerText = book.title;
    p1.innerText = `Author: ${book.author}`;
    p2.innerText = `Pages: ${book.pages}`;
    p3.innerText = `Mark as: ${book.read}`;

    function deleteBook() {
      myLibrary.splice(index, 1);
      deleteBtn.removeEventListener("click", deleteBook);
      displayBooks();
    }

    deleteBtn.addEventListener("click", deleteBook);

    statusBtn.addEventListener("click", () => {
      book.toggleStatus();
      p3.innerText = `Mark as: ${book.read}`;
      if (book.read === "Read") {
        statusBtn.style.opacity = "0.7";
      } else {
        statusBtn.style.opacity = "1";
      }
    });

    bookElement.append(h2, p1, p2, p3, statusBtn, deleteBtn);
    display.appendChild(bookElement);
  });
}
