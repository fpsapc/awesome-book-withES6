class AwesomeBooks {
  // call constructor
  constructor() {
    this.books = [];
    this.titleInput = document.getElementById('title');
    this.authorInput = document.getElementById('author');
    this.addBtn = document.getElementById('addBtn');
    this.bookList = document.getElementById('bookList');

    this.displayBooks();

    this.addBtn.addEventListener('click', () => {
      this.addBook();
    });

    this.bookList.addEventListener('click', (event) => {
      if (event.target.classList.contains('removeBtn')) {
        const bIndex = event.target.dataset.bookIndex;
        this.removeBook(bIndex);
      }
    });
  }

  // define displayBooks method for class
  displayBooks() {
    this.bookList.innerHTML = '';
    this.books.forEach((book, index) => {
      const li = document.createElement('li');
      li.classList.add('listStyle');
      li.innerHTML = `'${book.title}' by ${book.author}`;
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.classList.add('removeBtn');
      removeBtn.setAttribute('data-book-index', index);
      li.appendChild(removeBtn);
      this.bookList.appendChild(li);
      const hr = document.createElement('hr');
      this.bookList.appendChild(hr);
    });
  }

  // define addBook method for class
  addBook() {
    if (this.titleInput.value !== '' && this.authorInput.value !== '') {
      const title = this.titleInput.value;
      const author = this.authorInput.value;

      this.books.push({ title, author });
      localStorage.setItem('books', JSON.stringify(this.books));

      this.titleInput.value = '';
      this.authorInput.value = '';

      this.displayBooks();
    }
  }

  // define removeBook method for class
  removeBook(bIndex) {
    this.books.splice(bIndex, 1);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
  }
}

export default AwesomeBooks;
