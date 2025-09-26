import { useState } from 'react';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import './styles.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateToSearch = () => {
    setCurrentPage('search');
  };

  const navigateToHome = () => {
    setCurrentPage('home');
  };

  return (
    <div className="app">
      {currentPage === 'home' ? (
        <HomePage onNavigateToSearch={navigateToSearch} />
      ) : (
        <SearchPage onNavigateToHome={navigateToHome} />
      )}
    </div>
  );
}

export default App;