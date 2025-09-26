import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {
  apiKey = '1f9ae389adee1bc8d10104f9a22449fb';
  apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  constructor() { }
  buscarInfoClimaCidadeAtual() {
    const urlCompleta = 
    this.apiUrl + '?q=Dois%20Vizinhos&appid=' +this.apiKey+'&lang=pt_br&units=metrics';

    console.log(urlCompleta);
}
}