import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const categories = [
    { value: 'general', label: 'General' },
    { value: 'business', label: 'Business' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'health', label: 'Health' },
    { value: 'science', label: 'Science' },
    { value: 'sports', label: 'Sports' },
    { value: 'technology', label: 'Technology' }
  ];
  

  useEffect(() => {
    if (!isSearching) {
      fetchNews(selectedCategory);
    }
  }, [selectedCategory, isSearching]);

  const fetchNews = async (category = 'general') => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:3000/api/news?category=${category}`);
      if (!response.ok) {
        throw new Error('Failed to fetch news');
      }
      const data = await response.json();
      setNews(data.articles);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const searchNews = async (query) => {
    if (!query.trim()) {
      setIsSearching(false);
      fetchNews(selectedCategory);
      return;
    }

    try {
      setLoading(true);
      setIsSearching(true);
      const response = await fetch(`http://localhost:3000/api/news/search?q=${encodeURIComponent(query)}`);
      if (!response.ok) {
        throw new Error('Failed to search news');
      }
      const data = await response.json();
      setNews(data.articles);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchQuery('');
    setIsSearching(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    searchNews(searchQuery);
  };

  if (loading) return <div className="loading">Loading news...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="App">
      <header className="App-header">
        <h1>News Aggregator</h1>
        <form onSubmit={handleSearchSubmit} className="search-form">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search for news..."
            className="search-input"
          />
          <button type="submit" className="search-button">Search</button>
        </form>
        <div className="category-selector">
          {categories.map((category) => (
            <button
              key={category.value}
              className={`category-button ${selectedCategory === category.value && !isSearching ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category.value)}
            >
              {category.label}
            </button>
          ))}
        </div>
      </header>
      <main className="news-container">
        {news.map((article, index) => (
          <article key={index} className="news-article">
            {article.urlToImage && (
              <img src={article.urlToImage} alt={article.title} className="article-image" />
            )}
            <div className="article-content">
              <h2 className="article-title">
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  {article.title}
                </a>
              </h2>
              <p className="article-description">{article.description}</p>
              <div className="article-meta">
                <span className="article-source">{article.source.name}</span>
                <span className="article-date">
                  {new Date(article.publishedAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
}

export default App;
