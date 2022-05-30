let books =
  localStorage.getItem('books') === undefined ||
  localStorage.getItem('books') === null
    ? []
    : JSON.parse(localStorage.getItem('books'));