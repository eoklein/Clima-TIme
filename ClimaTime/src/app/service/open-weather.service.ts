import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {

  apiKey = `1f9ae389adee1bc8d10104f9a22449fb`;
  apiUrl = `https://api.openweathermap.org/data/2.5/weather`;

constructor() { }

buscarInfoClimaCidadeAtual() {

  const urlCompleta = '?q={city name}&appid=' + this.apiKey;

}

}
