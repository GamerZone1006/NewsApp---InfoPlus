import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  const [Mode, setMode] = useState('light');
  const [news, setNews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('General');

  const categories = ['General', 'Business', 'Entertainment', 'Health', 'Education', 'Sports', 'Science', 'Technology'];

  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };

  const fetchNews = async (category) => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=46047073fb0c4fe3948c5f464acc45dd`
      );
      const data = await response.json();
      setNews(data.articles);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  useEffect(() => {
    fetchNews(selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <Navbar
        mode={Mode}
        toggleMode={toggleMode}
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <div className="container">
        <Cards mode={Mode} news={news} />
      </div>
      <Footer mode={Mode} />
    </>
  );
}

export default App;