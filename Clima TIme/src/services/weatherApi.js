const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY || '4d8fb5b93d4af21d66a2948710284366';
const BASE_URL = import.meta.env.VITE_OPENWEATHER_BASE_URL || 'https://api.openweathermap.org/data/2.5';

export const getWeatherData = async (city, country = '') => {
  try {
    const query = encodeURIComponent(country ? `${city},${country}` : city);
    const url = `${BASE_URL}/weather?q=${query}&appid=${API_KEY}&units=metric&lang=pt_br&cnt=1`;
    
    console.log('Fazendo requisição para:', url); // Debug
    console.log('API_KEY configurada:', API_KEY ? 'Sim' : 'Não'); // Debug
    console.log('BASE_URL configurada:', BASE_URL); // Debug
    
    const response = await fetch(url);
    
    if (!response.ok) {
      if (response.status === 401) {
        throw new Error('Chave API inválida. Verifique sua chave OpenWeather.');
      } else if (response.status === 404) {
        throw new Error('Cidade não encontrada. Verifique o nome e tente novamente.');
      } else {
        throw new Error(`Erro HTTP ${response.status}: ${response.statusText}`);
      }
    }
    
    const data = await response.json();
    console.log('Dados recebidos da API:', data); // Debug
    return data;
  } catch (error) {
    console.error('Erro na API:', error);
    throw new Error(error.message || 'Erro ao buscar dados do clima');
  }
};

export const getWeatherIconUrl = (iconCode) => {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};