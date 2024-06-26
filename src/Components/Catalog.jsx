import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import { IoSearch } from "react-icons/io5";
import Header from './Header';

const Catalog = () => {
  const [books, setBooks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    // Simula a fetch dos dados do arquivo JSON
    const fetchBooks = async () => {
      try {
        const response = await fetch('/books.json'); // Caminho para o JSON
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Books fetched:', data); // Log dos dados recebidos
        setBooks(data);
        setSearchResults(data); // Inicializa com todos os livros
      } catch (error) {
        console.error('Failed to fetch books:', error);
      }
    };

    fetchBooks();
  }, []);

  const handleSearch = (e) => {
    const { value } = e.target;
    setQuery(value);

    // Configuração do Fuse.js
    const fuse = new Fuse(books, {
      keys: ['title', 'author'],
      threshold: 0.3 // Quanto menor, mais preciso
    });

    const results = fuse.search(value);
    setSearchResults(value ? results.map(result => result.item) : books);
  };

  return (
    <div>
      <Header />
            <section className="page">

      <h1>Book Catalog</h1>
      <input
        type="text"
        placeholder="Search for a book"
        value={query}
        onChange={handleSearch}
      />
      <button><IoSearch className="icon" /></button>

      <div className="book-list">
        {searchResults.map(book => (
          <div key={book.id} className="book-item">
            <h2 className='titleBooks'>{book.title}</h2>
            <a href={book.bookUrl} target="_blank" rel="noopener noreferrer">
              <img src={book.imageUrl} alt={book.title} style={{ width: '200px', height: '300px' }} />
            </a>
            <p>{book.author}</p>
            <a href={book.bookUrl} target="_blank" rel="noopener noreferrer">
              Baixar Livro
            </a>
          </div>
        ))}
      </div>
      </section>
    </div>
  );
};

export default Catalog;
