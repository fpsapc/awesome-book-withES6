import { DateTime } from './modules/luxon.js';

import AwesomeBooks from './modules/awesomebooks.js';

// Date and time from luxon.js
const currentDate = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
const currentTime = document.getElementById('currentTime');
currentTime.innerHTML = currentDate.toString();

// Navigations part
const list = document.getElementById('list');
const listContainer = document.getElementById('TitleContainer');
const addNew = document.getElementById('addNew');
const addBook = document.getElementById('addBook');
const contact = document.getElementById('contact');
const contactInfo = document.getElementById('contactInfo');

window.addEventListener('load', () => {
  listContainer.classList.add('active');
});

list.addEventListener('click', () => {
  listContainer.classList.add('active');
  addBook.classList.remove('active');
  contactInfo.classList.remove('active');
});

addNew.addEventListener('click', () => {
  addBook.classList.add('active');
  listContainer.classList.remove('active');
  contactInfo.classList.remove('active');
});

contact.addEventListener('click', () => {
  contactInfo.classList.add('active');
  listContainer.classList.remove('active');
  addBook.classList.remove('active');
});

// Create an object of AwesomeBooks
const awesomeBooks = new AwesomeBooks();
if (localStorage.getItem('books')) {
  awesomeBooks.books = JSON.parse(localStorage.getItem('books'));
  awesomeBooks.displayBooks();
}