import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherResponse } from '../models/wheater-response.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {
  apiKey = '1f9ae389adee1bc8d10104f9a22449fb';
  apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private http = inject(HttpClient);
  constructor() { }
  buscarInfoClimaCidadeAtual(): Observable<WeatherResponse> {
    const urlCompleta = 
    this.apiUrl + '?q=Dois%20Vizinhos&appid=' + this.apiKey+'&lang=pt_br&units=metrics';

    return this.http.get<WeatherResponse>(urlCompleta);
  }
}