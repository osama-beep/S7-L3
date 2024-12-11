document.addEventListener('DOMContentLoaded', () => {
    const booksContainer = document.getElementById('booksContainer');
    const apiEndpoint = 'https://striveschool-api.herokuapp.com/books';
  
    const createBookCard = (book) => {
      const col = document.createElement('div');
      col.className = 'col-lg-3 col-md-4 col-sm-6';
      
      col.innerHTML = `
        <div class="card h-100">
          <img src="${book.img}" class="card-img-top" alt="${book.title}">
          <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text">€${book.price.toFixed(2)}</p>
            <button class="btn btn-danger btn-sm scarta-btn">Scarta</button>
          </div>
        </div>
      `;
      
      col.querySelector('.scarta-btn').addEventListener('click', () => {
        col.remove();
      });
  
      return col;
    };
  
    fetch(apiEndpoint)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Errore durante il fetch dei dati');
        }
        return response.json();
      })
      .then((books) => {
        books.forEach((book) => {
          const bookCard = createBookCard(book);
          booksContainer.appendChild(bookCard);
        });
      })
      .catch((error) => {
        console.error('Errore:', error);
      });
  });
  