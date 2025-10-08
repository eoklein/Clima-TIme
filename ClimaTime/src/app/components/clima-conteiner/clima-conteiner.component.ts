import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { NomeCidadeComponent } from "../nome-cidade/nome-cidade.component";
import { TempCidadeComponent } from "../temp-cidade/temp-cidade.component";
import { ImgTituloComponent } from "../img-titulo/img-titulo.component";
import { MinMaxComponent } from "../min-max/min-max.component";
import { AppLoadingCidade } from "../loading-cidade/app-loading.component";
import { WeatherResponse } from '../../models/wheater-response.model';
import { DecimalPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { OpenWeatherService } from '../../service/open-weather.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-clima-container',
  standalone: true,
  imports: [DecimalPipe, NomeCidadeComponent, TempCidadeComponent, ImgTituloComponent, MinMaxComponent, AppLoadingCidade],
  templateUrl: './clima-conteiner.component.html',
  styleUrls: ['./clima-conteiner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppClimaContainerComponent {

  mensagemCarregando: string = 'Carregando temperatura'
  openWeather = inject(OpenWeatherService);

  dadosClima = toSignal<WeatherResponse | null>(
    this.openWeather.buscarInfoClimaCidadeAtual()
    .pipe(
      catchError(err => {
        console.error('Erro ao buscar dados do clima', err);
        return of(null);
      })
    ),
    {initialValue: null}
  );
}