let books = localStorage.getItem('books') === null || localStorage.getItem('books') === undefined ? [] : JSON.parse(localStorage.getItem('books'));

class Books{
  constructor (){
    this.id= '';
    this.author = '';
    this.title = '';
    this.books = [];
  }

  addBook(id, author, title){
    this.id= id;
    this.author = author;
    this.title = title;
    this.books.push({id:this.id, author:this.author, title:this.title});
  }
  removeBook(id){
    this.books = this.books.filter(book => book.id !== id) 
  }

  getBooks() {
    return this.books;
  }

  
}

const submitbtn = document.getElementById('submit');

function Mybooks() {
  if (books && books.length >= 0) {
    const displyBooks = document.querySelector('.bookslist');
    displyBooks.innerHTML = '';
    books.forEach((book) => {
      const author = document.createElement('p');
      const title = document.createElement('p');
      const btn = document.createElement('button');
      btn.innerHTML = 'Remove';
      const hr = document.createElement('hr');
      title.innerHTML = book.title;
      author.innerHTML = `by ${book.author}`;
      btn.setAttribute('id', book.id);
      btn.setAttribute('class', 'remove-btn');
      btn.setAttribute('onclick', `removeme(${book.id});`);
      displyBooks.appendChild(title);
      displyBooks.appendChild(author);
      displyBooks.appendChild(btn);
      displyBooks.appendChild(hr);
    });
  }
}

function addbook(title, author) {
  if (title.length < 2 && author.length < 1) {
    const message = document.getElementById('message');
    message.innerHTML = 'please, fill all input fields';
  } else {
    const book = {
      id: books && books.length > 0 ? books[books.length - 1].id + 1 : 1,
      title,
      author,
    };
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
    Mybooks();
  }
}

submitbtn.addEventListener('click', () => {
  const title = document.getElementById('input-title');
  const author = document.getElementById('input-author');
  const titleIpnut = title.value;
  const authorIpnut = author.value;
  addbook(titleIpnut, authorIpnut);
  author.value = '';
  title.value = '';
});

function removeme(id) {
  books = books.filter((book) => book.id !== Number(id));
  localStorage.setItem('books', JSON.stringify(books));
  Mybooks();
}

removeme();
Mybooks();
