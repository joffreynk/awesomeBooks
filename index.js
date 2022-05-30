let books =
  localStorage.getItem('books') === undefined ||
  localStorage.getItem('books') === null
    ? []
    : JSON.parse(localStorage.getItem('books'));
    const submitbtn = document.getElementById('submit');

    submitbtn.addEventListener('click', function() {
      const title = document.getElementById('input-title');
      const author = document.getElementById('input-author');
      const titleIpnut = title.value;
      const authorIpnut = author.value;
      addbook(titleIpnut, authorIpnut);
      author.value = '';
      title.value = '';
    });