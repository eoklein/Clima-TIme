import { useState } from 'react';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';
import { getWeatherData } from '../services/weatherApi';

const SearchPage = ({ onNavigateToHome }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (query) => {
    if (!query.trim()) return;
    
    setLoading(true);
    setError('');
    setWeatherData(null);
    
    try {
      const data = await getWeatherData(query);
      setWeatherData(data);
    } catch (err) {
      if (err.message.includes('Chave API inválida')) {
        setError('Erro: Chave API do OpenWeather inválida. Verifique sua configuração.');
      } else if (err.message.includes('city not found')) {
        setError('Cidade não encontrada. Verifique o nome e tente novamente.');
      } else {
        setError(err.message || 'Erro ao buscar dados do clima');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-page">
      <div className="search-header">
        <button onClick={onNavigateToHome} className="back-button">
          ← Voltar ao início
        </button>
        <h1>Buscar Clima</h1>
      </div>
      
      <SearchBar onSearch={handleSearch} />
      
      {loading && <div className="loading">Carregando...</div>}
      
      {error && (
        <div className="error-message">
          <p>{error}</p>
          {error.includes('Chave API') && (
            <div className="api-help">
              <p>Como resolver:</p>
              <ol>
                <li>Obtenha uma chave em: https://home.openweathermap.org/api_keys</li>
                <li>Crie um arquivo <code>.env</code> na raiz do projeto</li>
                <li>Adicione: <code>VITE_OPENWEATHER_API_KEY=sua_chave_aqui</code></li>
                <li>Reinicie o servidor: <code>npm run dev</code></li>
              </ol>
            </div>
          )}
        </div>
      )}
      
      {weatherData && <WeatherCard weatherData={weatherData} />}
      
      <footer>
        <p>Dados por OpenWeather</p>
      </footer>
    </div>
  );
};

export default SearchPage;
