import React, { useState, useEffect } from 'react';
import Header from "./Header";
import { IoSearch } from "react-icons/io5";
import Fuse from 'fuse.js'; // Certifique-se de que a biblioteca Fuse.js está instalada
import "../../src/App.css"

const Home = () => {
  const [books, setBooks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    // Simula a fetch dos dados do arquivo JSON
    const fetchBooks = async () => {
      try {
        // Substitua pelo caminho correto do seu JSON
        const response = await fetch('/books.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Livros carregados:', data); // Debug: Verifica se os livros foram carregados corretamente
        console.log('Número de livros carregados:', data.length); // Verifica a quantidade de livros carregados
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

        {/* Renderiza todos os livros */}
        <div className="book-list">
          {searchResults.length > 0 ? (
            searchResults.map(book => (
              <div key={book.id} className="book-item">
                <h2 className='titleBooks'>{book.title}</h2>
                <a href={book.bookUrl} target="_blank" rel="noopener noreferrer">
                  <img src={book.imageUrl} alt={book.title} style={{ width: '200px', height: '300px' }} />
                </a>
                <p>{book.author}</p>
                <a className='livros' href={book.bookUrl} target="_blank" rel="noopener noreferrer">
                  Baixar Livro
                </a>
              </div>
            ))
          ) : (
            books.map(book => (
              <div key={book.id} className="book-item">
                <h2 className='titleBooks'>{book.title}</h2>
                <a href={book.bookUrl} target="_blank" rel="noopener noreferrer">
                  <img src={book.imageUrl} alt={book.title} style={{ width: '200px', height: '300px' }} />
                </a>
                <p>{book.author}</p>
                <a className='livros' href={book.bookUrl} target="_blank" rel="noopener noreferrer">
                  Baixar Livro
                </a>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
