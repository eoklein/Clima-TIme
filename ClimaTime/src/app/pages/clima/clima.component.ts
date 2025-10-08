import { Component, inject, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { Weather, WeatherResponse } from '../../models/wheater-response.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of, OperatorFunction } from 'rxjs';
import { DecimalPipe, TitleCasePipe } from '@angular/common'; 
import { OpenWeatherService } from '../../service/open-weather.service';
import { TempCidadeComponent } from "../../components/temp-cidade/temp-cidade.component";
import { NomeCidadeComponent as NomeCidadeComponent } from "../../components/nome-cidade/nome-cidade.component";
import { AppLoadingCidade } from "../../components/loading-cidade/app-loading.component";
import { ImgTituloComponent } from "../../components/img-titulo/img-titulo.component";
import { MinMaxComponent } from "../../components/min-max/min-max.component";
import { AppButtonComponent } from "../../components/app-button/app-button.component";
import { AppClimaContainerComponent} from "../../components/clima-conteiner/clima-conteiner.component";

@Component({
  selector: 'app-clima',
  standalone: true,
  imports: [AppButtonComponent, AppClimaContainerComponent],
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.scss']
})
export class ClimaComponent  {

  navegador = inject(Router);
  openWeatherService = inject(OpenWeatherService);
  dadosClima = toSignal<WeatherResponse | null>(
    this.openWeatherService.buscarInfoClimaCidadeAtual()
    .pipe(
      catchError( err => {
        console.error('Erro ao buscar dados do clima:', err);
        return of(null)
      })
    ),
    { initialValue: null }
  );
  mensagemCarregando: string = 'Carregando...';

  navegarParaTelaDePesquisa() {
    this.navegador.navigate(['/pesquisa']);
    this.mensagemCarregando = "Carregando temperatura";
  }
}

function pipe(arg0: OperatorFunction<unknown, unknown>): NoInfer<import("@angular/core/rxjs-interop").ToSignalOptions<WeatherResponse | null | undefined>> & { initialValue?: undefined; requireSync?: false; } {
  throw new Error('Function not implemented.');
}