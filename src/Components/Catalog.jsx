// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import { IoSearch } from "react-icons/io5";
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';

const Catalog = () => {
  const [books, setBooks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('/books.json'); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Books fetched:', data);
        setBooks(data);
        setSearchResults(data);
      } catch (error) {
        console.error('Failed to fetch books:', error);
      }
    };

    fetchBooks();
  }, []);

  const handleSearch = (e) => {
    const { value } = e.target;
    setQuery(value);

    const fuse = new Fuse(books, {
      keys: ['title', 'author'],
      threshold: 0.3
    });

    const results = fuse.search(value);
    setSearchResults(value ? results.map(result => result.item) : books);
  };

  return (
    <div>
      <Header />
      <section className="page container mt-4">
        <h1 className="text-center mb-4">Book Catalog</h1>
        <div className="input-group mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search for a book"
            value={query}
            onChange={handleSearch}
          />
          <button className="btn btn-primary">
            <IoSearch className="icon" />
          </button>
        </div>

        <div className="row">
          {searchResults.map(book => (
            <div key={book.id} className="col-md-2 mb-4">
              <div className="card h-100">
                <a href={book.bookUrl} target="_blank" rel="noopener noreferrer">
                  <img src={book.imageUrl} alt={book.title} className="card-img-top" style={{ height: '100px' }} />
                </a>
                <div className="card-body p-2">
                  <h5 className="card-title titleBooks" style={{ fontSize: '0.875rem' }}>{book.title}</h5>
                  <p className="card-text" style={{ fontSize: '0.75rem' }}>{book.author}</p>
                </div>
                <div className="card-footer p-2">
                  <a href={book.bookUrl} className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">
                    Baixar Livro
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Catalog;
