const WeatherCard = ({ weatherData }) => {
    if (!weatherData) return null;
  
    console.log('Dados do clima recebidos no WeatherCard:', weatherData); // Debug
  
    const { name, main, weather, wind, sys } = weatherData;
    const currentWeather = weather[0];
  
    // Verifica se os dados necessários existem
    if (!main || !weather || !wind) {
      console.error('Dados incompletos recebidos:', weatherData);
      return (
        <div className="weather-card error">
          <h2>Erro nos dados</h2>
          <p>Dados incompletos recebidos da API</p>
        </div>
      );
    }
  
    // Função para obter ícone baseado na condição do tempo
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
      <div className="weather-card">
        <h2>{name}, {sys?.country || 'N/A'}</h2>
        <div className="weather-info">
          <div className="weather-icon-large">
            {getWeatherIcon(currentWeather.icon)}
          </div>
          <img 
            src={`https://openweathermap.org/img/wn/${currentWeather.icon}@2x.png`} 
            alt={currentWeather.description}
            onError={(e) => {
              console.error('Erro ao carregar ícone:', e);
              e.target.style.display = 'none';
            }}
            style={{ display: 'none' }} // Esconder imagem, usar emoji
          />
          <div className="temperature">{Math.round(main.temp)}°C</div>
          <div className="description">{currentWeather.description}</div>
        </div>
        <div className="weather-details">
          <div className="detail-item">
            <span className="detail-icon">🌡️</span>
            <span>Sensação: {Math.round(main.feels_like)}°C</span>
          </div>
          <div className="detail-item">
            <span className="detail-icon">💧</span>
            <span>Umidade: {main.humidity}%</span>
          </div>
          <div className="detail-item">
            <span className="detail-icon">📊</span>
            <span>Pressão: {main.pressure} hPa</span>
          </div>
          <div className="detail-item">
            <span className="detail-icon">💨</span>
            <span>Vento: {wind.speed} m/s</span>
          </div>
          <div className="detail-item">
            <span className="detail-icon">📈</span>
            <span>Mín: {Math.round(main.temp_min)}°C</span>
          </div>
          <div className="detail-item">
            <span className="detail-icon">📉</span>
            <span>Máx: {Math.round(main.temp_max)}°C</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default WeatherCard;