let books =
  localStorage.getItem("books") === undefined ||
  localStorage.getItem("books") === null
    ? []
    : JSON.parse(localStorage.getItem("books"));
const submitbtn = document.getElementById("submit");

submitbtn.addEventListener("click", function () {
  const title = document.getElementById("input-title");
  const author = document.getElementById("input-author");
  const titleIpnut = title.value;
  const authorIpnut = author.value;
  addbook(titleIpnut, authorIpnut);
  author.value = "";
  title.value = "";
});

function addbook(title, author){
  if (title.length < 2 && author.length < 1) {
    const message = document.getElementById('message');
    message.innerHTML = 'please, fill all input fields';
  } else {
    const book = {
    id: books && books.length > 0 ? books[books.length - 1].id + 1 : 1,
    title: title,
    author: author,
  };
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
  Mybooks();
  }
}
function Mybooks() {
    if (books && books.length) {
      let section = document.querySelector('.books');
      section.innerHTML = '';
      const listTtitle = document.createElement('h1');
      listTtitle.innerHTML = 'Awesome Books';
      section.appendChild(listTtitle);
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
        section.appendChild(title);
        section.appendChild(author);
        section.appendChild(btn);
        section.appendChild(hr);
      });
    }
  }
  white_check_mark
  eyes
  raised_hands
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  