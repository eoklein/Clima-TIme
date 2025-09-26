# Clima Tempo

App de clima minimalista com ícones arredondados. Mostra temperatura atual, sensação térmica e condição com imagem, detecta sua localização e permite buscar qualquer cidade/estado/país.

## Tecnologias
- React + Vite
- Axios
- OpenWeather API (Current Weather)

## Pré-requisitos
- Node 18+
- Uma chave da API OpenWeather: https://home.openweathermap.org/api_keys

## Configuração
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Configure o arquivo `.env` na raiz do projeto (baseado em `.env.example`):
   ```env
   VITE_OPENWEATHER_API_KEY=COLOQUE_SUA_CHAVE_AQUI
   ```

## Executar em desenvolvimento
```bash
npm run dev
```
Abra o endereço mostrado (geralmente http://localhost:5173).

## Uso
- O app tenta usar sua geolocalização ao abrir. Se falhar, usa "São Paulo, BR" como padrão.
- Use a busca para digitar: "cidade", "cidade, estado", ou "cidade, estado, país" (por exemplo: `Porto Alegre, RS, BR` ou `Paris, FR`).

## Personalização
- Estilos em `src/styles.css`.
- Ícones em `src/icons/WeatherIcons.jsx`.
- Cartão em `src/components/WeatherCard.jsx`.

## Produção
```bash
npm run build
npm run preview
```

## Licença
MIT
