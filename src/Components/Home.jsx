// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import Header from "./Header";
import { IoSearch } from "react-icons/io5";

const Home = () => {
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
        setBooks(data);
      } catch (error) {
        console.error('Failed to fetch books:', error);
      }
    };

    fetchBooks();
  }, []);

  const handleSearch = (e) => {
    const { value } = e.target;
    setQuery(value);

    if (value.trim() === "") {
      setSearchResults([]);
      return;
    }

    // Configuração do Fuse.js
    const fuse = new Fuse(books, {
      keys: ['title', 'author'],
      threshold: 0.3 // Quanto menor, mais preciso
    });

    const results = fuse.search(value);
    setSearchResults(results.map(result => result.item));
  };

  return (
    <div>
      <header>
        <Header />
      </header>
      <section className="page">
        <h1>Free Reading</h1>
        <input
          type="text"
          placeholder="Busque seu livro"
          value={query}
          onChange={handleSearch}
        />
        <button><IoSearch className="icon" /></button>

        {searchResults.length > 0 && (
          <div className="book-list">
            {searchResults.map(book => (
              <div key={book.id} className="book-item">
                <h2>{book.title}</h2>
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
        )}
      </section>
    </div>
  );
};

export default Home;
