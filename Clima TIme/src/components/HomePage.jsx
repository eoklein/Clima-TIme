import { useState, useEffect } from 'react';
import { getWeatherData } from '../services/weatherApi';

const HomePage = ({ onNavigateToSearch }) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getCurrentLocationWeather();
  }, []);

  const getCurrentLocationWeather = async () => {
    try {
      setLoading(true);
      setError('');
      
      if (!navigator.geolocation) {
        throw new Error('Geolocalização não suportada pelo navegador');
      }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const weatherData = await getWeatherDataByCoords(latitude, longitude);
          setCurrentWeather(weatherData);
          setLoading(false);
        },
        (error) => {
          console.error('Erro de geolocalização:', error);
          setError('Não foi possível obter sua localização. Você pode buscar por uma cidade específica.');
          setLoading(false);
        }
      );
    } catch (err) {
      setError('Erro ao obter localização atual');
      setLoading(false);
    }
  };

  const getWeatherDataByCoords = async (lat, lon) => {
    try {
      const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY || '4d8fb5b93d4af21d66a2948710284366';
      const BASE_URL = import.meta.env.VITE_OPENWEATHER_BASE_URL || 'https://api.openweathermap.org/data/2.5';
      
      const response = await fetch(
        `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=pt_br`
      );
      
      if (!response.ok) {
        throw new Error('Erro ao buscar dados do clima');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Erro na API:', error);
      throw error;
    }
  };

  const getWeatherIcon = (iconCode) => {
    const iconMap = {
      '01d': '☀️', '01n': '🌙',
      '02d': '⛅', '02n': '☁️',
      '03d': '☁️', '03n': '☁️',
      '04d': '☁️', '04n': '☁️',
      '09d': '🌧️', '09n': '🌧️',
      '10d': '🌦️', '10n': '🌧️',
      '11d': '⛈️', '11n': '⛈️',
      '13d': '❄️', '13n': '❄️',
      '50d': '🌫️', '50n': '🌫️'
    };
    return iconMap[iconCode] || '🌤️';
  };

  return (
    <div className="homepage">
      <div className="hero-section">
        <h1 className="hero-title">Clima Tempo</h1>
        <p className="hero-subtitle">Sua fonte confiável de informações meteorológicas</p>
        <div className="hero-description">
          <p>Obtenha dados precisos do clima em tempo real para qualquer cidade do mundo.</p>
          <p>Informações atualizadas, interface moderna e fácil de usar.</p>
        </div>
      </div>

      <div className="features-section">
        <h2>Por que escolher o Clima Tempo?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🌡️</div>
            <h3>Temperatura Precisa</h3>
            <p>Dados atualizados em tempo real com informações detalhadas sobre temperatura, sensação térmica e variações.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3>Global</h3>
            <p>Consulte o clima de qualquer cidade do mundo com informações precisas e confiáveis.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Rápido</h3>
            <p>Interface otimizada para consultas rápidas e resultados instantâneos.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Responsivo</h3>
            <p>Funciona perfeitamente em dispositivos móveis, tablets e desktops.</p>
          </div>
        </div>
      </div>

      <div className="current-weather-section">
        <h2>Clima na sua localização</h2>
        {loading && (
          <div className="loading-weather">
            <div className="loading-spinner"></div>
            <p>Obtendo sua localização...</p>
          </div>
        )}
        
        {error && (
          <div className="error-weather">
            <p>{error}</p>
            <button onClick={getCurrentLocationWeather} className="retry-button">
              Tentar novamente
            </button>
          </div>
        )}
        
        {currentWeather && (
          <div className="current-weather-card">
            <div className="weather-header">
              <h3>{currentWeather.name}, {currentWeather.sys?.country}</h3>
              <div className="weather-icon">{getWeatherIcon(currentWeather.weather[0].icon)}</div>
            </div>
            <div className="weather-main">
              <div className="temperature">{Math.round(currentWeather.main.temp)}°C</div>
              <div className="description">{currentWeather.weather[0].description}</div>
            </div>
            <div className="weather-details">
              <div className="detail">
                <span className="detail-icon">🌡️</span>
                <span>Sensação: {Math.round(currentWeather.main.feels_like)}°C</span>
              </div>
              <div className="detail">
                <span className="detail-icon">💧</span>
                <span>Umidade: {currentWeather.main.humidity}%</span>
              </div>
              <div className="detail">
                <span className="detail-icon">💨</span>
                <span>Vento: {currentWeather.wind.speed} m/s</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="cta-section">
        <h2>Explore o clima mundial</h2>
        <p>Descubra as condições meteorológicas de qualquer lugar do planeta</p>
        <button onClick={onNavigateToSearch} className="cta-button">
          Buscar Clima
          <span className="button-icon">🔍</span>
        </button>
      </div>

      <div className="info-section">
        <h3>Como funciona?</h3>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <p>Digite o nome da cidade que deseja consultar</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <p>Nossa API busca dados atualizados em tempo real</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <p>Receba informações detalhadas sobre o clima</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
